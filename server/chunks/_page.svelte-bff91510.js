import { c as create_ssr_component, e as escape } from './index-41dea004.js';
import { b as base } from './paths-c09bcffc.js';

const css = {
  code: ".bio\\+photo.svelte-u62g5y{display:flex}.child.svelte-u62g5y{text-align:center;margin:10px 10px;width:100%}a.svelte-u62g5y{padding-top:40px;padding-bottom:40px;background-color:rgba(174, 142, 126, 0.45)}a.svelte-u62g5y:visited{color:black;text-underline:none}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main><div class="bio+photo svelte-u62g5y"><a href="${escape(base, true) + "/joke"}" class="child svelte-u62g5y">Joke</a>
        <a href="${escape(base, true) + "/bio"}" class="child svelte-u62g5y">Bio</a></div>

    <div class="bio+photo svelte-u62g5y"><a href="${escape(base, true) + "/projects"}" class="child svelte-u62g5y">Projects</a>
</div>
</main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-bff91510.js.map
