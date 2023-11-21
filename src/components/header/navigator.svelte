<script>
    import { onNavigate } from "$app/navigation";
    import {onMount} from "svelte";
    let selected = -1
    let styles = "opacity: 0"
    const items = [
        {title: "Works", link: "/works"},
        {title: "Contact", link: "/contact"},
    ];
    onNavigate((callback) => {
        const id = callback.to.route.id;
        if(id === "/"){
            styles = "opacity: 0"
            selected = -1;
        } else if(id === "/works"){
            styles = "left: 4px; width: 3.7rem"
            selected = 0
        } else if(id === "/contact") {
            styles = "left: 64px; width: 4.3rem"
            selected = 1
        }
    });
        onMount(() => {
            const path = window.location.pathname;
            if (path.startsWith("/contact")) {
                styles = "left: 64px; width: 4.3rem"
                selected = 1
            } else if (path.startsWith("/works")) {
                styles = "left: 4px; width: 3.7rem"
                selected = 0
            }
        });
</script>

<main>
    <div class="box" style={styles}/>
    {#each items as c, index}
        <a href={c.link} class="item" style={`color: ${selected === index ? "white" : null}`}>{c.title}</a>
    {/each}
</main>

<style>
    main {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-inline: 4px;
        padding-block: 4px;
        border-radius: 8px;
        border: 1px solid rgb(42, 42, 42);
        font-family: 'Inter', sans-serif;
        position: relative;
        z-index: 1;
    }
    .box {
        position: absolute;
        background: rgb(42, 42, 42);
        height: 1.5rem;
        border-radius: 5px;
        z-index: 2;
        transition: all 0.3s
    }
    .item {
        text-decoration: none;
        border-radius: 5px;
        padding-inline: 9px;
        padding-block: 3px;
        font-size: 14px;
        z-index: 3;
        transition: all 0.3s;
        color: #858585;
        font-weight: 400;
        user-select: none;
    }
    .item:hover{
        color: #b0b0b0;
    }
</style>