<script>
    import Inputs from "./_components/inputs.svelte";
</script>

<section>
    <div>
        <p class="title">Contact</p>
        <Inputs/>
    </div>
</section>

<style>
    section {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        font-weight: 600;
        font-size: 25px;
    }
    .title {
        margin-left: 2px;
        margin-bottom: 8px;
    }
</style>