<script>
	import { Button } from './ui/button';
	import GithubLogo from '$lib/assets/icons/github-logo.webp';
	import LinkedinLogo from '$lib/assets/icons/linkedin-logo.webp';

	const currentYear = new Date().getFullYear();
</script>

<footer class="border-t border-border py-6 md:py-8">
	<div class="mx-auto max-w-6xl px-4 md:px-6">
		<div class="flex flex-col items-center justify-between gap-3 md:flex-row md:gap-4">
			<div class="flex items-center gap-2 text-center text-muted-foreground">
				<span class="font-mono text-xs md:text-sm">
					<span class="text-primary">&lt;</span>Feito com 💜 e muito código<span
						class="text-primary">/&gt;</span
					>
				</span>
			</div>

			<p class="text-center text-xs text-muted-foreground md:text-sm">
				© {currentYear} Larissa Alves. Todos os direitos reservados.
			</p>

			<div class="flex items-center">
				<div>
					<Button
						href="https://github.com/larissa04alves"
						target="_blank"
						variant="ghost"
						class="cursor-pointer hover:bg-transparent"
						><img src={GithubLogo} alt="GitHub Logo" loading="eager" /></Button
					>
				</div>
				<div>
					<Button
						href="https://www.linkedin.com/in/larissa-alvess/"
						target="_blank"
						variant="ghost"
						class="cursor-pointer hover:bg-transparent"
						><img src={LinkedinLogo} alt="LinkedIn Logo" loading="eager" /></Button
					>
				</div>
			</div>
		</div>
	</div>
</footer>
