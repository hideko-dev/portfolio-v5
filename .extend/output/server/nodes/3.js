import * as universal from '../entries/pages/about/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/pages/about/+page.js";
export const imports = ["_app/immutable/nodes/3.867dc288.js","_app/immutable/chunks/scheduler.0f962ddd.js","_app/immutable/chunks/index.9ade12cc.js"];
export const stylesheets = [];
export const fonts = [];
