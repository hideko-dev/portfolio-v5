<script>
    import catIcon from "$lib/assets/cat.webp"
</script>

<section>
    <p class="title">About</p>
    <div class="bios">
        <img src={catIcon} alt="icon">
        <div class="bio">
            I’m a software engineer and CEO of Vercel. I’m originally from Lanús, Buenos Aires, Argentina. I owe much of my career to the Web and Open Source.
            <br><br>
            I spent my early teens advocating for and teaching people how to use Linux and later developed a passion for JavaScript and Web development.
            <br><br>
            After joining the <a href="https://mootools.io">MooTools</a> core team, I got my first full-time job as a frontend engineer at 18 years old and relocated to San Francisco, CA.
            <br><br>
            I started my first company Cloudup in SF which was later acquired by Automattic, the company behind WordPress, to power their editing and site building technology.
            <br><br>
            After being involved in creating numerous influential open source projects like Socket.IO and Mongoose, I saw the opportunity in creating tooling and cloud infrastructure to make the Web faster, with a focus on developer experience (DX).
            <br><br>
            Next.js and Vercel were born. Our platform now helps power the online presence of companies like Washington Post, Porsche, Under Armour and Nintendo.
        </div>
    </div>
</section>

<style>
    section {
        margin-top: 7rem;
    }
    .title {
        font-weight: 700;
        font-size: 25px;
    }
    .bios {
        margin: 0 auto;
        width: 30rem;
    }
    .bio {
        margin-top: 15px;
    }
    img {
        float: right;
        margin-left: 1rem;
        margin-bottom: 1rem;
        border-radius: 100%;
        outline: 1px solid var(--border);
        aspect-ratio: 1 / 1;
        height: 120px;
        width: 120px;
        object-fit: cover;
    }
    a {
        text-decoration: none;
        color: var(--text);
        position: relative;
        z-index: 2;
    }
    a:before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background:var(--text-thin);
        z-index: 1;
        transition: all 0.2s;
    }
    a:hover::before {
        background: var(--text)
    }
    @media (max-width: 600px) {
        .bios {
            width: 20rem;
        }
    }
</style>