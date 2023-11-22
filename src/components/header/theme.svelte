<script>
    import Fa from "svelte-fa";
    import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";
    import { toggleTheme, theme } from "$lib/theme/theme.js";
</script>

<main on:click={toggleTheme}>
    {#if $theme === "dark"}
        <Fa icon={faSun}/>
    {:else if $theme === "light"}
        <Fa icon={faMoon}/>
    {/if}
</main>

<style>
    main {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-inline: 10px;
        padding-block: 8px;
        border-radius: 8px;
        font-family: 'Inter', sans-serif;
        position: relative;
        z-index: 1;
        transition: all 0.3s;
        cursor: pointer;
        color: var(--text-thin)
    }
    main:hover {
        color: #b0b0b0;
    }
</style>