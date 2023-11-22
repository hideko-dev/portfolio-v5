

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.79f30f65.js","_app/immutable/chunks/scheduler.0d2f776c.js","_app/immutable/chunks/index.5fa6eb88.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/4.18b487f2.css"];
export const fonts = [];
