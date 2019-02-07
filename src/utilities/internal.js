

export function generateUniqueId(prefix) {
  return crypto.getRandomValues(new Uint32Array(2)).join('-');
}

export function isRequired(error) {
  throw new Error(error);
}

export function vendorize(el, prop, val) {
  el.style["webkit" + prop] = val;
  el.style["moz" + prop] = val;
  el.style["ms" + prop] = val;
  el.style["o" + prop] = val;
}
