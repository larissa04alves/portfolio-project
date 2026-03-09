<script lang="ts">
	import { onMount } from 'svelte';
	import { locale } from 'svelte-i18n';
	import { setLocale } from '$lib/i18n';

	let currentLocale = $state('pt');

	onMount(() => {
		const unsubscribe = locale.subscribe((val) => {
			currentLocale = val ?? 'pt';
		});
		return unsubscribe;
	});

	function toggle() {
		setLocale(currentLocale === 'pt' ? 'en' : 'pt');
	}
</script>

<button
	onclick={toggle}
	aria-label="Toggle language"
	class="toggle-pill relative flex cursor-pointer items-center rounded-full border border-primary/30 bg-card p-1 transition-all duration-300 hover:border-primary/60 hover:shadow-md hover:shadow-primary/20"
>
	<!-- Sliding indicator -->
	<div
		class="slide-indicator absolute top-1 h-[calc(100%-8px)] w-[calc(50%-4px)] rounded-full bg-primary/20 shadow-sm shadow-primary/30 transition-transform duration-300 ease-in-out"
		style="transform: translateX({currentLocale === 'en' ? 'calc(100% + 4px)' : '0'});"
	></div>

	<!-- PT side -->
	<span
		class="relative z-10 flex select-none items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-xs font-semibold transition-colors duration-200 {currentLocale ===
		'pt'
			? 'text-primary'
			: 'text-muted-foreground'}"
	>
		<span class="text-sm leading-none">🇧🇷</span>
		<span>PT</span>
	</span>

	<!-- EN side -->
	<span
		class="relative z-10 flex select-none items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-xs font-semibold transition-colors duration-200 {currentLocale ===
		'en'
			? 'text-primary'
			: 'text-muted-foreground'}"
	>
		<span class="text-sm leading-none">🇺🇸</span>
		<span>EN</span>
	</span>
</button>
