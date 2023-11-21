<script>
    import {onNavigate} from "$app/navigation";

    onNavigate((callback) => {
        const id = callback.to.route.id;
        console.log(id);
    });
</script>

<div class="loader"/>

<style>
    .loader {
        background:red;
        width: 100%;
        height: 2rem;
    }
</style>