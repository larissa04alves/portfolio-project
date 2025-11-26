<script>
	let { title = '', description = '', tags = [], image = '', link = '#', delay = 0 } = $props();
</script>

<a
	href={link}
	target="_blank"
	rel="noopener nore ferrer"
	class="block overflow-hidden rounded-xl border border-border bg-card
         transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
>
	<div class="relative h-48 overflow-hidden bg-secondary">
		<img
			src={image || '/placeholder.svg'}
			alt={title}
			class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
		/>
		<div
			class="absolute inset-0 bg-linear-to-b from-card via-transparent to-transparent opacity-60"
		></div>
		<div
			class="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-background/80 px-3 py-1 font-mono text-xs text-primary backdrop-blur-sm"
		>
			<svg class="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
				/>
			</svg>
			Ver projeto
		</div>
	</div>
	<div class="p-6">
		<h3
			class="mb-2 text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary"
		>
			{title}
		</h3>
		<p class="mb-4 text-sm leading-relaxed text-muted-foreground">
			{description}
		</p>
		<div class="flex flex-wrap gap-2">
			{#each tags as tag}
				<span class="rounded-md bg-secondary px-2 py-1 font-mono text-xs text-muted-foreground">
					{tag}
				</span>
			{/each}
		</div>
	</div>
</a>
