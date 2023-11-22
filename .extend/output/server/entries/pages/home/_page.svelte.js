import { c as create_ssr_component, a as add_attribute, e as each, b as escape, v as validate_component } from "../../../chunks/ssr.js";
const catIcon = "data:image/webp;base64,UklGRloKAABXRUJQVlA4IE4KAADwLwCdASqAAIAAPm0uk0akIqGmqpYcoNANiWVrT1gZ9opYh6fn34+bv5nLoOQ+z4gZdDjC5RiwQeO7237Z6h3SoPEfQvmppS8W9L1DPOtwdQ7hLLf+acZ0/LoedFF72Gi/PnCHk/255z/3h8Exqn61Fhq4mPWHFjyycbgf9qVWFesy84jV9fH/C8Sd0e9QI888p8R4PopxWH/6nK7i72ZWaxCveXwn/nABaZxAGA9fPayoo4ndmYJ4nsekVF260NhOM6UZILtJF95wq7Cjow1TVbAGhGJVPZn/87oHhfHCINximzTOM4/h0udCB5TCdWHCCwC08eGv9e/E2BiY1tcJp8h83x6WsG82Ln1bdAN2USSLGEo98/lzi2Yd+RlJQyqaFKO2JAdecrtHAsQxDoCk2gaOcruTtNBP/o25n1y8li7ksLi48/RhvM8LRJMOvaI/YLKE9rr8xl7QjZ9g3niHLbn+CEC4//xpSCPtyeuqLRhd2pHIH9x7o+qGOupvrjkSt4c2t6Y8AAD+/m4hCrSKt5tPevh/xNvUsozQI+ZzawpPJNwN83HgQcu6yPKu37q6tjgOqdxuPqGo/YZs/kbrB2gHXSABEnWIxX2e/Z7uRwIvRtwLBLasNcjucf4zcgv2JC44rSsGsexDvv7DkFtEw15jUTBcNP1cZstqaJCVWQfwZJC3OULH/N/QMbgyYZLbFBpGsQsyFY5cjygSVJWOJhO/nHEeaQm9hEOy78lrBQniSkNgiAEUot5QS7STIjpTOHqbMQXt2pXgdzJUrOkZ4gWHbPK+zSVtP96m+bh1EgOuODP0Hc597maxIVh+LYSy82OZjf6BE9pReufuWzdJuYaozldGNXDdDQHl0GTJD5+76pYq8Z4Bfp38ceaOp/EQMsAslFTeocl1gGqpNtgxD0cGP59ZKNNBcqgHlnuzSddCYdUfQaqGl/FJM040+GbOoYgX94iQRA6X66ThK09j4SPp8YAeLEBR1OdY0Jx2Y+TqzssalUW79deDseGT3KmfMQFHFjANNUARVpf6tHeR/l81KUnYcX85lgXtqFLVeSWEoHDIJZeuFRx8BbZWR1oNAvcH8ltrJraUPRv6OqYqg5aCmO6SyBzy8hNfElOvxSFx1/kCy4O4f4krl5OV4LndLKEmU3il27/Zb9WyNvol/Pgldk6biLVqE21odTe14gzcFSDs3WrwO2mFxIXQtqXkv1cB95JGXA+julPYrw8Tozh81kocfbjDlElGoXDb2lXeEwvWKm37eFXutkctljmDXQapTDZ4VBeCJoFNqCwSMyLAFLtUCOVSve4zoQtkms2PHYK2pL4y/Q3ryUBXzt4I0zx1jUJjex8qFqThzF5+R5jKwbD3gncpl9DZWqWUhzMLZMLr9M792Nx9zm8vX53mc64Ej1Q+GsIxWvcWFo79GXGvkMAFCGysK/kgp+oIGClytJSA+0GsvPJoXTZJOlcsKLIsOEh3Lefnl/uv97JVhVZed3NYY85EB+UGz/ghIQnET4lgMi0NW6YMWPf9hv5bORoQ9yCuErCiZHCbILH0hYWJpBHQs2fE6crc/DHTHqZm8jZL1rP5osdIElZBnqQhTEk+E3lM6IplekGZ5isOICLwS6GcFXfZTUzVAfiJhWh+2UKmihKI7O5tYOwCcM6f/8LHyNWOVc1AFHLWxnl3N7rPVa8iIwEnfk7hF19YyFNPsCIkaKKbImNhRWmLQAt0wdCnfHy0OdGqeALfBqYkRpAKKEn5HsuhNmTm5fSkxAuZuBjb4mBM17qRlSrVTW07oX/1a2m+Srgr9IuFqu373RqgXLQnFK15QqiHzI2l1sjyPhL3hrHj+PRZUkOYTg7MON6ujzNvo9sDJmWbkEpka0Bx1MQaHAEUhGmF+yGOFdCRYnQzXWuUBzZsJ3W1I1ifqfeg+k9oXeQ5lfX4bzm3bRzIPQvdjZXr5ZZHYn7/P6IxTElOe+xzi8U3/zIA4UgA572xWUfPv2XT828kjSegOSIdRKQ8TwRMj6jLmlY65QFzGSgem5Itz+te1wX7Kv4wITPY90ZA5lQkz1UwpZzBG4lmVFOSIUQluPCl4lnT2rm79/VsKNSw9MdmIjxFZ8wGcyO/17crUEpZu6VmgNTXeesjS7Qo0FAxA0H8NLVMv2qsazRjgOMVvguKbEd3kMh+JyyMoAdHD0W1HeMQkX+hMSCqNTHsR7//SHzU1+CfUxOq/4yMnw4Dm1l9rlxc2h0jzYYELmEbkLfIwrun7zYVmhBb+0c5EW95phXEseqE0X3qxox/oeUcZI4oLFAZDRDP7wJCpaKRoW+u5w159wW7evJcf6PNfdOPyjfCL+VEA33iGXzCzd/nruKLiFMnx9GkZwcefwfQTZrWAzcmdMtHjdn7VaooMlMWJMGHWMuVsb1Y5w/KASkUc2S5qnMIQYxLDMCZQonioKDJALdIpHS17BPwIbevYxMyfB2rtp1ypDNl60v/y1t4IYi2l/BdCqkzncgbwZzLqpBDHxTmeiBo9DyD5hC2sScMQSWRQ9+RKRcFggRSsciUZxjewv/VnK0Du+FcfZoX05lvXyQYmQu0/6BHC9Avq9IDuVVzneAA+mbllingTBfIXRSoX00H8pX3kmCMh5cbuUSj1hfhKRzEEVrceHJJ96+NoJOaZmLMk7+sOlzDNTRnLNmih1cMk2vmKHMOHenL+XKP4FIEOhIJ0S3t4kguF1i+JeY+Tr7SaUB4+PaLQXXhjl+vgTr5XOIj4nxKGVMf2eZ66SGI7zZQUSTi3rtc4g9NmQ5bXaFiJ6O22Z6nj4P4j21qheg4uUbFIU/diyy63Yvr9uTm/xm4x75WpK4H/REitzY9lNAwosCH75Wo+xNOeq3AvelUksClnOAoBtMUhzLdGAUPrhYsbc20w8bSwH2YOBfnffaevhwt74QqMw9cRDR5bqWfCA/qAfcwewln9uVhhW+aQuN4vxFkVydSzB5aZ0bs0VeXsIVr9zONsafXHDdX8wxPej+P1BKb1bZBxUzpFKbBc61vFhtafIoITOdbSN6UM8r152EQiehd/EviXzQChLc9hznLUUzFWRjuX3IsbrKg/MToyrwePR3PISAPQwyRgwgIxQX818Peyll3XocgS3RpqW6GKnA3jbaDEkdc+1QyxVzMtu8oJ2WztGCzo0tDsbcOvvnp76xts0uzWXof4tOFI9rKVOv8jeFRduuXX6pov5tuEw3mjNCnsd5JY3IkmWOoaqBaFOBopqLMF887Se2enfb/GiSO7yDCJobHiVgy+r8yTijxvGgZuLWQMmezPnnS8mJrqm5sIAs6HOhi/EG4LLfmFGwqSPet0KH01GRqtpTUnq19zCmnD6+x8qfVsy4ECDZrkIt3vCV8N0cqZA/ErJi97UyEfb0WoEjPN8yNBc5cwG8OsiQUIdL1KoV8zfCAnGRsgmxD7WlPVvf4cqj8yIkSGaFCDGYq2NtZDssrX1cEpJZO6MZHuyyglRoOGGjvgi/GlpvJBsMMwDIAAAAA";
const about_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: 'section.svelte-zz6fvg{margin-top:7rem}.title.svelte-zz6fvg{font-weight:700;font-size:25px}.bios.svelte-zz6fvg{margin:0 auto;width:30rem}.bio.svelte-zz6fvg{margin-top:15px}img.svelte-zz6fvg{float:right;margin-left:1rem;margin-bottom:1rem;border-radius:100%;outline:1px solid var(--border);aspect-ratio:1 / 1;height:120px;width:120px;object-fit:cover}a.svelte-zz6fvg{text-decoration:none;color:var(--text);position:relative;z-index:2}a.svelte-zz6fvg:before{content:"";position:absolute;left:0;bottom:0;width:100%;height:1px;background:var(--text-thin);z-index:1;transition:all 0.2s}a.svelte-zz6fvg:hover::before{background:var(--text)\r\n    }@media(max-width: 600px){.bios.svelte-zz6fvg{width:20rem}}',
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section class="svelte-zz6fvg" data-svelte-h="svelte-dsr1vx"><p class="title svelte-zz6fvg">About</p> <div class="bios svelte-zz6fvg"><img${add_attribute("src", catIcon, 0)} alt="icon" class="svelte-zz6fvg"> <div class="bio svelte-zz6fvg">I’m a software engineer and CEO of Vercel. I’m originally from Lanús, Buenos Aires, Argentina. I owe much of my career to the Web and Open Source.
            <br><br>
            I spent my early teens advocating for and teaching people how to use Linux and later developed a passion for JavaScript and Web development.
            <br><br>
            After joining the <a href="https://mootools.io" class="svelte-zz6fvg">MooTools</a> core team, I got my first full-time job as a frontend engineer at 18 years old and relocated to San Francisco, CA.
            <br><br>
            I started my first company Cloudup in SF which was later acquired by Automattic, the company behind WordPress, to power their editing and site building technology.
            <br><br>
            After being involved in creating numerous influential open source projects like Socket.IO and Mongoose, I saw the opportunity in creating tooling and cloud infrastructure to make the Web faster, with a focus on developer experience (DX).
            <br><br>
            Next.js and Vercel were born. Our platform now helps power the online presence of companies like Washington Post, Porsche, Under Armour and Nintendo.</div></div> </section>`;
});
const bio_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "section.svelte-gcbuns{margin-top:3rem;margin-bottom:4rem}.title.svelte-gcbuns{font-weight:700;font-size:25px}.years.svelte-gcbuns{margin-top:15px}.year.svelte-gcbuns{display:flex;align-items:center;margin-block:5px}.main.svelte-gcbuns{font-weight:600;width:40px}.line.svelte-gcbuns{height:10px;width:2px;background:var(--text-thin);margin-inline:6px}",
  map: null
};
const Bio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const years = [
    {
      year: "2010",
      content: "Born in Miyazaki (宮崎), Japan"
    },
    { year: "2018", content: "Hello to world" },
    { year: "2023", content: "Hello to world" },
    { year: "2023", content: "Hello to world" }
  ];
  $$result.css.add(css$1);
  return `<section class="svelte-gcbuns"><p class="title svelte-gcbuns" data-svelte-h="svelte-9j7g05">Bio</p> <div class="years svelte-gcbuns">${each(years, (c) => {
    return `<div class="year svelte-gcbuns"><p class="main svelte-gcbuns">${escape(c.year)}</p> <div class="line svelte-gcbuns"></div> <p class="content">${escape(c.content)}</p> </div>`;
  })}</div> </section>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-1d13hta{display:flex;justify-content:center;height:max-content;font-family:'Inter', sans-serif}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="svelte-1d13hta"><div>${validate_component(About, "About").$$render($$result, {}, {}, {})} ${validate_component(Bio, "Bio").$$render($$result, {}, {}, {})}</div> </section>`;
});
export {
  Page as default
};
