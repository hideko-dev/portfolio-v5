import { c as create_ssr_component, a as add_attribute, e as each, b as escape, v as validate_component, d as subscribe } from "../../chunks/ssr.js";
import { faGithub, faInstagram, faDiscord, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { w as writable } from "../../chunks/index.js";
function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate" || key === "on_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const onNavigate = /* @__PURE__ */ client_method("on_navigate");
const navigator_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: "main.svelte-shf47b{display:flex;align-items:center;justify-content:center;padding-inline:4px;padding-block:4px;border-radius:8px;font-family:'Inter', sans-serif;position:relative;z-index:1}.box.svelte-shf47b{position:absolute;background:var(--border);height:1.5rem;border-radius:5px;z-index:2;transition:all 0.3s\r\n    }.item.svelte-shf47b{text-decoration:none;border-radius:5px;padding-inline:9px;padding-block:3px;font-size:14px;z-index:3;transition:all 0.3s;color:var(--text-thin);font-weight:400;user-select:none}.item.svelte-shf47b:hover{color:#b0b0b0}",
  map: null
};
const Navigator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selected = -1;
  let styles = "opacity: 0";
  const items = [{ title: "Works", link: "/works" }, { title: "Contact", link: "/contact" }];
  onNavigate((callback) => {
    const id = callback.to.route.id;
    if (id === "/") {
      styles = "opacity: 0";
      selected = -1;
    } else if (id === "/works") {
      styles = "left: 4px; width: 3.7rem";
      selected = 0;
    } else if (id === "/contact") {
      styles = "left: 64px; width: 4.3rem";
      selected = 1;
    }
  });
  $$result.css.add(css$7);
  return `<main class="svelte-shf47b"><div class="box svelte-shf47b"${add_attribute("style", styles, 0)}></div> ${each(items, (c, index2) => {
    return `<a${add_attribute("href", c.link, 0)} class="item svelte-shf47b"${add_attribute("style", `color: ${selected === index2 ? "var(--subtle)" : null}`, 0)}>${escape(c.title)}</a>`;
  })} </main>`;
});
const logoImg = "/_app/immutable/assets/icon.75fd522a.svg";
const parseNumber = parseFloat;
function joinCss(obj, separator = ";") {
  let texts;
  if (Array.isArray(obj)) {
    texts = obj.filter((text) => text);
  } else {
    texts = [];
    for (const prop in obj) {
      if (obj[prop]) {
        texts.push(`${prop}:${obj[prop]}`);
      }
    }
  }
  return texts.join(separator);
}
function getStyles(style, size, pull, fw) {
  let float;
  let width;
  const height = "1em";
  let lineHeight;
  let fontSize;
  let textAlign;
  let verticalAlign = "-.125em";
  const overflow = "visible";
  if (fw) {
    textAlign = "center";
    width = "1.25em";
  }
  if (pull) {
    float = pull;
  }
  if (size) {
    if (size == "lg") {
      fontSize = "1.33333em";
      lineHeight = ".75em";
      verticalAlign = "-.225em";
    } else if (size == "xs") {
      fontSize = ".75em";
    } else if (size == "sm") {
      fontSize = ".875em";
    } else {
      fontSize = size.replace("x", "em");
    }
  }
  return joinCss([
    joinCss({
      float,
      width,
      height,
      "line-height": lineHeight,
      "font-size": fontSize,
      "text-align": textAlign,
      "vertical-align": verticalAlign,
      "transform-origin": "center",
      overflow
    }),
    style
  ]);
}
function getTransform(scale, translateX, translateY, rotate, flip, translateTimes = 1, translateUnit = "", rotateUnit = "") {
  let flipX = 1;
  let flipY = 1;
  if (flip) {
    if (flip == "horizontal") {
      flipX = -1;
    } else if (flip == "vertical") {
      flipY = -1;
    } else {
      flipX = flipY = -1;
    }
  }
  return joinCss(
    [
      `translate(${parseNumber(translateX) * translateTimes}${translateUnit},${parseNumber(translateY) * translateTimes}${translateUnit})`,
      `scale(${flipX * parseNumber(scale)},${flipY * parseNumber(scale)})`,
      rotate && `rotate(${rotate}${rotateUnit})`
    ],
    " "
  );
}
const fa_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".spin.svelte-1cj2gr0{animation:svelte-1cj2gr0-spin 2s 0s infinite linear}.pulse.svelte-1cj2gr0{animation:svelte-1cj2gr0-spin 1s infinite steps(8)}@keyframes svelte-1cj2gr0-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
  map: null
};
const Fa = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: clazz = "" } = $$props;
  let { id = "" } = $$props;
  let { style = "" } = $$props;
  let { icon } = $$props;
  let { size = "" } = $$props;
  let { color = "" } = $$props;
  let { fw = false } = $$props;
  let { pull = "" } = $$props;
  let { scale = 1 } = $$props;
  let { translateX = 0 } = $$props;
  let { translateY = 0 } = $$props;
  let { rotate = "" } = $$props;
  let { flip = false } = $$props;
  let { spin = false } = $$props;
  let { pulse = false } = $$props;
  let { primaryColor = "" } = $$props;
  let { secondaryColor = "" } = $$props;
  let { primaryOpacity = 1 } = $$props;
  let { secondaryOpacity = 0.4 } = $$props;
  let { swapOpacity = false } = $$props;
  let i;
  let s;
  let transform;
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.fw === void 0 && $$bindings.fw && fw !== void 0)
    $$bindings.fw(fw);
  if ($$props.pull === void 0 && $$bindings.pull && pull !== void 0)
    $$bindings.pull(pull);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
    $$bindings.scale(scale);
  if ($$props.translateX === void 0 && $$bindings.translateX && translateX !== void 0)
    $$bindings.translateX(translateX);
  if ($$props.translateY === void 0 && $$bindings.translateY && translateY !== void 0)
    $$bindings.translateY(translateY);
  if ($$props.rotate === void 0 && $$bindings.rotate && rotate !== void 0)
    $$bindings.rotate(rotate);
  if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0)
    $$bindings.flip(flip);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0)
    $$bindings.spin(spin);
  if ($$props.pulse === void 0 && $$bindings.pulse && pulse !== void 0)
    $$bindings.pulse(pulse);
  if ($$props.primaryColor === void 0 && $$bindings.primaryColor && primaryColor !== void 0)
    $$bindings.primaryColor(primaryColor);
  if ($$props.secondaryColor === void 0 && $$bindings.secondaryColor && secondaryColor !== void 0)
    $$bindings.secondaryColor(secondaryColor);
  if ($$props.primaryOpacity === void 0 && $$bindings.primaryOpacity && primaryOpacity !== void 0)
    $$bindings.primaryOpacity(primaryOpacity);
  if ($$props.secondaryOpacity === void 0 && $$bindings.secondaryOpacity && secondaryOpacity !== void 0)
    $$bindings.secondaryOpacity(secondaryOpacity);
  if ($$props.swapOpacity === void 0 && $$bindings.swapOpacity && swapOpacity !== void 0)
    $$bindings.swapOpacity(swapOpacity);
  $$result.css.add(css$6);
  i = icon && icon.icon || [0, 0, "", [], ""];
  s = getStyles(style, size, pull, fw);
  transform = getTransform(scale, translateX, translateY, rotate, flip, 512);
  return `${i[4] ? `<svg${add_attribute("id", id || void 0, 0)} class="${[
    "svelte-fa " + escape(clazz, true) + " svelte-1cj2gr0",
    (pulse ? "pulse" : "") + " " + (spin ? "spin" : "")
  ].join(" ").trim()}"${add_attribute("style", s, 0)} viewBox="${"0 0 " + escape(i[0], true) + " " + escape(i[1], true)}" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"><g transform="${"translate(" + escape(i[0] / 2, true) + " " + escape(i[1] / 2, true) + ")"}" transform-origin="${escape(i[0] / 4, true) + " 0"}"><g${add_attribute("transform", transform, 0)}>${typeof i[4] == "string" ? `<path${add_attribute("d", i[4], 0)}${add_attribute("fill", color || primaryColor || "currentColor", 0)} transform="${"translate(" + escape(i[0] / -2, true) + " " + escape(i[1] / -2, true) + ")"}"></path>` : ` <path${add_attribute("d", i[4][0], 0)}${add_attribute("fill", secondaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? primaryOpacity : secondaryOpacity, 0)} transform="${"translate(" + escape(i[0] / -2, true) + " " + escape(i[1] / -2, true) + ")"}"></path> <path${add_attribute("d", i[4][1], 0)}${add_attribute("fill", primaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? secondaryOpacity : primaryOpacity, 0)} transform="${"translate(" + escape(i[0] / -2, true) + " " + escape(i[1] / -2, true) + ")"}"></path>`}</g></g></svg>` : ``}`;
});
const eternals_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "main.svelte-3822zl{display:flex;align-items:center;justify-content:center;padding-inline:4px;padding-block:4px;border-radius:8px;font-family:'Inter', sans-serif;position:relative;z-index:1}.box.svelte-3822zl{position:absolute;background:var(--border);height:1.5rem;border-radius:5px;z-index:2;transition:all 0.2s}.item.svelte-3822zl{text-decoration:none;border-radius:5px;padding-inline:9px;padding-block:2px;font-size:16px;z-index:3;transition:all 0.2s;color:var(--text-thin);font-weight:400;user-select:none}.item.svelte-3822zl:hover{color:var(--subtle)}",
  map: null
};
const Eternals = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let boxStyle = "opacity: 0; width: 2.15rem";
  const links = [
    {
      icon: faGithub,
      link: "https://github.com/Hideko-Dev"
    },
    {
      icon: faInstagram,
      link: "https://github.com/Hideko-Dev"
    },
    {
      icon: faDiscord,
      link: "https://github.com/Hideko-Dev"
    },
    {
      icon: faLinkedin,
      link: "https://github.com/Hideko-Dev"
    }
  ];
  $$result.css.add(css$5);
  return `<main class="svelte-3822zl"><div class="box svelte-3822zl"${add_attribute("style", boxStyle, 0)}></div> ${each(links, (l, index2) => {
    return `<a class="item svelte-3822zl"${add_attribute("href", l.link, 0)}>${validate_component(Fa, "Fa").$$render($$result, { icon: l.icon }, {}, {})} </a>`;
  })} </main>`;
});
let initialTheme;
initialTheme = "dark";
const theme = writable(initialTheme);
function applyTheme() {
  console.log("Aa");
}
applyTheme();
const theme_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "main.svelte-168zpbl{display:flex;align-items:center;justify-content:center;padding-inline:10px;padding-block:8px;border-radius:8px;font-family:'Inter', sans-serif;position:relative;z-index:1;transition:all 0.3s;cursor:pointer;color:var(--text-thin)\r\n    }main.svelte-168zpbl:hover{color:#b0b0b0}",
  map: null
};
const Theme = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$result.css.add(css$4);
  $$unsubscribe_theme();
  return `<main class="svelte-168zpbl">${$theme === "dark" ? `${validate_component(Fa, "Fa").$$render($$result, { icon: faSun }, {}, {})}` : `${$theme === "light" ? `${validate_component(Fa, "Fa").$$render($$result, { icon: faMoon }, {}, {})}` : ``}`} </main>`;
});
const header_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".line.svelte-3jbat2.svelte-3jbat2{width:1px;height:18px;background:var(--thin)}.contents.svelte-3jbat2.svelte-3jbat2{display:flex;align-items:center;justify-content:center;padding-inline:4px;padding-block:2px;border-radius:10px;border:1px solid var(--border);background:var(--translucent);backdrop-filter:blur(30px)}.theme.svelte-3jbat2.svelte-3jbat2{margin-inline:0.2rem}.eternal.svelte-3jbat2.svelte-3jbat2{margin-inline:0.3rem}main.svelte-3jbat2.svelte-3jbat2{display:flex;align-items:center;justify-content:center;margin-top:1rem;width:100%;position:fixed;background:transparent;font-family:'Inter', sans-serif}.logo.svelte-3jbat2.svelte-3jbat2{text-decoration:none;color:white;font-weight:700;font-size:20px;cursor:pointer;display:flex;align-items:center;justify-content:center;margin-inline:1rem;transition:all 0.3s}.logo.svelte-3jbat2.svelte-3jbat2:hover{opacity:0.5}.logo.svelte-3jbat2 img.svelte-3jbat2{width:1.7rem}.lefts.svelte-3jbat2.svelte-3jbat2{display:flex;align-items:center;justify-content:center}@media(max-width: 600px){.eternal.svelte-3jbat2.svelte-3jbat2{display:none}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$result.css.add(css$3);
  $$unsubscribe_theme();
  return `<main class="svelte-3jbat2"><div class="contents svelte-3jbat2"><a href="/" class="logo svelte-3jbat2"${add_attribute("style", `filter: invert(${$theme === "dark" ? 0 : 0.9})`, 0)}><img${add_attribute("src", logoImg, 0)} alt="logo" class="svelte-3jbat2"></a> <div class="lefts svelte-3jbat2"><div class="line svelte-3jbat2"></div> <div class="navigator">${validate_component(Navigator, "Navigator").$$render($$result, {}, {}, {})}</div> <div class="line svelte-3jbat2"></div> <div class="eternal svelte-3jbat2">${validate_component(Eternals, "Eternals").$$render($$result, {}, {}, {})}</div> <div class="line svelte-3jbat2"></div> <div class="theme svelte-3jbat2">${validate_component(Theme, "Theme").$$render($$result, {}, {}, {})}</div></div></div> </main>`;
});
const footer_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "section.svelte-1it0gry{height:3.5rem;display:flex;align-items:center;justify-content:center;font-family:'Roboto Mono Variable', sans-serif;font-weight:300;font-size:13px;gap:5px}a.svelte-1it0gry{color:var(--solid);text-decoration:none;transition:all 0.2s}a.svelte-1it0gry:hover{color:var(--text-thin)}@media(max-width: 600px){section.svelte-1it0gry{display:grid;place-content:center;gap:2px;text-align:center;height:4rem}}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section class="svelte-1it0gry"><p class="copyright">© ${escape((/* @__PURE__ */ new Date()).getFullYear())} Hideko (<a href="https://instagram.com/hideko.cat" class="svelte-1it0gry" data-svelte-h="svelte-tswr3r">@hideko.cat</a>).</p> <p data-svelte-h="svelte-1b254ly">All rights reserved</p> </section>`;
});
const latin$1 = "";
const latin = "";
const index = "";
const Fonts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const globals = "";
const Transition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pathname = "" } = $$props;
  if ($$props.pathname === void 0 && $$bindings.pathname && pathname !== void 0)
    $$bindings.pathname(pathname);
  return `<div>${slots.default ? slots.default({}) : ``}</div>`;
});
const loader_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".loader.svelte-4o5ap3{background:#575757;width:100%;height:2px;z-index:10;position:fixed;transition:all 0.2s ease}",
  map: null
};
const Loader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let style = "width: 50%; opacity: 0; right:0;";
  onNavigate((callback) => {
    load();
  });
  function load() {
    style = "width: 100%; opacity: 1; left:0;";
    setTimeout(
      () => {
        style = "width: 50%; opacity: 0;right:0;";
      },
      300
    );
  }
  $$result.css.add(css$1);
  return `<div class="loader svelte-4o5ap3"${add_attribute("style", style, 0)}></div>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{background:var(--bg);color:var(--text);font-family:'Inter', sans-serif}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div>${validate_component(Fonts, "Fonts").$$render($$result, {}, {}, {})} ${validate_component(Loader, "Loader").$$render($$result, {}, {}, {})} ${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${validate_component(Transition, "PageTransition").$$render($$result, { pathname: data.pathname }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Layout as default
};
