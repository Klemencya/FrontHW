<script lang="ts">
    import type { Joke } from './Joke';

    let email;

    let my_joke : Promise<Joke> = getIDFromURL(email);
    let joke_title: string;
    let joke_alt : string;
    let joke_img : string;
    let joke_date : string;
    my_joke.then((value => {
        joke_title = value.title;
        joke_alt = value.alt;
        joke_img = value.img;
        joke_date = new Date(value.year, value.month - 1, value.day).toLocaleDateString();
    }));


    async function getIDFromURL(email: string) {
        const params = new URLSearchParams({
            email: email
        }).toString();

        let response = await fetch('https://fwd.innopolis.app/api/hw2?' + params);
        const id : string = await response.json();
        return await getPictureUsingID(id)
    }

    async function getPictureUsingID(id: string) {

        const params = new URLSearchParams({
            num: id
        }).toString();

        let response = await fetch('https://getxkcd.vercel.app/api/comic?' + params);
        let response_data : Joke = await response.json();

        let joke : Joke = {title : response_data.title, img : response_data.img,
            alt : response_data.alt, year : response_data.year,
            month : response_data.month, day : response_data.day}
        return joke
    }
</script>

<div class="child">
    <!--    <img src="assets/me.jpg" alt="Photo of me in the airport">-->
    <h2 id="picTitle">{joke_title}</h2>
    <p id="altText">{joke_alt}</p>
    <p id="picDate" style="align-content: end">{joke_date}</p>
    <img id="picture" src="{joke_img}" alt="{joke_alt}">
</div>

<style>
    div {
        margin: 150px 150px 50px;
    }
</style>
