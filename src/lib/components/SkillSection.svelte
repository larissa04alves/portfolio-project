<script lang="ts">
	import SkillBadge from './SkillBadge.svelte';

	const skillCategories = [
		{
			title: 'Frontend',
			icon: '🎨',
			skills: ['React', 'Svelte', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS']
		},
		{
			title: 'Backend',
			icon: '⚙️',
			skills: ['Node.js', 'Java', 'Python', 'PostgreSQL', 'MongoDB', 'Spring Framework', 'PHP']
		},
		{
			title: 'DevOps & Tools',
			icon: '🛠️',
			skills: ['Git', 'Docker', 'PowerBI', 'Linux', 'Vitest', 'AWS']
		}
	];
</script>

<section class="relative flex w-full flex-col items-center justify-center gap-10 py-20">
	<!--Titulo -->
	<div class="mb-8 flex flex-col items-center gap-3 font-mono">
		<h3 class="font-semibold text-primary">// minhas skills</h3>
		<h1 class="text-4xl font-bold">Tecnologias que <span class="text-primary">domino</span></h1>
	</div>

	<!-- Skill cards -->
	<div class="flex w-full max-w-6xl items-stretch gap-4">
		{#each skillCategories as category, categoryIndex}
			<div
				class="flex-1 items-center rounded-xl border border-border bg-card p-6 transition-all duration-500 hover:border-primary/50"
			>
				<div class="mb-6 flex items-center gap-3">
					<span class="text-2xl">{category.icon}</span>
					<h3 class="text-xl font-semibold text-foreground">{category.title}</h3>
				</div>
				<div class="flex flex-wrap gap-2">
					{#each category.skills as skill, skillIndex}
						<SkillBadge {skill} />
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>
