<script>
    import {faGithub} from "@fortawesome/free-brands-svg-icons";
    import { page } from "$app/stores";
    let id  = $page.params.id
    import { client } from "$lib/works.js";
    import {onMount} from "svelte";
    import Markdown from "svelte-exmarkdown";
    let state = false;
    let data = {};
    let stack = [];
    let repo = "";
    let md;
    let date = ""
    let dateAgo = "";

    onMount(async () => {
        data = await client.get({ endpoint: "works", contentId: id });
        stack = data.stack;
        md = data.body;
        state = true

        let publishedAt = new Date(data.publishedAt);
        let currentDate = new Date();
        let timeDifference = currentDate - publishedAt;
        let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        let yearsDifference = Math.floor(daysDifference / 365)
        if (yearsDifference < 1) {
            dateAgo = daysDifference + "d ago";
        } else {
            dateAgo = yearsDifference + "y ago";
        }
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const month = months[publishedAt.getMonth()];
        const day = publishedAt.getDate();
        const year = publishedAt.getFullYear();
        date = month + " " + day + ", " + year;


        if (data && data.stack && data.repo) {
            stack = data.stack.split(", ").map(item => item.trim());
            repo = `https://github.com/${data.repo}`
        }
    })
</script>

<svelte:head>
    <title>Works / {data.title} - Hideko Portfolio</title>
</svelte:head>

<section>
    {#if state === false}
    {:else if state === true}
        <div class="contents">
            <p class="title">{data.title}</p>
            <p class="dates">{date} ({dateAgo})</p>
            <div class="stacks">
                <span>Stacks of Development</span>
                {#each stack as i}
                    <p class="item">{i}</p>
                {/each}
            </div>
            <div class="links">
                <p>Repo</p>
                <a href={repo}>{data.repo}</a>
            </div>
            <div class="links">
                <p>Web</p>
                <a href={data.website}>{data.website}</a>
            </div>
            <div class="mds">
                <Markdown {md}/>
            </div>
        </div>
    {/if}
</section>

<style>
    section {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .contents {
        width: 30rem;
        margin-top: 7rem;
        min-height: 100vh;
    }
    .title {
        font-size: 25px;
        font-weight: 700;
        color: var(--solid);
    }
    .dates {
        margin-top: 5px;
        font-family: 'Roboto Mono Variable', sans-serif;
        font-weight: 300;
        font-size: 14px;
    }
    .mds {
        width: 99%;
        margin: 1rem auto 0;
    }

    .stacks {
        margin-top: 1.2rem;
        padding-top: 1rem;
        padding-bottom: 0.8rem;
        padding-inline: 0.9rem;
        border-radius: 8px;
        border: 1px solid var(--border);
        position: relative;
        display: inline-flex;
        font-size: 11px;
        box-sizing: border-box;
        align-items: center;
        font-family: "Roboto Mono Variable", sans-serif;
        font-weight: 400;
        line-height: 1.1876em;
        letter-spacing: 0.00938em;
        flex-wrap: wrap;
        gap: 6px;
        width: 100%;
    }
    .stacks span {
        position: absolute;
        left: 18px;
        background: var(--bg);
        padding-inline: 0.5rem;
        top: -7px;
        color: var(--text-thin);
        font-size: 12px;
    }
    .stacks .item {
        border: 1px solid var(--border);
        width: max-content;
        padding-inline: 10px;
        padding-block: 4px;
        border-radius: 100px;
        font-size: 13px;
        grid-column: span 1
    }
    .links {
        display: flex;
        align-items: center;
        font-family: 'Roboto Mono Variable', sans-serif;
        gap: 6px;
        margin-top: 8px;
    }
    .links p {
        padding-inline: 10px;
        padding-block: 2px;
        border: 1px solid var(--border);
        color: var(--text-thin);
        font-size: 13px;
        border-radius: 100px;
    }
    .links a {
        font-size: 13px;
        text-decoration: none;
        color: var(--text-thin);
        margin-bottom: 2px;
        transition: all 0.2s;
        cursor: pointer;
    }
    .links a:hover {
        color: var(--solid);
    }

    @media (max-width: 600px) {
        .contents {
            width: 20rem;
        }
    }
</style>