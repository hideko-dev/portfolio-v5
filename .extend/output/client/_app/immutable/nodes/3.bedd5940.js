import{s as N,n as T,r as b}from"../chunks/scheduler.0d2f776c.js";import{S as P,i as w,e as _,s as C,c as h,a as E,q as $,f as y,d as g,r as f,g as A,h as u,A as x,B as z,k as O,l as V,m as k,n as D,o as M,p as B}from"../chunks/index.5fa6eb88.js";const J="https://formspree.io/f/mayglrla",R=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;async function U(o,t){const e=R.test(o),s=t.trim().length>0;return e&&s?(await fetch(J,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mail:o,msg:t})}),!0):!1}function W(o){let t,e,s="Email",p,n,r,l,c="What are the requirements?",d,i,S,v,q="Submit",j,I;return{c(){t=_("section"),e=_("span"),e.textContent=s,p=C(),n=_("input"),r=C(),l=_("span"),l.textContent=c,d=C(),i=_("textarea"),S=C(),v=_("div"),v.textContent=q,this.h()},l(m){t=h(m,"SECTION",{class:!0});var a=E(t);e=h(a,"SPAN",{class:!0,"data-svelte-h":!0}),$(e)!=="svelte-1bg9cgq"&&(e.textContent=s),p=y(a),n=h(a,"INPUT",{class:!0,type:!0}),r=y(a),l=h(a,"SPAN",{class:!0,"data-svelte-h":!0}),$(l)!=="svelte-1xd8qgz"&&(l.textContent=c),d=y(a),i=h(a,"TEXTAREA",{class:!0}),E(i).forEach(g),S=y(a),v=h(a,"DIV",{class:!0,"data-svelte-h":!0}),$(v)!=="svelte-1a7few4"&&(v.textContent=q),a.forEach(g),this.h()},h(){f(e,"class","svelte-jm7zn5"),f(n,"class","type svelte-jm7zn5"),f(n,"type","email"),f(l,"class","req svelte-jm7zn5"),f(i,"class","type svelte-jm7zn5"),f(v,"class","submit svelte-jm7zn5"),f(t,"class","svelte-jm7zn5")},m(m,a){A(m,t,a),u(t,e),u(t,p),u(t,n),x(n,o[0]),u(t,r),u(t,l),u(t,d),u(t,i),x(i,o[1]),u(t,S),u(t,v),j||(I=[z(n,"input",o[3]),z(i,"input",o[4]),z(v,"click",o[2])],j=!0)},p(m,[a]){a&1&&n.value!==m[0]&&x(n,m[0]),a&2&&x(i,m[1])},i:T,o:T,d(m){m&&g(t),j=!1,b(I)}}}function X(o,t,e){let s,p;async function n(){await U(s,p)}function r(){s=this.value,e(0,s)}function l(){p=this.value,e(1,p)}return[s,p,n,r,l]}class F extends P{constructor(t){super(),w(this,t,X,W,N,{})}}function G(o){let t,e,s,p="Contact",n,r,l;return r=new F({}),{c(){t=_("section"),e=_("div"),s=_("p"),s.textContent=p,n=C(),O(r.$$.fragment),this.h()},l(c){t=h(c,"SECTION",{class:!0});var d=E(t);e=h(d,"DIV",{});var i=E(e);s=h(i,"P",{class:!0,"data-svelte-h":!0}),$(s)!=="svelte-1cwg6cj"&&(s.textContent=p),n=y(i),V(r.$$.fragment,i),i.forEach(g),d.forEach(g),this.h()},h(){f(s,"class","title svelte-e0n9er"),f(t,"class","svelte-e0n9er")},m(c,d){A(c,t,d),u(t,e),u(e,s),u(e,n),k(r,e,null),l=!0},p:T,i(c){l||(D(r.$$.fragment,c),l=!0)},o(c){M(r.$$.fragment,c),l=!1},d(c){c&&g(t),B(r)}}}class L extends P{constructor(t){super(),w(this,t,null,G,N,{})}}export{L as component};
