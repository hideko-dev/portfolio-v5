import { c as create_ssr_component, e as each, b as escape } from "../../../chunks/ssr.js";
import "../../../chunks/works.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-1rrgy8n{display:flex;align-items:center;justify-content:center}.contents.svelte-1rrgy8n{width:30rem;min-height:100vh;margin-top:7rem}.titles.svelte-1rrgy8n{display:flex;align-items:center;color:var(--text-thin);padding-inline:0.6rem;margin-bottom:0.3rem;font-family:'Roboto Mono Variable', sans-serif;font-size:14px\r\n    }.date.svelte-1rrgy8n{padding-right:1.8rem\r\n    }.ago.svelte-1rrgy8n{margin:0 0 0 auto}.content.svelte-1rrgy8n{display:flex;align-items:center;height:2.3rem;padding-inline:0.6rem;border-top:1px solid var(--little);font-family:'Roboto Mono Variable', sans-serif;font-weight:400;font-size:14px;transition:all 0.2s;cursor:pointer;text-decoration:none;color:var(--text)\r\n    }.y.svelte-1rrgy8n{padding-right:1.9rem}.t.svelte-1rrgy8n{width:10rem;white-space:nowrap;overflow:hidden}.a.svelte-1rrgy8n{margin:0 0 0 auto}.content.svelte-1rrgy8n:hover{background:var(--border)}@media(max-width: 600px){.contents.svelte-1rrgy8n{width:20rem}}",
  map: null
};
function getYear(dateString) {
  const date = new Date(dateString);
  return date.getFullYear();
}
function getYearDifference(dateString, createdDateString) {
  const date = new Date(dateString);
  const createdDate = new Date(createdDateString);
  const timeDifference = date - createdDate;
  const daysDifference = Math.floor(timeDifference / (1e3 * 60 * 60 * 24));
  const yearsDifference = Math.floor(daysDifference / 365);
  if (yearsDifference < 1) {
    return daysDifference + "d ago";
  } else {
    return yearsDifference + "y ago";
  }
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data = [];
  $$result.css.add(css);
  return `<section class="svelte-1rrgy8n"><div class="contents svelte-1rrgy8n"><div class="titles svelte-1rrgy8n" data-svelte-h="svelte-1teptle"><p class="date svelte-1rrgy8n">date</p> <p class="title">title</p> <p class="ago svelte-1rrgy8n">ago</p></div> ${each(data, (c) => {
    return `<a class="content svelte-1rrgy8n" href="${"works/" + escape(c.id, true)}"><p class="y svelte-1rrgy8n">${escape(getYear(c.createdAt))}</p> <p class="t svelte-1rrgy8n">${escape(c.title)}</p> <p class="a svelte-1rrgy8n">${escape(getYearDifference(/* @__PURE__ */ new Date(), c.createdAt))}</p> </a>`;
  })}</div> </section>`;
});
export {
  Page as default
};
