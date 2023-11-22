<script>
    import { sendMessage } from "$lib/contacts.js";
    let mail;
    let msg;
    async function sendMsg(){
        await sendMessage(mail, msg);
    }
</script>

<section>
    <span>Email</span>
    <input class="type" type="email" bind:value={mail}>
    <span class="req">What are the requirements?</span>
    <textarea class="type" bind:value={msg}/>
    <div class="submit" on:click={sendMsg}>Submit</div>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        border: 1px solid var(--border);
        width: 20rem;
        height: max-content;
        padding: 1rem;
        border-radius: 10px;
        font-family: 'Roboto Mono Variable', sans-serif;
        font-weight: 400;
    }
    span {
        font-size: 13px;
        color: var(--text-thin);
    }
    .type {
        margin-top: 5px;
        background: transparent;
        border: 1px solid var(--thin);
        color: var(--text);
        padding-inline: 10px;
        resize: none;
        border-radius: 5px;
        transition: all 0.3s;
    }
    .req {
        margin-top: 1rem;
    }
    input {
        height: 2rem;
        transition: all 0.3s;
    }
    textarea {
        height: 7rem;
        padding-block: 10px;
        transition: all 0.3s;
    }
    .type:focus {
        outline: none;
        border-color: var(--solid);
    }
    .submit {
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 2rem;
        border:1px solid var(--thin);
        border-radius: 5px;
        transition: all 0.3s;
        color: var(--text-thin);
        cursor: pointer;
        margin-top: 8px;
        user-select: none;
    }
    .submit:hover {
        background: var(--border);
        color: var(--text);
    }
</style>