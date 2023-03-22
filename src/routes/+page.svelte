<script lang="ts">
    import {base} from "$app/paths";
    let email = "m.sidorskaya@innopolis.university"
</script>

<main>
    <div class="bio+photo">
        <a href="{base}/joke/?email={email}" class="child">Joke</a>
        <a href="{base}/bio" class="child">Bio</a>
    </div>

    <div class="bio+photo">
        <a href="{base}/projects" class="child">Projects</a>
    </div>
</main>

<style>
    img {
        width: 100%;
    }

    .bio\+photo {
        display: flex;
    }

    .child {
        text-align: center;
        margin: 10px 10px;
        width: 100%;
    }

    a {
        padding-top: 40px;
        padding-bottom: 40px;
        background-color: rgba(174, 142, 126, 0.45);
    }

    a:visited {
        color: black;
        text-underline: none;
    }
</style>
