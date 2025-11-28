<script lang="ts">
	import './layout.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import NavbarMobile from '$lib/components/NavbarMobile.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Larissa Alves | Dev Fullstack</title>
	<meta
		name="description"
		content="Dev FullStack | Larissa  - Desenvolvedora Fullstack especializada em criar aplicações web modernas e responsivas. Confira meus projetos e entre em contato."
	/>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
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
