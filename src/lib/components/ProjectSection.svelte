<script>
	import ProjectCard from './ProjectCard.svelte';
	import TelaFluxoCaixa from '$lib/assets/images/tela-fluxo-caixa.png';
	import TelaSilvaDiesel from '$lib/assets/images/tela-silva-diesel.png';
	import TelaControleEstoque from '$lib/assets/images/tela-estoque-php.png';
	import TelaNLW from '$lib/assets/images/tela-nlw.jpeg';
	import { Button } from './ui/button';
	import { Github } from 'lucide-svelte';

	const projects = [
		{
			title: 'Fluxo Caixa',
			description:
				'Controle de fluxo de caixa, focado em pequenas empresas e autônomos que precisam acompanhar receitas, despesas e resultado financeiro diário/mensal de forma simples.',
			tags: ['Next.js', 'TypeScript', 'Drizzle ORM', 'Tailwind CSS'],
			image: TelaFluxoCaixa,
			link: 'https://github.com/larissa04alves/fluxo-caixa-sistema/'
		},
		{
			title: 'Site Silva Diesel',
			description:
				' site oficial da Silva Diesel, oferecendo uma interface moderna e responsiva, destacando os serviços especializados e reparos de veículos pesados.',
			tags: ['Svelte', 'Tailwind CSS', 'Vercel'],
			image: TelaSilvaDiesel,
			link: 'https://github.com/larissa04alves/Site-Silva-Diesel'
		},
		{
			title: 'Controle de Estoque',
			description:
				'Sistema completo para gerenciar estoque de produtos, com funcionalidades de cadastro, atualização, remoção e monitoramento em tempo real.',
			tags: ['PHP', 'Xampp', 'PostgreSQL', 'Tailwind CSS'],
			image: TelaControleEstoque,
			link: 'https://github.com/larissa04alves/controle_estoque-php'
		},
		{
			title: 'Salas interativas NLW',
			description:
				'Projeto desenvolvido durante o evento Next Level Week (NLW) da Rocketseat, focado em criar uma aplicação de salas interativas utilizando tecnologias modernas do ecossistema React.',
			tags: [
				'React',
				'NodeJs',
				'Fastify',
				'Drizzle ORM',
				'TanStack Query',
				'TypeScript',
				'Docker',
				'GeminiAPI'
			],
			image: TelaNLW,
			link: 'https://github.com/larissa04alves/web'
		}
	];
</script>

<section class="relative flex w-full flex-col items-center justify-center gap-10 py-30">
	<div class="flex w-full max-w-6xl flex-col items-center gap-2 pb-10 text-center">
		<p class="font-mono text-sm tracking-wider text-primary transition-all duration-700">
			// meus projetos
		</p>
		<h2 class="text-4xl font-bold text-foreground transition-all duration-700 md:text-5xl">
			Trabalhos <span class="text-primary">recentes</span>
		</h2>
		<p class="mx-auto max-w-2xl text-muted-foreground transition-all duration-700">
			Uma seleção dos meus projetos mais recentes, cada um com seus desafios únicos e soluções
			criativas.
		</p>
	</div>

	<div class="grid w-full max-w-6xl gap-8 md:grid-cols-2">
		{#each projects as project, index}
			<ProjectCard {...project} />
		{/each}
	</div>
	<Button
		variant="ghost"
		class="rounded-lg border border-border px-6 py-6 font-medium text-foreground
                 transition-all duration-300 hover:border-primary hover:bg-transparent hover:text-primary"
		><Github /> Ver mais no GitHub</Button
	>
</section>
