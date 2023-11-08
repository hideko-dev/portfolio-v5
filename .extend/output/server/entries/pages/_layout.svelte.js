import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const header_svelte_svelte_type_style_lang = "";
const css = {
  code: ".icon.svelte-o7q4o6{font-family:'Inter', sans-serif;font-weight:600}main.svelte-o7q4o6{display:flex;align-items:center;justify-content:center;height:4rem;width:100%;position:fixed;z-index:100}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="svelte-o7q4o6" data-svelte-h="svelte-ajj90h"><div class="icon svelte-o7q4o6">Hideko Test</div> </main>`;
});
const latin$1 = "";
const latin = "";
const Fonts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const globals = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${validate_component(Fonts, "Fonts").$$render($$result, {}, {}, {})} ${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main>${slots.default ? slots.default({}) : ``}</main></div>`;
});
export {
  Layout as default
};
