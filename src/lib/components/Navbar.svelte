<script lang="ts">
	import { onMount } from 'svelte';
	import { Button } from './ui/button';

	let scrolled = $state(false);

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 50;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<nav
	class="fixed top-0 right-0 left-0 z-50 flex w-full justify-around py-3 {scrolled
		? 'bg-background/80 backdrop-blur-lg'
		: 'bg-transparent'}"
>
	<h1 class=" text-5xl font-bold text-accent">>-</h1>
	<div class="flex items-center gap-8">
		<ul class="flex items-center gap-8">
			<li><a href="/about">Sobre</a></li>
			<li><a href="/skills">Skills</a></li>
			<li><a href="/projects">Projetos</a></li>
			<li><a href="/contact">Contato</a></li>
		</ul>
		<Button variant="ghost" class="bg-accent text-foreground hover:bg-accent/80"
			>Vamos conversar</Button
		>
	</div>
</nav>
