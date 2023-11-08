import * as universal from '../entries/pages/home/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/pages/home/+page.js";
export const imports = ["_app/immutable/nodes/4.1ae6860f.js","_app/immutable/chunks/_page.0c5e97c2.js","_app/immutable/chunks/scheduler.0f962ddd.js","_app/immutable/chunks/index.9ade12cc.js"];
export const stylesheets = ["_app/immutable/assets/_page.fd26d093.css"];
export const fonts = [];
