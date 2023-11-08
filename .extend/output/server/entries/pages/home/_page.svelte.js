import { c as create_ssr_component, d as add_attribute, e as escape, f as each, v as validate_component } from "../../../chunks/ssr.js";
import { faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faEllipsis, faPersonHalfDress, faPaintRoller } from "@fortawesome/free-solid-svg-icons";
const texts_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".texts.svelte-i3zyel{width:30rem;font-family:'Poppins', sans-serif;margin-right:8em}.sub.svelte-i3zyel{color:#7d73d0;font-weight:600;font-family:'Inter', sans-serif}.title.svelte-i3zyel{margin-top:1rem;font-weight:500;font-size:45px;line-height:3.5rem}.bio.svelte-i3zyel{color:#676767;font-weight:500;width:80%;margin-top:1rem}",
  map: null
};
const Texts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  $$result.css.add(css$3);
  return `<div class="texts svelte-i3zyel" data-svelte-h="svelte-1utrnip"><p class="sub svelte-i3zyel">DESIGNS AND DEVELOPMENTS</p> <p class="title svelte-i3zyel">I do most powerful<br>Modern and Instant<br>for Development</p> <p class="bio svelte-i3zyel">I do a variety of front-end, back-end, and software development. I can also communicate with various people.</p> </div>`;
});
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
const css$2 = {
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
  $$result.css.add(css$2);
  i = icon && icon.icon || [0, 0, "", [], ""];
  s = getStyles(style, size, pull, fw);
  transform = getTransform(scale, translateX, translateY, rotate, flip, 512);
  return `${i[4] ? `<svg${add_attribute("id", id || void 0, 0)} class="${[
    "svelte-fa " + escape(clazz, true) + " svelte-1cj2gr0",
    (pulse ? "pulse" : "") + " " + (spin ? "spin" : "")
  ].join(" ").trim()}"${add_attribute("style", s, 0)} viewBox="${"0 0 " + escape(i[0], true) + " " + escape(i[1], true)}" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"><g transform="${"translate(" + escape(i[0] / 2, true) + " " + escape(i[1] / 2, true) + ")"}" transform-origin="${escape(i[0] / 4, true) + " 0"}"><g${add_attribute("transform", transform, 0)}>${typeof i[4] == "string" ? `<path${add_attribute("d", i[4], 0)}${add_attribute("fill", color || primaryColor || "currentColor", 0)} transform="${"translate(" + escape(i[0] / -2, true) + " " + escape(i[1] / -2, true) + ")"}"></path>` : ` <path${add_attribute("d", i[4][0], 0)}${add_attribute("fill", secondaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? primaryOpacity : secondaryOpacity, 0)} transform="${"translate(" + escape(i[0] / -2, true) + " " + escape(i[1] / -2, true) + ")"}"></path> <path${add_attribute("d", i[4][1], 0)}${add_attribute("fill", primaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? secondaryOpacity : primaryOpacity, 0)} transform="${"translate(" + escape(i[0] / -2, true) + " " + escape(i[1] / -2, true) + ")"}"></path>`}</g></g></svg>` : ``}`;
});
const features_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: `.selector.svelte-1l2rsz3.svelte-1l2rsz3{background:rgba(17, 10, 56, 0.8);border-radius:7px;padding:3px;display:flex;align-items:center;margin-top:1rem;position:relative;transition:left 0.2s ease;box-shadow:0 0 25px 0 rgba(0, 0, 0, 0.35)}.select_box.svelte-1l2rsz3.svelte-1l2rsz3{position:absolute;top:3px;width:5rem;height:4.5rem;border-radius:5px;border:1px solid #1f2248;background:linear-gradient(to bottom, transparent, rgba(110, 60, 239, 0.1));transition:all 0.2s ease}.source.svelte-1l2rsz3.svelte-1l2rsz3{margin-top:1rem;background:rgba(17, 10, 56, 0.8);border-radius:7px;height:13rem;position:relative;box-shadow:0 0 25px 0 rgba(0, 0, 0, 0.35)}.source.svelte-1l2rsz3 .content.svelte-1l2rsz3{position:absolute;top:2.8rem;left:1rem;color:#c7c7c7;font-family:'Inter', sans-serif}.text.svelte-1l2rsz3.svelte-1l2rsz3{font-weight:500;padding-inline:15px;padding-block:7px;border-radius:100px;font-family:'Inter', sans-serif;font-size:13px;color:#B3A6EA;background:rgba(17, 10, 56, 0.8);display:flex;align-items:center;justify-content:center;position:relative;transition:left 0.2s ease;box-shadow:0 0 25px 0 rgba(0, 0, 0, 0.35);text-align:center}.box.svelte-1l2rsz3.svelte-1l2rsz3{font-family:'Inter', sans-serif;border:1px solid transparent;width:5rem;height:4.5rem;font-size:12px;border-radius:5px;text-align:center;position:relative;color:#a2a2a2;transition:all 0.2s ease}.box.svelte-1l2rsz3.svelte-1l2rsz3::before{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background:linear-gradient(to bottom, transparent, rgba(110, 60, 239, 0.1));transition:all 0.2s ease;border-radius:5px;opacity:0}.border.svelte-1l2rsz3.svelte-1l2rsz3{position:absolute;left:50%;transform:translateX(-50%);top:30px;width:95%;height:1px;background:rgba(179, 166, 234, 0.8)}.titlebar.svelte-1l2rsz3.svelte-1l2rsz3{font-family:'Inter', sans-serif;position:absolute;left:10px;top:1px;font-size:15px;color:rgba(255, 255, 255, 0.4);display:flex;align-items:center;width:95%}`,
  map: null
};
const Features = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const ssr = true;
  let boxes = [
    {
      title: "Frontend",
      icon: faReact,
      description: "Hello This is fronhat"
    },
    {
      title: "Backend",
      icon: faNodeJs,
      description: "Hello This is froagagnt"
    },
    {
      title: "Genderless",
      icon: faPersonHalfDress,
      description: "Hello This is fragfont"
    },
    {
      title: "Designable",
      icon: faPaintRoller,
      description: "Hello This is fronte"
    }
  ];
  let select_box_left = 3;
  let currentIndex = 0;
  if ($$props.ssr === void 0 && $$bindings.ssr && ssr !== void 0)
    $$bindings.ssr(ssr);
  $$result.css.add(css$1);
  {
    {
      console.log("aa");
      {
        select_box_left = 3;
      }
    }
  }
  return `<div class="features"><p class="text svelte-1l2rsz3" data-svelte-h="svelte-18wmkmb">ALSO WORKS WITH 25+ MORE LIBRARIES</p> <div class="selector svelte-1l2rsz3"><div class="select_box svelte-1l2rsz3" style="${"left: " + escape(select_box_left, true) + "px"}"></div> ${each(boxes, (b, index) => {
    return `<div class="box svelte-1l2rsz3"${add_attribute("style", `color: ${index === currentIndex ? "#B3A6EA" : "#a2a2a2"}`, 0)}><div class="box-content">${validate_component(Fa, "Fa").$$render(
      $$result,
      {
        fw: true,
        icon: b.icon,
        size: "28",
        style: "margin-top: 13px; margin-bottom: 4px"
      },
      {},
      {}
    )} <p>${escape(b.title)}</p></div> </div>`;
  })}</div> <div class="source svelte-1l2rsz3"><div class="titlebar svelte-1l2rsz3"><p data-svelte-h="svelte-2ewyg8">note</p> ${validate_component(Fa, "Fa").$$render(
    $$result,
    {
      fw: true,
      icon: faEllipsis,
      size: "28",
      style: "margin: 0 0 0 auto"
    },
    {},
    {}
  )}</div> <div class="border svelte-1l2rsz3"></div> <div class="content svelte-1l2rsz3"><p>${escape(boxes[currentIndex].description)}</p></div></div> </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'main.svelte-1xmg676{background-image:linear-gradient(0deg, transparent 54px, #1A2355 55px), linear-gradient(90deg,  transparent 54px, #1A2355 55px);background-size:55px 55px;position:relative;height:100vh}.content.svelte-1xmg676{width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:radial-gradient(at right bottom, transparent, rgb(15, 11, 49) 60%)}.content.svelte-1xmg676::after{content:"";position:absolute;left:0;top:0;width:25rem;height:25rem;background:#000dff;filter:blur(280px)}.content.svelte-1xmg676::before{content:"";position:absolute;left:70%;top:0;width:25rem;height:25rem;background:#000dff;filter:blur(280px)}@media(max-width: 600px){.content.svelte-1xmg676::after{width:15rem;height:15rem;filter:blur(150px)}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="svelte-1xmg676"><div class="content svelte-1xmg676">${validate_component(Texts, "Texts").$$render($$result, {}, {}, {})} ${validate_component(Features, "Features").$$render($$result, {}, {}, {})}</div> </main>`;
});
export {
  Page as default
};
