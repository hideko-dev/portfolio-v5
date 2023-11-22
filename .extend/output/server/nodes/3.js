

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.bedd5940.js","_app/immutable/chunks/scheduler.0d2f776c.js","_app/immutable/chunks/index.5fa6eb88.js"];
export const stylesheets = ["_app/immutable/assets/3.0f69a980.css"];
export const fonts = [];
