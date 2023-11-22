<script>
    import { onMount } from "svelte";
    import { client } from "$lib/works.js";

    let data = [];

    onMount(async () => {
        const res = await client.get({ endpoint: "works" });
        data = res.contents;
    });

    function getYear(dateString) {
        const date = new Date(dateString);
        return date.getFullYear();
    }

    function getYearDifference(dateString, createdDateString) {
        const date = new Date(dateString);
        const createdDate = new Date(createdDateString);
        const timeDifference = date - createdDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const yearsDifference = Math.floor(daysDifference / 365);

        if (yearsDifference < 1) {
            return daysDifference + "d ago";
        } else {
            return yearsDifference + "y ago";
        }
    }
</script>

<section>
    <div class="contents">
        <div class="titles">
            <p class="date">date</p>
            <p class="title">title</p>
            <p class="ago">ago</p>
        </div>
        {#each data as c}
            <a class="content" href="works/{c.id}">
                <p class="y">{getYear(c.createdAt)}</p>
                <p class="t">{c.title}</p>
                <p class="a">{getYearDifference(new Date(), c.createdAt)}</p>
            </a>
        {/each}
    </div>
</section>

<style>
    section {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .contents {
        width: 30rem;
        min-height: 100vh;
        margin-top: 7rem;
    }
    .titles {
        display: flex;
        align-items: center;
        color: var(--text-thin);
        padding-inline: 0.6rem;
        margin-bottom: 0.3rem;
        font-family: 'Roboto Mono Variable', sans-serif;
        font-size: 14px
    }
    .date {
        padding-right: 1.8rem
    }
    .ago {
        margin: 0 0 0 auto;
    }
    .content {
        display: flex;
        align-items: center;
        height: 2.3rem;
        padding-inline: 0.6rem;
        border-top: 1px solid var(--little);
        font-family: 'Roboto Mono Variable', sans-serif;
        font-weight: 400;
        font-size: 14px;
        transition: all 0.2s;
        cursor: pointer;
        text-decoration: none;
        color: var(--text)
    }
    .y {
        padding-right: 1.9rem;
    }
    .t {
        width: 10rem;
        white-space: nowrap;
        overflow: hidden;
    }
    .a {
        margin: 0 0 0 auto;
    }
    .content:hover {
        background: var(--border);
    }
    @media (max-width: 600px) {
        .contents {
            width: 20rem;
        }
    }
</style>
