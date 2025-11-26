<script>
	let { code = '', language = 'typescript' } = $props();

	let displayedCode = $state('');
	let currentIndex = $state(0);

	$effect(() => {
		if (currentIndex < code.length) {
			const timer = setTimeout(() => {
				displayedCode = code.slice(0, currentIndex + 1);
				currentIndex++;
			}, 30);
			return () => clearTimeout(timer);
		}
	});
</script>

<div class=" overflow-hidden rounded-xl border border-border bg-card p-4 font-mono text-sm">
	<div class="mb-3 flex items-center gap-2 border-b border-border pb-3">
		<div class="h-3 w-3 rounded-full bg-red-500/80"></div>
		<div class="h-3 w-3 rounded-full bg-yellow-500/80"></div>
		<div class="h-3 w-3 rounded-full bg-green-500/80"></div>
		<span class="ml-2 text-xs text-muted-foreground">{language}</span>
	</div>
	<pre class="whitespace-pre-wrap text-muted-foreground"><code
			>{@html displayedCode}<span class="animate-pulse text-primary">|</span></code
		></pre>
</div>
