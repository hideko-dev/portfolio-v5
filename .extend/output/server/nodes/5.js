

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/works/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.c14c0fda.js","_app/immutable/chunks/scheduler.0d2f776c.js","_app/immutable/chunks/index.5fa6eb88.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/works.daa1dc1c.js"];
export const stylesheets = ["_app/immutable/assets/5.801780bf.css"];
export const fonts = [];
