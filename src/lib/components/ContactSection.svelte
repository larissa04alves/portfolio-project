<script lang="ts">
	import { onMount } from 'svelte';
	import { ArrowRight } from 'lucide-svelte';
	import { Button } from './ui/button';

	let visible = $state(false);
	let contactRef: HTMLElement | null = $state(null);

	const contactLinks = [
		{
			label: 'Email',
			value: 'alves04.larissa@gmail.com',
			href: 'mailto:alves04.larissa@gmail.com',
			icon: '📧'
		},
		{
			label: 'LinkedIn',
			value: '@larissa-alvess',
			href: 'https://linkedin.com/in/larissa-alvess',
			icon: '💼'
		},
		{
			label: 'GitHub',
			value: '@larissa04alves',
			href: 'https://github.com/larissa04alves',
			icon: '🐙'
		},
		{
			label: 'WhatsApp',
			value: 'Vamos conversar!',
			href: 'https://wa.me/5555996913627?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20seu%20site!',
			icon: '📱'
		}
	];

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					visible = true;
					observer.disconnect(); // anima só uma vez
				}
			},
			{ threshold: 0.2 }
		);

		if (contactRef) {
			observer.observe(contactRef);
		}

		return () => observer.disconnect();
	});
</script>

<section
	id="contact"
	class="flex w-full flex-col items-center justify-center px-4 py-16 md:py-20"
	bind:this={contactRef}
>
	<!-- Título -->
	<div
		class="mb-12 flex flex-col gap-4 text-center transition-all duration-700"
		style="opacity: {visible ? 1 : 0}; transform: translateY({visible ? '0' : '20px'})"
	>
		<p class="font-mono text-xs tracking-wider text-primary md:text-sm">// vamos conversar</p>
		<h2 class="text-3xl font-bold text-foreground md:text-5xl">
			Entre em <span class="text-primary">contato</span>
		</h2>
		<p class="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base">
			Tem um projeto em mente ou quer trocar uma ideia? Sinta-se à vontade para me enviar uma
			mensagem.
		</p>
	</div>

	<div
		class="flex w-full flex-col gap-8 transition-all duration-700 md:w-1/2"
		style="opacity: {visible ? 1 : 0}; transform: translateY({visible
			? '0'
			: '20px'}); transition-delay: 0.1s"
	>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
			{#each contactLinks as link, index}
				<a
					href={link.href}
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center gap-3 rounded-xl border border-border bg-card
                     p-3 transition-all duration-300 hover:border-primary/50 md:gap-4 md:p-4"
					style="opacity: {visible ? 1 : 0}; transform: translateY({visible
						? '0'
						: '20px'}); transition-delay: {visible ? `${0.15 + index * 0.07}s` : '0s'}"
				>
					<span class="text-xl md:text-2xl">{link.icon}</span>
					<div>
						<p class="text-xs text-muted-foreground md:text-sm">{link.label}</p>
						<p
							class="text-sm text-foreground transition-colors group-hover:text-primary md:text-base"
						>
							{link.value}
						</p>
					</div>
					<ArrowRight
						class="ml-auto h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary"
					/>
				</a>
			{/each}
		</div>

		<!-- Availability Card -->
		<div
			class="rounded-xl border border-primary/30 bg-card p-4 transition-all duration-700 md:p-6"
			style="opacity: {visible ? 1 : 0}; transform: translateY({visible
				? '0'
				: '20px'}); transition-delay: 0.35s"
		>
			<div class="mb-3 flex items-center gap-2 md:mb-4 md:gap-3">
				<div class="h-2 w-2 animate-pulse rounded-full bg-green-500 md:h-3 md:w-3"></div>
				<span class="text-sm font-medium text-foreground md:text-base"
					>Disponível para novos projetos</span
				>
			</div>
			<p class="text-xs text-muted-foreground md:text-sm">
				Atualmente aceito projetos freelance. Vamos conversar sobre o que você precisa.
			</p>
		</div>
	</div>
</section>
