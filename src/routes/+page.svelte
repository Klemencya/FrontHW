<!--<script lang="ts">-->
<!--    import Joke from "../../components/+page.svelte";-->
<!--    import Bio from "../../components/+bio.svelte";-->
<!--    import Projects from "../../components/+projects.svelte";-->
<!--</script>-->

<main>
    <header>
        <div>
            <h1>Margarita Sidorskaya</h1>
        </div>
    </header>

    <div class="bio+photo">
<!--        <div class="child"><Joke email={"m.sidorskaya@innopolis.university"}/></div>-->
<!--        <div class="child"><Bio/></div>-->
<!--        <div class="child">Joke</div>-->
        <a href="/about" class="child">Joke</a>
<!--        <div class="child">Joke</div>-->
        <div class="child">Bio</div>
    </div>

    <div class="bio+photo">
<!--        <div class="child"><Projects/></div>-->
        <div class="child">Projects</div>
<!--        <div class="child"><img src="assets/me2.jpg" alt="Black and white photo of me"></div>-->
    </div>

<!--    <div style="display: flex">-->
<!--        <a href="https://github.com/Klemencya" class=" fa fa-github-square fa-2x" id="gh-link" style="padding-left: 100px"></a>-->
<!--        <a href="https://t.me/RitaSidorskaya" class="fa fa-telegram fa-2x" id="tg-link"></a>-->
<!--        <a href="https://instagram.com/klementsiya?igshid=YmMyMTA2M2Y=" class="fa fa-instagram fa-2x"></a>-->
<!--        <a href="mailto:m.sidorskaya@innopolis.university" class="fa fa-envelope fa-2x" id="email"></a>-->
<!--    </div>-->
</main>

<style>
    header {
        text-align: center;
        margin: auto;
        width: 50%;
    }

    header div {
        margin: 150px 150px 50px;
    }

    img {
        width: 100%;
    }

    .bio\+photo {
        display: flex;
    }

    .child {
        text-align: center;
        margin: 50px 100px;
        width: 100%;
    }

    .fa {
        padding: 20px;
        font-size: 30px;
        width: 50px;
        text-align: center;
        text-decoration: none;
        border-radius: 50%;
        color: black;
    }
</style>
