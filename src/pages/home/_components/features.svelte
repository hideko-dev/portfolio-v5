<script>
    export const ssr = true;
    import Fa from "svelte-fa";
    import { fade } from "svelte/transition";
    import { faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
    import { faEllipsis, faPaintRoller, faPersonHalfDress } from "@fortawesome/free-solid-svg-icons";
    let boxes = [
        { title: "Frontend", icon: faReact, description: "Hello This is fronhat" },
        { title: "Backend", icon: faNodeJs, description: "Hello This is froagagnt" },
        { title: "Genderless", icon: faPersonHalfDress, description: "Hello This is fragfont" },
        { title: "Designable", icon: faPaintRoller, description: "Hello This is fronte" }
    ];
    let select_box_left = 3;
    let currentIndex = 0;
    $: {
        console.log("aa");
        if(currentIndex === 0){
            select_box_left = 3
        } else if(currentIndex === 1){
            select_box_left = 13
        } else if(currentIndex === 2){
            select_box_left = 13
        } else if(currentIndex === 3){
            select_box_left = 13
        }
    }
    function onMouseEnter(id) {
        if(id === 0){
            select_box_left = 3
        } else if(id === 1){
            select_box_left = 82
        } else if(id === 2){
            select_box_left = 162
        } else if(id === 3){
            select_box_left = 243
        }
        currentIndex = id;
    }
</script>

<div class="features">
    <p class="text">ALSO WORKS WITH 25+ MORE LIBRARIES</p>
    <div class="selector">
        <div class="select_box" style="left: {select_box_left}px"/>
        {#key currentIndex}
            {#each boxes as b, index (index)}
                <div transition:fade={{ duration: 200, delay: 100 }}
                     on:mouseenter={() => {onMouseEnter(index)}}
                     class="box" style={`color: ${index === currentIndex ? "#B3A6EA" : "#a2a2a2"}`}>
                    <div class="box-content">
                        <Fa fw icon={b.icon} size="28" style="margin-top: 13px; margin-bottom: 4px"/>
                        <p>{b.title}</p>
                    </div>
                </div>
            {/each}
        {/key}
    </div>
    <div class="source">
        <div class="titlebar">
            <p>note</p>
            <Fa fw icon={faEllipsis} size="28" style="margin: 0 0 0 auto"/>
        </div>
        <div class="border"/>
        {#key currentIndex}
            <div class="content" transition:fade={{ duration: 200, delay: 100 }}>
                <p>{boxes[currentIndex].description}</p>
            </div>
        {/key}
    </div>
</div>

<style>
    .selector {
        background: rgba(17, 10, 56, 0.8);
        border-radius: 7px;
        padding: 3px;
        display: flex;
        align-items: center;
        margin-top: 1rem;
        position: relative;
        transition: left 0.2s ease;
        box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.35);
    }
    .select_box {
        position: absolute;
        top: 3px;
        width: 5rem;
        height: 4.5rem;
        border-radius: 5px;
        border: 1px solid #1f2248;
        background: linear-gradient(to bottom, transparent, rgba(110, 60, 239, 0.1));
        transition: all 0.2s ease;
    }
    .source {
        margin-top: 1rem;
        background: rgba(17, 10, 56, 0.8);
        border-radius: 7px;
        height: 13rem;
        position: relative;
        box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.35);
    }
    .source .content {
        position: absolute;
        top: 2.8rem;
        left: 1rem;
        color: #c7c7c7;
        font-family: 'Inter', sans-serif;
    }
    .text {
        font-weight: 500;
        padding-inline: 15px;
        padding-block: 7px;
        border-radius: 100px;
        font-family: 'Inter', sans-serif;
        font-size: 13px;
        color: #B3A6EA;
        background: rgba(17, 10, 56, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        transition: left 0.2s ease;
        box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.35);
        text-align: center;
    }
    .box {
        font-family: 'Inter', sans-serif;
        border: 1px solid transparent;
        width: 5rem;
        height: 4.5rem;
        font-size: 12px;
        border-radius: 5px;
        text-align: center;
        position: relative;
        color: #a2a2a2;
        transition: all 0.2s ease;
    }
    .box::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, transparent, rgba(110, 60, 239, 0.1));
        transition: all 0.2s ease;
        border-radius: 5px;
        opacity: 0;
    }
    .border {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 30px;
        width: 95%;
        height: 1px;
        background: rgba(179, 166, 234, 0.8);
    }
    .titlebar {
        font-family: 'Inter', sans-serif;
        position: absolute;
        left: 10px;
        top: 1px;
        font-size: 15px;
        color: rgba(255, 255, 255, 0.4);
        display: flex;
        align-items: center;
        width: 95%;
    }
</style>