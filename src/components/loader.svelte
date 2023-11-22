<script>
    import { onNavigate } from "$app/navigation";
    import { onMount } from "svelte";
    let style = "width: 50%; opacity: 0; right:0;";
    onMount(() => {
        load()
    })
    onNavigate((callback) => {
        load()
    });
    function load(){
        style = "width: 100%; opacity: 1; left:0;";
        setTimeout(() => {
            style = "width: 50%; opacity: 0;right:0;";
        }, 300);
    }
</script>

<div class="loader" style={style}/>

<style>
    .loader {
        /*background: linear-gradient(to right, gray, gray);*/
        background: #575757;
        width: 100%;
        height: 2px;
        z-index: 10;
        position: fixed;
        transition: all 0.2s ease;
    }
</style>