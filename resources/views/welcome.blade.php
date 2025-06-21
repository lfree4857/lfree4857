<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <link rel="icon" href="client//favicon.ico">
    <link rel="stylesheet" href="client/css/animate.css">
    <link rel="stylesheet" href="client/css/all.css">
    <link rel="stylesheet" href="client/bootstarp/bootstrap.min.css">
    <link rel="stylesheet" href="client/css/super-classes.css">
    <link rel="stylesheet" href="client/css/style.css">
    <link rel="stylesheet" href="client/css/mobile.css">
    <link rel="stylesheet" href="client/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="theme-color" content="#000000">
    <meta name="description" content="Web site created using create-react-app">
    <link rel="apple-touch-icon" href="/logo192.png">
    <link rel="manifest" href="client//manifest.json">
    <script src="client/js/wow.js"></script>
    <script src="client/js/jquery-3.6.0.min.js"></script>
    <script src="client/ajax/jquery.validate/1.9/jquery.validate.js"></script>
    <script src="client/js/popper.min.js"></script>
    <script src="client/js/bootstrap.min.js"></script>
    <script src="client/js/custom-script.js"></script>
    <script src="client/js/contact-form.js"></script>
    <title>Innovators</title>
    <script defer="defer" src="client//static/js/main.9d08d6b7.js"></script>
    <link href="client//static/css/main.6cae0f96.css" rel="stylesheet">
</head>

<body><noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <script>
        (new WOW).init()
    </script>
    <script>
        for (var btnContainer = document.getElementById("myBtnContainer"), btns = btnContainer?.getElementsByClassName(
                "btn"), i = 0; i < btns?.length; i++) btns[i]?.addEventListener("click", (function() {
            var e = document?.getElementsByClassName("active");
            e[0].className = e[0].className.replace(" active", ""), this.className += " active"
        }))
    </script>
    <script>
        var btn = $("#button");
        $(window).scroll((function() {
            $(window).scrollTop() > 300 ? btn.addClass("show") : btn.removeClass("show")
        })), btn.on("click", (function(o) {
            o.preventDefault(), $("html, body").animate({
                scrollTop: 0
            }, "300")
        }))
    </script>
    <script>
        $(window).scroll((function() {
            $(window).scrollTop() >= 113 ? ($("header").addClass("fixed-header"), $(".banner-main-con")
                .addClass("banner-main-con2")) : ($("header").removeClass("fixed-header"), $(
                ".banner-main-con").removeClass("banner-main-con2"))
        }))
    </script>
    <script>
        document.querySelectorAll(".nav-item a").forEach((function(t, e) {
            t?.addEventListener("click", (function() {
                if (this.classList.contains("is-active")) this.classList.remove("is-active");
                else {
                    const t = document.querySelector("a.is-active");
                    t && t.classList.remove("is-active"), this.classList.add("is-active")
                }
            }))
        })), document.querySelectorAll("#myBtnContainer button").forEach((function(t, e) {
            t?.addEventListener("click", (function() {
                if (this.classList.contains("active_button")) this.classList.remove(
                "active_button");
                else {
                    const t = document.querySelector("#myBtnContainer button.active_button");
                    t && t.classList.remove("active_button"), this.classList.add("active_button")
                }
            }))
        }))
    </script>
    <script>
        function downloadImage() {
            source = "assets/image/cv-img.html";
            var e = document.createElement("a");
            e.setAttribute("href", source), e.setAttribute("download", "test-image.html"), document.body.appendChild(e), e
                .click(), e.remove()
        }
    </script>
</body>

</html>
