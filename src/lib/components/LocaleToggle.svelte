<script lang="ts">
	import { onMount } from 'svelte';
	import { locale } from 'svelte-i18n';
	import { setLocale } from '$lib/i18n';
	import { ToggleGroup, ToggleGroupItem } from '$lib/components/ui/toggle-group';

	let currentLocale = $state('pt');

	onMount(() => {
		const unsubscribe = locale.subscribe((val) => {
			currentLocale = val ?? 'pt';
		});
		return unsubscribe;
	});

	function handleValueChange(val: string) {
		if (val) setLocale(val as 'pt' | 'en');
	}
</script>

<ToggleGroup
	type="single"
	value={currentLocale}
	onValueChange={handleValueChange}
	aria-label="Toggle language"
	class="toggle-pill relative flex cursor-pointer items-center gap-0 rounded-full h-9 border border-primary/30 bg-card p-1 transition-all duration-300 hover:border-primary/60 hover:shadow-md hover:shadow-primary/20"
>
	<!-- Sliding indicator -->
	<div
		class="slide-indicator pointer-events-none absolute top-1 h-[calc(100%-8px)] w-[calc(50%-4px)] rounded-full bg-primary/20 shadow-sm shadow-primary/30 transition-transform duration-300 ease-in-out"
		style="transform: translateX({currentLocale === 'en' ? 'calc(100% + 4px)' : '0'});"
	></div>

	<!-- PT side -->
	<ToggleGroupItem
		value="pt"
		aria-label="Português"
		class="relative z-10 flex select-none items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-xs font-semibold transition-colors duration-200 bg-transparent hover:bg-transparent data-[state=on]:bg-transparent data-[state=on]:text-primary data-[state=off]:text-muted-foreground border-0 shadow-none"
	>
		<span class="text-sm leading-none">🇧🇷</span>
		<span>PT</span>
	</ToggleGroupItem>

	<!-- EN side -->
	<ToggleGroupItem
		value="en"
		aria-label="English"
		class="relative z-10 flex select-none items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-xs font-semibold transition-colors duration-200 bg-transparent hover:bg-transparent data-[state=on]:bg-transparent data-[state=on]:text-primary data-[state=off]:text-muted-foreground border-0 shadow-none"
	>
		<span class="text-sm leading-none">🇺🇸</span>
		<span>EN</span>
	</ToggleGroupItem>
</ToggleGroup>
