<script lang="ts">
	import BackgroundElements from '$lib/components/background/BackgroundElements.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { ArrowBigLeft, ArrowRight } from 'lucide-svelte';
</script>

<section>
	<BackgroundElements>
		<div class="flex flex-col gap-6">
			<div class="flex flex-col gap-1">
				<h3 class="font-mono">👋 Olá eu sou</h3>
				<h1 class="flex flex-col text-6xl font-bold">
					Larissa <span class="text-primary">Alves</span>
				</h1>
				<div class="flex items-center gap-1 font-mono">
					<h1 class="text-2xl font-semibold text-primary">></h1>
					<p class="text-xl text-muted-foreground">Fullstack Developer</p>
				</div>
			</div>

			<p class="w-1/2">
				Transformo ideias em experiências digitais extraordinárias. Especializada em criar
				aplicações web modernas, performáticas e com design impactante.
			</p>

			<div class="flex gap-4">
				<Button
					variant="ghost"
					class="flex items-center gap-2 rounded-lg bg-primary px-6
                 py-6 font-medium text-primary-foreground
                 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
					>Ver projetos <ArrowRight /></Button
				>

				<Button
					variant="ghost"
					class="rounded-lg border border-border px-6 py-6 font-medium text-foreground
                 transition-all duration-300 hover:border-primary hover:bg-transparent hover:text-primary"
				>
					Fale comigo
				</Button>
			</div>
		</div>
	</BackgroundElements>
</section>
