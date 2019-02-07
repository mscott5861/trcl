

export function generateUniqueId(prefix) {
  return crypto.getRandomValues(new Uint32Array(2)).join('-');
}

export function isRequired(error) {
  throw new Error(error);
}

export function vendorize(el, prop, val) {
  el.style["webkit" + prop] = value;
  el.style["moz" + prop] = value;
  el.style["ms" + prop] = value;
  el.style["o" + prop] = value;
}
