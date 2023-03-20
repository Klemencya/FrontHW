<nav>
    <a href="/">Home</a>
    <a href="/joke">Joke</a>
    <a href="/bio">Bio</a>
    <a href="/projects">Projects</a>
</nav>

<header>
    <div>
        <h1>Margarita Sidorskaya</h1>
    </div>
</header>

<slot></slot>

<div style="display: flex; bottom: 0px">
    <a href="https://github.com/Klemencya" class=" fa fa-github-square fa-2x" id="gh-link" style="padding-left: 100px"></a>
    <a href="https://t.me/RitaSidorskaya" class="fa fa-telegram fa-2x" id="tg-link"></a>
    <a href="https://instagram.com/klementsiya?igshid=YmMyMTA2M2Y=" class="fa fa-instagram fa-2x"></a>
    <a href="mailto:m.sidorskaya@innopolis.university" class="fa fa-envelope fa-2x" id="email"></a>
</div>

<style>
    nav {
        text-align: center;
        padding-top: 1%;
        padding-bottom: 1%;
        background-color: #ae8e7e;
        text-decoration-color: white;
        text-decoration-width: auto;
    }

    nav a {
        display: inline;
        padding: 10%
    }

    nav a:visited {
        color: white;
    }

    header {
        text-align: center;
        margin: auto;
        width: 50%;
    }

    header div {
        margin: 100px 150px 50px;
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
