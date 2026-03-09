<script lang="ts">
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';
	import SkillBadge from './SkillBadge.svelte';

	let visible = $state(false);
	let skillsRef = $state<HTMLElement | null>(null);

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

		if (skillsRef) {
			observer.observe(skillsRef);
		}

		return () => observer.disconnect();
	});
</script>

<section
	id="skills"
	class="relative flex w-full flex-col items-center justify-center gap-8 px-4 py-16 md:gap-14 md:py-20"
	bind:this={skillsRef}
>
	<!-- Title -->
	<div
		class="flex flex-col gap-4 text-center transition-all duration-700"
		style="opacity: {visible ? 1 : 0}; transform: translateY({visible ? '0' : '20px'})"
	>
		<p class="font-mono text-xs tracking-wider text-primary md:text-sm">{$_('skills.tag')}</p>
		<h2 class="text-3xl font-bold text-foreground md:text-5xl">
			{$_('skills.headline')} <span class="text-primary">{$_('skills.headline_highlight')}</span>
		</h2>
	</div>

	<!-- Skill cards -->
	<div
		class="flex w-full max-w-6xl flex-col items-stretch gap-4 transition-all duration-700 md:flex-row"
		style="opacity: {visible ? 1 : 0}; transform: translateY({visible
			? '0'
			: '20px'}); transition-delay: 0.1s"
	>
		{#each skillCategories as category, categoryIndex}
			<div
				class="flex-1 items-center rounded-xl border border-border bg-card p-4 transition-all duration-500 hover:border-primary/50 md:p-6"
				style="
					opacity: {visible ? 1 : 0};
					transform: translateY({visible ? '0' : '20px'});
					transition-delay: {visible ? `${0.15 + categoryIndex * 0.1}s` : '0s'};
				"
			>
				<div class="mb-4 flex items-center gap-3 md:mb-6">
					<span class="text-xl md:text-2xl">{category.icon}</span>
					<h3 class="text-lg font-semibold text-foreground md:text-xl">{category.title}</h3>
				</div>
				<div class="flex flex-wrap gap-2">
					{#each category.skills as skill}
						<SkillBadge {skill} />
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>
