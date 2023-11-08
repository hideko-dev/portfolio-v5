

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ad875553.js","_app/immutable/chunks/scheduler.0f962ddd.js","_app/immutable/chunks/index.1909f747.js","_app/immutable/chunks/singletons.0e27eaa2.js"];
export const stylesheets = [];
export const fonts = [];
