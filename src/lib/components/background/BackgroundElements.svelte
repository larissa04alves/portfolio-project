<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();

	let mouseX = $state(0);
	let mouseY = $state(0);

	const handleMouseMove = (e: MouseEvent) => {
		mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
		mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
	};
</script>

<div
	class="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
	onmousemove={handleMouseMove}
	role="presentation"
>
	<div class="absolute inset-0 overflow-hidden">
		<div
			class="absolute top-1/4 -left-20 h-72 w-72 animate-float rounded-full bg-primary/20 blur-3xl"
			style="transform: translate({mouseX * 0.5}px, {mouseY * 0.5}px)"
		></div>
		<div
			class="absolute -right-20 bottom-1/4 h-96 w-96 animate-float rounded-full bg-primary/10 blur-3xl"
			style="animation-delay: -3s; transform: translate({mouseX * -0.3}px, {mouseY * -0.3}px)"
		></div>

		<div
			class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[50px_50px]"
		></div>
	</div>

	<div class="relative z-10">
		{@render children()}
	</div>
</div>
