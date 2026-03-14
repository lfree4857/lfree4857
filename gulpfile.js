const { series, src, dest } = require("gulp");
const cheerio = require("cheerio");
const rimraf = require("rimraf");
const fs = require("fs");
const { exec } = require("child_process");
const path = require("path");

function build(cb) {
  exec("npm run build", function (err, stdout, stderr) {
    console.log(stdout);
    console.error(stderr);
    cb(err);
  });
}

function dist(done) {
  const laravelPublicPath = path.resolve(__dirname, "../public/client");
  const laravelViewPath = path.resolve(__dirname, "../resources/views/welcome.blade.php");

  // Remove old client folder
  rimraf.sync(laravelPublicPath);

  // Copy everything except index.html
  src(["./build/**/*", "!./build/index.html"]).pipe(dest(laravelPublicPath));

  // Modify index.html
  const $ = cheerio.load(fs.readFileSync("./build/index.html", "utf8"));

  // Update asset paths to be relative to Laravel public path
  $("script[src], link[href]").each((i, el) => {
    const $el = $(el);
    const srcAttr = $el.attr("src");
    const hrefAttr = $el.attr("href");

    if (srcAttr && (srcAttr.includes("static") || srcAttr.endsWith(".js"))) {
      $el.attr("src", `client/${srcAttr}`);
    } else if (
      hrefAttr &&
      (hrefAttr.includes("static") || hrefAttr.endsWith(".css") || hrefAttr.includes("favicon") || hrefAttr.includes("manifest"))
    ) {
      $el.attr("href", `client/${hrefAttr}`);
    }
  });

  fs.writeFileSync(laravelViewPath, $.html(), "utf8");

  done();
}

exports.build = build;
exports.dist = dist;
exports.default = series(build, dist);
