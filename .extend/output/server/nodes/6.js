

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/works/_id_/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.2a37aa32.js","_app/immutable/chunks/scheduler.0d2f776c.js","_app/immutable/chunks/index.5fa6eb88.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/stores.ccb304ab.js","_app/immutable/chunks/singletons.3b3d4c0a.js","_app/immutable/chunks/works.daa1dc1c.js"];
export const stylesheets = ["_app/immutable/assets/6.791404b6.css"];
export const fonts = [];
