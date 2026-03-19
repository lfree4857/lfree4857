export const base64ToImageFile = (base64) => {
  if (!base64) return "";

  if (base64.startsWith("data:image")) {
    return base64;
  }

  // detect format
  let prefix = "data:image/jpeg;base64,";

  if (base64.startsWith("iVBOR")) {
    prefix = "data:image/png;base64,";
  }

  if (base64.startsWith("UklGR")) {
    prefix = "data:image/webp;base64,";
  }

  return prefix + base64;
};