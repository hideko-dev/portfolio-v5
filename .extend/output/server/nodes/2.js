import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/pages/+page.js";
export const imports = ["_app/immutable/nodes/2.71921056.js","_app/immutable/chunks/scheduler.0d2f776c.js","_app/immutable/chunks/index.5fa6eb88.js","_app/immutable/nodes/4.79f30f65.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/4.18b487f2.css"];
export const fonts = [];
