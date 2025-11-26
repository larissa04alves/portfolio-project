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

<section class="relative flex w-full flex-col items-center justify-center gap-14 py-28">
	<!--Titulo -->
	<div class="flex flex-col gap-4 text-center">
		<p class="font-mono text-sm tracking-wider text-primary transition-all duration-700">
			// minhas skills
		</p>
		<h2 class="text-4xl font-bold text-foreground transition-all duration-700 md:text-5xl">
			Tecnologias que <span class="text-primary">domino</span>
		</h2>
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
