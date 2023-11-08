<script>
    import Texts from "./_components/texts.svelte";
    import Features from "./_components/features.svelte";
</script>

<main>
    <div class="content">
        <Texts/>
        <Features/>
    </div>
</main>

<style>
    main {
        background-image: linear-gradient(0deg, transparent 54px, #1A2355 55px), linear-gradient(90deg,  transparent 54px, #1A2355 55px);
        background-size: 55px 55px;
        position: relative;
        height: 100vh;
    }
    .content {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: radial-gradient(at right bottom, transparent, rgb(15, 11, 49) 60%);
    }
    .content::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 25rem;
        height: 25rem;
        background: #000dff;
        filter: blur(280px);
    }
    .content::before {
        content: "";
        position: absolute;
        left: 70%;
        top: 0;
        width: 25rem;
        height: 25rem;
        background: #000dff;
        filter: blur(280px);
    }
    @media (max-width: 600px) {
        .content::after {
            width: 15rem;
            height: 15rem;
            filter: blur(150px);
        }
    }
</style>
