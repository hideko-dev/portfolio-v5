import { c as create_ssr_component, d as subscribe } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
import "../../../../chunks/works.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: `section.svelte-r17fbq.svelte-r17fbq{display:flex;align-items:center;justify-content:center}.contents.svelte-r17fbq.svelte-r17fbq{width:30rem;margin-top:7rem;min-height:100vh}.title.svelte-r17fbq.svelte-r17fbq{font-size:25px;font-weight:700;color:var(--solid)}.dates.svelte-r17fbq.svelte-r17fbq{margin-top:5px;font-family:'Roboto Mono Variable', sans-serif;font-weight:300;font-size:14px}.mds.svelte-r17fbq.svelte-r17fbq{width:99%;margin:1rem auto 0}.stacks.svelte-r17fbq.svelte-r17fbq{margin-top:1.2rem;padding-top:1rem;padding-bottom:0.8rem;padding-inline:0.9rem;border-radius:8px;border:1px solid var(--border);position:relative;display:inline-flex;font-size:11px;box-sizing:border-box;align-items:center;font-family:"Roboto Mono Variable", sans-serif;font-weight:400;line-height:1.1876em;letter-spacing:0.00938em;flex-wrap:wrap;gap:6px;width:100%}.stacks.svelte-r17fbq span.svelte-r17fbq{position:absolute;left:18px;background:var(--bg);padding-inline:0.5rem;top:-7px;color:var(--text-thin);font-size:12px}.stacks.svelte-r17fbq .item.svelte-r17fbq{border:1px solid var(--border);width:max-content;padding-inline:10px;padding-block:4px;border-radius:100px;font-size:13px;grid-column:span 1\r
    }.links.svelte-r17fbq.svelte-r17fbq{display:flex;align-items:center;font-family:'Roboto Mono Variable', sans-serif;gap:6px;margin-top:8px}.links.svelte-r17fbq p.svelte-r17fbq{padding-inline:10px;padding-block:2px;border:1px solid var(--border);color:var(--text-thin);font-size:13px;border-radius:100px}.links.svelte-r17fbq a.svelte-r17fbq{font-size:13px;text-decoration:none;color:var(--text-thin);margin-bottom:2px;transition:all 0.2s;cursor:pointer}.links.svelte-r17fbq a.svelte-r17fbq:hover{color:var(--solid)}@media(max-width: 600px){.contents.svelte-r17fbq.svelte-r17fbq{width:20rem}}`,
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $page.params.id;
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<section class="svelte-r17fbq">${``} </section>`;
});
export {
  Page as default
};
