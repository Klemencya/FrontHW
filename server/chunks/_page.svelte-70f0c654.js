import { c as create_ssr_component, e as escape, d as add_attribute } from './index-41dea004.js';

const css = {
  code: "div.svelte-8vhr2g{margin:150px 150px 50px}",
  map: null
};
async function getIDFromURL(email2) {
  const params = new URLSearchParams({ email: email2 }).toString();
  let response = await fetch("https://fwd.innopolis.app/api/hw2?" + params);
  const id = await response.json();
  return await getPictureUsingID(id);
}
async function getPictureUsingID(id) {
  const params = new URLSearchParams({ num: id }).toString();
  let response = await fetch("https://getxkcd.vercel.app/api/comic?" + params);
  let response_data = await response.json();
  let joke = {
    title: response_data.title,
    img: response_data.img,
    alt: response_data.alt,
    year: response_data.year,
    month: response_data.month,
    day: response_data.day
  };
  return joke;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email;
  let my_joke = getIDFromURL(email);
  let joke_title;
  let joke_alt;
  let joke_img;
  let joke_date;
  my_joke.then((value) => {
    joke_title = value.title;
    joke_alt = value.alt;
    joke_img = value.img;
    joke_date = new Date(value.year, value.month - 1, value.day).toLocaleDateString();
  });
  $$result.css.add(css);
  return `<div class="child svelte-8vhr2g">
    <h2 id="picTitle">${escape(joke_title)}</h2>
    <p id="altText">${escape(joke_alt)}</p>
    <p id="picDate" style="align-content: end">${escape(joke_date)}</p>
    <img id="picture"${add_attribute("src", joke_img, 0)}${add_attribute("alt", joke_alt, 0)}>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-70f0c654.js.map
