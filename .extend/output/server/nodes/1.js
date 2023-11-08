

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.28c80cfe.js","_app/immutable/chunks/scheduler.0f962ddd.js","_app/immutable/chunks/index.9ade12cc.js","_app/immutable/chunks/singletons.7a1e9084.js"];
export const stylesheets = [];
export const fonts = [];
