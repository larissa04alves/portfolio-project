<script lang="ts">
	import { onMount } from 'svelte';
	import { Button } from './ui/button';

	let scrolled = $state(false);
	let activeSection = $state('');

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 50;
			const sections = ['about', 'skills', 'projects', 'contact'];
			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					if (rect.top <= 100 && rect.bottom >= 100) {
						activeSection = section;
						break;
					}
				}
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<nav
	class="fixed top-0 right-0 left-0 z-50 hidden w-full justify-around py-3 md:flex {scrolled
		? 'bg-background/80 backdrop-blur-lg'
		: 'bg-transparent'}"
>
	<a href="/" class="font-mono text-5xl font-bold text-accent">
		&gt;<span class="cursor-blink">_</span>
	</a>

	<div class="flex items-center gap-8">
		<ul class="flex items-center gap-8">
			<li>
				<a
					href="#about"
					class="transition-colors duration-300 {activeSection === 'about'
						? 'text-primary'
						: 'hover:text-primary'}"
				>
					Sobre
				</a>
			</li>
			<li>
				<a
					href="#skills"
					class="transition-colors duration-300 {activeSection === 'skills'
						? 'text-primary'
						: 'hover:text-primary'}"
				>
					Skills
				</a>
			</li>
			<li>
				<a
					href="#projects"
					class="transition-colors duration-300 {activeSection === 'projects'
						? 'text-primary'
						: 'hover:text-primary'}"
				>
					Projetos
				</a>
			</li>
			<li>
				<a
					href="#contact"
					class="transition-colors duration-300 {activeSection === 'contact'
						? 'text-primary'
						: 'hover:text-primary'}"
				>
					Contato
				</a>
			</li>
		</ul>
		<Button
			variant="ghost"
			class="rounded-md border border-primary font-medium text-foreground
           transition-all duration-300 hover:border-accent hover:bg-transparent hover:text-accent"
		>
			<a href="/larissa-alves-cv.pdf" target="_blank">Download CV</a>
		</Button>
	</div>
</nav>

<style>
	.cursor-blink {
		display: inline-block;
		animation: cursor-blink 1s steps(2, start) infinite;
	}

	@keyframes cursor-blink {
		0%,
		50% {
			opacity: 1;
		}
		50.01%,
		100% {
			opacity: 0;
		}
	}
</style>
