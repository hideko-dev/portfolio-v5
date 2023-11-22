<script>
	import Header from "../components/header/header.svelte"
	import Footer from "../components/footer.svelte";
	import Fonts from "../components/fonts.svelte";
	import '../globals.css'
	import PageTransition from "../components/transition.svelte";
	import Loader from "../components/loader.svelte";
	export let data;
</script>

<div>
	<Fonts/>
	<Loader/>
	<Header/>
	<PageTransition pathname={data.pathname}>
		<slot />
	</PageTransition>
	<Footer/>
</div>

<style>
	:root {
		background: var(--bg);
		color: var(--text);
		font-family: 'Inter', sans-serif;
	}
</style>