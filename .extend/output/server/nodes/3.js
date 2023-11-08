import * as universal from '../entries/pages/home/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/pages/home/+page.js";
export const imports = ["_app/immutable/nodes/3.7d1f8f6f.js","_app/immutable/chunks/_page.1822104e.js","_app/immutable/chunks/scheduler.0f962ddd.js","_app/immutable/chunks/index.1909f747.js"];
export const stylesheets = ["_app/immutable/assets/_page.fd26d093.css"];
export const fonts = [];
