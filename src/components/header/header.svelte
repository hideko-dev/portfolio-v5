<script>
    import Navigator from "./navigator.svelte";
    import Eternals from "./eternals.svelte";
    import Theme from "./theme.svelte";
    import { theme } from "$lib/theme/theme.js";
</script>

<main>
    <div class="contents">
        <a href="/" class="logo" style={`filter: invert(${$theme === "dark" ? 0 : 0.9})`}>
            <img src="icon.svg" alt="logo">
        </a>
        <div class="lefts">
            <div class="line"/>
            <div class="navigator"><Navigator/></div>
            <div class="line"/>
            <div class="eternal"><Eternals/></div>
            <div class="line"/>
            <div class="theme"><Theme/></div>
        </div>
    </div>
</main>

<style>
    .line {
        width: 1px;
        height: 18px;
        background: var(--thin);
    }
    .contents {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-inline: 4px;
        padding-block: 2px;
        border-radius: 10px;
        border: 1px solid var(--border);
        background: var(--translucent);
        backdrop-filter: blur(30px);
    }
    .theme {
        margin-inline: 0.2rem;
    }
    .eternal {
        margin-inline: 0.3rem;
    }
    main {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
        width: 100%;
        position: fixed;
        background: transparent;
        font-family: 'Inter', sans-serif;
    }
    .logo {
        text-decoration: none;
        color: white;
        font-weight: 700;
        font-size: 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-inline: 1rem;
        transition: all 0.3s;
    }
    .logo:hover {
        opacity: 0.5;
    }
    .logo img {
        width: 1.7rem;
    }
    .lefts {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    @media (max-width: 600px) {
        .eternal {
            display: none;
        }
    }
</style>