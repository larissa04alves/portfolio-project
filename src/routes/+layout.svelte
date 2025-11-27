<script lang="ts">
	import './layout.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import NavbarMobile from '$lib/components/NavbarMobile.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
	<title>Larissa Alves | Fullstack Dev</title>
</svelte:head>

<div class="h-full w-full">
	<!-- Desktop Navbar -->
	<Navbar />

	<!-- Mobile Navbar -->
	<NavbarMobile />

	<main>
		{@render children()}
	</main>
	<Footer />
</div>
