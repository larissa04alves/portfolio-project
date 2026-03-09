<script lang="ts">
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';

	let visible = $state(false);
	let aboutRef = $state<HTMLElement | null>(null);

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

		if (aboutRef) {
			observer.observe(aboutRef);
		}

		return () => observer.disconnect();
	});
</script>

<section
	id="about"
	class="relative flex w-full flex-col items-center justify-center gap-6 px-4 py-8 md:flex-row md:gap-0 md:py-32"
	bind:this={aboutRef}
>
	<div
		class="flex w-full flex-col gap-6 transition-all duration-700 md:w-1/3"
		style="
      opacity: {visible ? 1 : 0};
      transform: translateY({visible ? '0' : '20px'});
    "
	>
		<div class="flex flex-col gap-4">
			<h3 class="font-mono text-sm text-primary md:text-base">{$_('about.tag')}</h3>
			<h1 class="flex flex-col font-mono text-2xl font-bold md:text-4xl">
				{$_('about.headline')} <span class="text-primary">{$_('about.headline_highlight')}</span>
			</h1>
		</div>
		<div class="about-text flex w-full flex-col gap-6 text-sm text-muted-foreground md:w-[85%] md:text-base">
			<p>{@html $_('about.para1')}</p>
			<p>{@html $_('about.para2')}</p>
		</div>
	</div>

	<div
		class="relative w-full transition-all duration-700 md:w-1/3"
		style="
      opacity: {visible ? 1 : 0};
      transform: translateX({visible ? '0' : '30px'});
      transition-delay: 0.15s;
    "
	>
		<div class="relative overflow-hidden rounded-2xl border border-border bg-card p-4 md:p-8">
			<!-- Terminal Header -->
			<div class="mb-6 flex items-center gap-2">
				<div class="h-3 w-3 rounded-full bg-red-500"></div>
				<div class="h-3 w-3 rounded-full bg-yellow-500"></div>
				<div class="h-3 w-3 rounded-full bg-green-500"></div>
				<span class="ml-3 font-mono text-sm text-muted-foreground">{$_('about.terminal_path')}</span>
			</div>

			<!-- Terminal Content -->
			<div class="space-y-3 font-mono text-sm">
				<p><span class="text-primary">$</span> {$_('about.terminal_cmd1')}</p>
				<div class="space-y-1 pl-4 text-muted-foreground">
					<p>{$_('about.terminal_interest1')}</p>
					<p>{$_('about.terminal_interest2')}</p>
					<p>{$_('about.terminal_interest3')}</p>
					<p>{$_('about.terminal_interest4')}</p>
					<p>{$_('about.terminal_interest5')}</p>
				</div>
				<p class="pt-4"><span class="text-primary">$</span> {$_('about.terminal_cmd2')}</p>
				<p class="pl-4 text-muted-foreground">
					{$_('about.terminal_output')}
				</p>
				<p class="pt-4">
					<span class="text-primary">$</span>
					<span class="animate-pulse">_</span>
				</p>
			</div>

			<!-- Decorative -->
			<div class="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl"></div>
		</div>
	</div>
</section>

<style>
	.about-text :global(strong) {
		font-weight: 600;
		color: var(--color-primary);
	}
</style>
