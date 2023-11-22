<section>
    <p class="copyright" >© {new Date().getFullYear()} Hideko (<a href="https://instagram.com/hideko.cat">@hideko.cat</a>).</p>
    <p>All rights reserved</p>
</section>

<style>
    section {
        height: 3.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Roboto Mono Variable', sans-serif;
        font-weight: 300;
        font-size: 13px;
        gap: 5px;
    }
    a {
        color: var(--solid);
        text-decoration: none;
        transition: all 0.2s;
    }
    a:hover {
        color: var(--text-thin);
    }
    @media (max-width: 600px) {
        section {
            display: grid;
            place-content: center;
            gap: 2px;
            text-align: center;
            height: 4rem;
        }
    }
</style>