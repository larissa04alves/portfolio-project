<script>
	import { ArrowRight } from 'lucide-svelte';
	import { Button } from './ui/button';

	const contactLinks = [
		{
			label: 'Email',
			value: 'alves04.larissa@gmail.com',
			href: 'mailto:alves04.larissa@gmail.com',
			icon: '📧'
		},
		{
			label: 'LinkedIn',
			value: '/in/larissa-alvess',
			href: 'https://linkedin.com/in/larissa-alvess',
			icon: '💼'
		},
		{
			label: 'GitHub',
			value: '@larissa04alves',
			href: 'https://github.com/larissa04alves',
			icon: '🐙'
		}
	];
</script>

<section id="contact" class="flex w-full flex-col items-center justify-center py-20">
	<!--Titulo -->
	<div class="mb-12 flex flex-col gap-4 text-center">
		<p class="font-mono text-sm tracking-wider text-primary transition-all duration-700">
			// vamos conversar
		</p>
		<h2 class="text-4xl font-bold text-foreground transition-all duration-700 md:text-5xl">
			Entre em <span class="text-primary">contato</span>
		</h2>
		<p class="mx-auto max-w-2xl text-muted-foreground transition-all duration-700">
			Tem um projeto em mente ou quer trocar uma ideia? Sinta-se à vontade para me enviar uma
			mensagem
		</p>
	</div>

	<div class="flex w-full max-w-6xl items-stretch gap-8">
		<!-- Formulario de contato -->
		<form
			class="flex w-[45%] flex-col gap-5 rounded-lg border border-border bg-card p-6 shadow-lg shadow-primary/10"
		>
			<div>
				<label for="name" class="mb-2 block text-sm font-medium text-foreground">Nome</label>
				<input
					type="text"
					id="name"
					required
					class="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-foreground
                       transition-all duration-300 placeholder:text-muted-foreground focus:border-primary focus:ring-1
                       focus:ring-primary focus:outline-none"
					placeholder="Seu nome"
				/>
			</div>
			<div>
				<label for="email" class="mb-2 block text-sm font-medium text-foreground">Email</label>
				<input
					type="email"
					id="email"
					required
					class="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-foreground
                       transition-all duration-300 placeholder:text-muted-foreground focus:border-primary focus:ring-1
                       focus:ring-primary focus:outline-none"
					placeholder="seu@email.com"
				/>
			</div>
			<div>
				<label for="message" class="mb-2 block text-sm font-medium text-foreground">Mensagem</label>
				<textarea
					id="message"
					required
					rows="6"
					class="w-full resize-none rounded-lg border border-border bg-secondary px-4 py-3 text-foreground
                       transition-all duration-300 placeholder:text-muted-foreground focus:border-primary focus:ring-1
                       focus:ring-primary focus:outline-none"
					placeholder="Conte-me sobre seu projeto..."
				></textarea>
			</div>
			<Button class="w-full">Enviar mensagem <ArrowRight /></Button>
		</form>

		<!-- Informacoes de contato -->
		<div class="flex w-1/2 flex-col gap-8 transition-all duration-700">
			<div class="flex flex-col gap-6">
				{#each contactLinks as link}
					<a
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
						class="group flex items-center gap-4 rounded-xl border border-border bg-card
                     p-4 transition-all duration-300 hover:border-primary/50"
					>
						<span class="text-2xl">{link.icon}</span>
						<div>
							<p class="text-sm text-muted-foreground">{link.label}</p>
							<p class="text-foreground transition-colors group-hover:text-primary">{link.value}</p>
						</div>
						<ArrowRight
							class="ml-auto h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary"
						/>
					</a>
				{/each}
			</div>

			<!-- Availability Card -->
			<div class="rounded-xl border border-primary/30 bg-card p-6">
				<div class="mb-4 flex items-center gap-3">
					<div class="h-3 w-3 animate-pulse rounded-full bg-green-500"></div>
					<span class="font-medium text-foreground">Disponível para novos projetos</span>
				</div>
				<p class="text-sm text-muted-foreground">
					Atualmente aceito projetos freelance. Vamos criar algo incrível juntos!
				</p>
			</div>
		</div>
	</div>
</section>
