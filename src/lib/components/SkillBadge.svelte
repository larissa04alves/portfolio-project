<script lang>
	let { skill = '', icon = '', delay = 0 } = $props();
</script>

<button
	class="cursor-default rounded-lg border border-border bg-secondary px-4 py-2 font-mono text-sm
         text-foreground transition-all duration-300
         hover:scale-105 hover:border-primary hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20"
>
	<span class="flex justify-center gap-2">
		{#if icon}
			<span class="text-primary">{icon}</span>
		{/if}
		{skill}
	</span>
</button>
