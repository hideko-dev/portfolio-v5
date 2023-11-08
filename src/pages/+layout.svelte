<script>
	import Header from "../components/header.svelte"
	import Fonts from "../components/fonts.svelte";
	import '../globals.css'
</script>

<div>
	<Fonts/>
	<Header/>
	<main>
		<slot />
	</main>
</div>