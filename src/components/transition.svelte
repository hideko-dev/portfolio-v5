<script>
    import { fly } from 'svelte/transition';
    export let pathname = '';
</script>

{#key pathname}
    <div in:fly={{
            y: 5, duration: 500, delay: 500
        }}
         out:fly={{
             y: 5, duration: 500
         }}>
        <slot />
    </div>
{/key}