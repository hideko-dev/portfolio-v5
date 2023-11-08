import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/pages/+page.js";
export const imports = ["_app/immutable/nodes/2.dc5ae09a.js","_app/immutable/chunks/scheduler.0f962ddd.js","_app/immutable/chunks/index.9ade12cc.js","_app/immutable/chunks/_page.0c5e97c2.js"];
export const stylesheets = ["_app/immutable/assets/_page.fd26d093.css"];
export const fonts = [];
