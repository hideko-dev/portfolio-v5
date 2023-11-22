<script>
    import {faDiscord, faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
    import Fa from "svelte-fa";
    let boxStyle = "opacity: 0; width: 2.15rem"
    const links = [
        {icon: faGithub, link: "https://github.com/Hideko-Dev"},
        {icon: faInstagram, link: "https://github.com/Hideko-Dev"},
        {icon: faDiscord, link: "https://github.com/Hideko-Dev"},
        {icon: faLinkedin, link: "https://github.com/Hideko-Dev"},
    ];
    function onHover(id){
        if(id === 0){
            boxStyle = "left: 4px; width: 2.15rem"
        } else if(id === 1){
            boxStyle = "left: 36px; width: 2.15rem"
        } else if(id === 2){
            boxStyle = "left: 71px; width: 2.15rem"
        } else if(id === 3){
            boxStyle = "left: 107px; width: 2.15rem"
        }
    }
    function onUnHover() {
        boxStyle = "opacity: 0;"
    }
</script>

<main>
    <div class="box" style={boxStyle}/>
    {#each links as l, index}
        <a class="item" href={l.link} on:mouseenter={() => onHover(index)} on:mouseleave={onUnHover}>
            <Fa icon={l.icon}/>
        </a>
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
        /*border: 1px solid rgb(33, 33, 33);*/
        font-family: 'Inter', sans-serif;
        position: relative;
        z-index: 1;
    }
    .box {
        position: absolute;
        background: var(--border);
        height: 1.5rem;
        border-radius: 5px;
        z-index: 2;
        transition: all 0.2s;
    }
    .item {
        text-decoration: none;
        border-radius: 5px;
        padding-inline: 9px;
        padding-block: 2px;
        font-size: 16px;
        z-index: 3;
        transition: all 0.2s;
        color: var(--text-thin);
        font-weight: 400;
        user-select: none;
    }
    .item:hover{
        color: var(--subtle);
    }
</style>