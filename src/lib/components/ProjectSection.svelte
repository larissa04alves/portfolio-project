<script lang="ts">
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';
	import ProjectCard from './ProjectCard.svelte';
	import TelaFluxoCaixa from '$lib/assets/images/tela-fluxo-caixa.png';
	import TelaSilvaDiesel from '$lib/assets/images/tela-silva-diesel.png';
	import TelaControleEstoque from '$lib/assets/images/tela-estoque-php.png';
	import TelaNLW from '$lib/assets/images/tela-nlw.jpeg';
	import { Button } from './ui/button';
	import { Github } from 'lucide-svelte';

	let visible = $state(false);
	let projectsRef = $state<HTMLElement | null>(null);

	const projectData = [
		{
			id: 'fluxo_caixa',
			tags: ['Next.js', 'TypeScript', 'Drizzle ORM', 'Tailwind CSS'],
			image: TelaFluxoCaixa,
			link: 'https://github.com/larissa04alves/fluxo-caixa-sistema/'
		},
		{
			id: 'silva_diesel',
			tags: ['Svelte', 'Tailwind CSS', 'Vercel'],
			image: TelaSilvaDiesel,
			link: 'https://github.com/larissa04alves/Site-Silva-Diesel'
		},
		{
			id: 'estoque',
			tags: ['PHP', 'Xampp', 'PostgreSQL', 'Tailwind CSS'],
			image: TelaControleEstoque,
			link: 'https://github.com/larissa04alves/controle_estoque-php'
		},
		{
			id: 'nlw',
			tags: ['React', 'NodeJs', 'Fastify', 'Drizzle ORM', 'TanStack Query', 'TypeScript', 'Docker', 'GeminiAPI'],
			image: TelaNLW,
			link: 'https://github.com/larissa04alves/web'
		}
	];

	const projects = $derived(
		projectData.map((p) => ({
			title: $_(`projects.${p.id}_title`),
			description: $_(`projects.${p.id}`),
			tags: p.tags,
			image: p.image,
			link: p.link
		}))
	);

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					visible = true;
					observer.disconnect();
				}
			},
			{ threshold: 0.2 }
		);

		if (projectsRef) {
			observer.observe(projectsRef);
		}

		return () => observer.disconnect();
	});
</script>

<section
	id="projects"
	class="relative flex w-full flex-col items-center justify-center gap-8 px-4 py-16 md:gap-10 md:py-30"
	bind:this={projectsRef}
>
	<div
		class="flex w-full max-w-6xl flex-col items-center gap-2 pb-10 text-center transition-all duration-700"
		style:opacity={visible ? 1 : 0}
		style:transform={`translateY(${visible ? '0' : '20px'})`}
	>
		<p class="font-mono text-xs tracking-wider text-primary md:text-sm">{$_('projects.tag')}</p>
		<h2 class="text-3xl font-bold text-foreground md:text-5xl">
			{$_('projects.headline')} <span class="text-primary">{$_('projects.headline_highlight')}</span>
		</h2>
		<p class="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base">
			{$_('projects.description')}
		</p>
	</div>

	<div
		class="grid w-full max-w-6xl gap-6 md:auto-rows-fr md:grid-cols-2 md:gap-8"
		style:opacity={visible ? 1 : 0}
		style:transform={`translateY(${visible ? '0' : '20px'})`}
		style:transition-delay={visible ? '0.05s' : '0s'}
	>
		{#each projects as project, index}
			<div
				class="flex h-full transition-all duration-700"
				style:opacity={visible ? 1 : 0}
				style:transform={`translateY(${visible ? '0' : '20px'})`}
				style:transition-delay={visible ? `${0.1 + index * 0.08}s` : '0s'}
			>
				<ProjectCard {...project} />
			</div>
		{/each}
	</div>

	<Button
		variant="ghost"
		href="https://github.com/larissa04alves"
		target="_blank"
		class="rounded-lg border border-border px-4 py-4 text-sm font-medium text-foreground
                 transition-all duration-300 hover:border-primary hover:bg-transparent hover:text-primary md:px-6 md:py-6 md:text-base"
	>
		<Github /> {$_('projects.cta_github')}
	</Button>
</section>
