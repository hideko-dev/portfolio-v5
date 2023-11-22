<script>
    import About from "./_components/about.svelte";
    import Bio from "./_components/bio.svelte";
</script>

<svelte:head>
    <title>Home - Hideko Portfolio</title>
</svelte:head>

<section>
    <div>
        <About/>
        <Bio/>
    </div>
</section>

<style>
    section {
        display: flex;
        justify-content: center;
        height: max-content;
        font-family: 'Inter', sans-serif;
    }
</style>