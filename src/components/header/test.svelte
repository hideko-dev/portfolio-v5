<script>
    let current = 0;
    let left = 4;
    const navigations = [
        {title: "Repo"},
        {title: "Rack"},
    ]
    function onSelect(index) {
        current = index
        if(index === 0){
            left = 4
        } else if(index === 1) {
            left = 54
        }
    }
</script>

<div class="bar">
    <div class="select-box" style="left: {left}px;"/>
    {#each navigations as c, index}
        <div class="text" style={`${index === current ? "color: white" : ""}`} on:click={() => {onSelect(index)}}>{c.title}</div>
    {/each}
</div>

<style>
    .bar {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 3px;
        background: rgb(9,8,17);
        border-radius: 10px;
        border: 1px solid rgb(51,50,50);
        z-index: -1;
        position: relative;
    }
    .text {
        margin-inline: 2px;
        padding-block: 5px;
        padding-inline: 7px;
        font-size: 14px;
        z-index: 2;
        cursor: pointer;
    }
    .bar {
        color: #a2a2a2;
        transition: all 0.3s;
    }
    .bar:hover {
        color: white;
    }
    .select-box {
        position: absolute;
        background: rgb(51,50,50);
        width: 52px;
        height: 25px;
        z-index: 1;
        top: 4px;
        border-radius: 5px;
        user-select: none;
        transition: all 0.3s;
    }
</style>