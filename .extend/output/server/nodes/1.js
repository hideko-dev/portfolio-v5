

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.d8d4b7c8.js","_app/immutable/chunks/scheduler.0d2f776c.js","_app/immutable/chunks/index.5fa6eb88.js","_app/immutable/chunks/stores.ccb304ab.js","_app/immutable/chunks/singletons.3b3d4c0a.js"];
export const stylesheets = [];
export const fonts = [];
