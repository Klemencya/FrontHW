import { c as create_ssr_component } from './index-41dea004.js';

const css = {
  code: "nav.svelte-30hcra.svelte-30hcra{text-align:center;padding-top:1%;padding-bottom:1%;background-color:#ae8e7e;text-decoration-color:white;text-decoration-width:auto}nav.svelte-30hcra a.svelte-30hcra{display:inline;padding:10%\n    }nav.svelte-30hcra a.svelte-30hcra:visited{color:white}header.svelte-30hcra.svelte-30hcra{text-align:center;margin:auto;width:50%}header.svelte-30hcra div.svelte-30hcra{margin:100px 150px 50px}.fa.svelte-30hcra.svelte-30hcra{padding:20px;font-size:30px;width:50px;text-align:center;text-decoration:none;border-radius:50%;color:black}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav class="svelte-30hcra"><a href="/" class="svelte-30hcra">Home</a>
    <a href="/joke" class="svelte-30hcra">Joke</a>
    <a href="/bio" class="svelte-30hcra">Bio</a>
    <a href="/projects" class="svelte-30hcra">Projects</a></nav>

<header class="svelte-30hcra"><div class="svelte-30hcra"><h1>Margarita Sidorskaya</h1></div></header>

${slots.default ? slots.default({}) : ``}

<div style="display: flex; bottom: 0px"><a href="https://github.com/Klemencya" class="fa fa-github-square fa-2x svelte-30hcra" id="gh-link" style="padding-left: 100px"></a>
    <a href="https://t.me/RitaSidorskaya" class="fa fa-telegram fa-2x svelte-30hcra" id="tg-link"></a>
    <a href="https://instagram.com/klementsiya?igshid=YmMyMTA2M2Y=" class="fa fa-instagram fa-2x svelte-30hcra"></a>
    <a href="mailto:m.sidorskaya@innopolis.university" class="fa fa-envelope fa-2x svelte-30hcra" id="email"></a>
</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-82d246e6.js.map
