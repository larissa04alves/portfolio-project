<script lang="ts">
	import BackgroundElements from '$lib/components/background/BackgroundElements.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { ArrowRight } from 'lucide-svelte';
	import GithubLogo from '$lib/assets/icons/github-logo.webp';
	import LinkedinLogo from '$lib/assets/icons/linkedin-logo.webp';
	import InstagramLogo from '$lib/assets/icons/instagram-logo.webp';
	import perfilImage from '$lib/assets/images/perfil-image.webp';
	import CodeBlock from './CodeBlock.svelte';

	const codeSnippet = `const developer = {
  name: "Larissa Alves",
  role: "Fullstack Developer",
  skills: ["React", "Svelte", "TypeScript", "Java", "Python"],

  buildUsefulThings() {
    return problems.map((p) => solve(p));
  }
};`;
</script>

<section class="flex flex-col">
	<BackgroundElements>
		<div class="flex w-full max-w-6xl flex-col items-center justify-center gap-16">
			<div class="flex w-full items-center justify-center">
				<!-- Area texto principal -->
				<div class="flex w-1/2 flex-col gap-6">
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

					<p class="w-[90%]">
						Desenvolvo aplicações modernas com foco em <span class="font-semibold text-primary"
							>performance</span
						>
						e <span class="font-semibold text-primary">usabilidade</span>, oferecendo experiências
						mais intuitivas e funcionais.
					</p>

					<!-- Area botoes -->
					<div class="flex gap-4">
						<Button
							href="#projects"
							variant="ghost"
							class="flex items-center gap-2 rounded-lg bg-primary/90 px-6
                 py-6 font-medium text-primary-foreground
                 hover:bg-primary hover:shadow-xl hover:shadow-primary/30"
							>Ver projetos <ArrowRight /></Button
						>
					</div>
					<!-- Area redes sociais -->
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
						<div>
							<Button
								href="https://www.instagram.com/_alvesslari/ "
								target="_blank"
								variant="ghost"
								class="cursor-pointer hover:bg-transparent"
								><img src={InstagramLogo} alt="Instagram Logo" loading="eager" /></Button
							>
						</div>
					</div>
				</div>

				<div class="relative w-1/2 animate-slide-left">
					<div class="relative z-10 pb-6">
						<!-- Profile image -->
						<div class="relative mx-auto h-64 w-64 lg:h-72 lg:w-72">
							<div
								class="absolute inset-0 animate-pulse-glow rounded-full bg-primary/30 blur-2xl"
							></div>
							<div
								class="relative h-full w-full overflow-hidden rounded-full border-2 border-primary/50 bg-card"
							>
								<img src={perfilImage} alt="Foto de perfil" class="h-full w-full object-cover" />
							</div>

							<!-- Floating Badge -->
							<div
								class="absolute -right-2 -bottom-2 animate-float rounded-full border border-primary bg-card px-4 py-2 font-mono text-sm text-primary"
							>
								&lt;dev/&gt;
							</div>
						</div>
					</div>

					<!-- Code Block -->
					<div class="transform transition-transform duration-300 hover:scale-[1.02]">
						<CodeBlock code={codeSnippet} language="typescript" />
					</div>

					<!-- Floating Elements -->
					<div
						class="absolute -top-8 -right-8 h-16 w-16 animate-float rounded-xl border border-primary/30"
						style="animation-delay: -2s"
					></div>
					<div
						class="absolute -bottom-4 -left-4 h-8 w-8 animate-float rounded-lg bg-primary/20"
						style="animation-delay: -4s"
					></div>
				</div>
			</div>

			<!-- Scroll Indicator -->
			<div class="flex animate-fade-in flex-col items-center gap-2">
				<span class="font-mono text-xs text-muted-foreground">scroll</span>
				<div
					class="flex h-8 w-5 justify-center rounded-full border border-muted-foreground/50 pt-1"
				>
					<div class="h-2 w-1 animate-bounce rounded-full bg-primary"></div>
				</div>
			</div>
		</div>
	</BackgroundElements>
</section>
