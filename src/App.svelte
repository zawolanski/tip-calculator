<script lang="ts">
	import Logo from './assets/logo.svg';
	export let name: string;
</script>

<main>
	<Logo />
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style lang="scss">
	@import './app.scss';
</style>