import { c as create_ssr_component, a as add_attribute, b as escape, v as validate_component } from "../../../chunks/ssr.js";
const inputs_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "section.svelte-jm7zn5{display:flex;flex-direction:column;border:1px solid var(--border);width:20rem;height:max-content;padding:1rem;border-radius:10px;font-family:'Roboto Mono Variable', sans-serif;font-weight:400}span.svelte-jm7zn5{font-size:13px;color:var(--text-thin)}.type.svelte-jm7zn5{margin-top:5px;background:transparent;border:1px solid var(--thin);color:var(--text);padding-inline:10px;resize:none;border-radius:5px;transition:all 0.3s}.req.svelte-jm7zn5{margin-top:1rem}input.svelte-jm7zn5{height:2rem;transition:all 0.3s}textarea.svelte-jm7zn5{height:7rem;padding-block:10px;transition:all 0.3s}.type.svelte-jm7zn5:focus{outline:none;border-color:var(--solid)}.submit.svelte-jm7zn5{font-size:15px;display:flex;align-items:center;justify-content:center;width:100%;height:2rem;border:1px solid var(--thin);border-radius:5px;transition:all 0.3s;color:var(--text-thin);cursor:pointer;margin-top:8px;user-select:none}.submit.svelte-jm7zn5:hover{background:var(--border);color:var(--text)}",
  map: null
};
const Inputs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mail;
  $$result.css.add(css$1);
  return `<section class="svelte-jm7zn5"><span class="svelte-jm7zn5" data-svelte-h="svelte-1bg9cgq">Email</span> <input class="type svelte-jm7zn5" type="email"${add_attribute("value", mail, 0)}> <span class="req svelte-jm7zn5" data-svelte-h="svelte-1xd8qgz">What are the requirements?</span> <textarea class="type svelte-jm7zn5">${escape("")}</textarea> <div class="submit svelte-jm7zn5" data-svelte-h="svelte-1a7few4">Submit</div> </section>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-e0n9er{display:flex;align-items:center;justify-content:center;height:100vh;font-weight:600;font-size:25px}.title.svelte-e0n9er{margin-left:2px;margin-bottom:8px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="svelte-e0n9er"><div><p class="title svelte-e0n9er" data-svelte-h="svelte-1cwg6cj">Contact</p> ${validate_component(Inputs, "Inputs").$$render($$result, {}, {}, {})}</div> </section>`;
});
export {
  Page as default
};
