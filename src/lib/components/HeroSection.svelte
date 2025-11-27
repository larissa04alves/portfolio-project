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
		<div class="flex w-full max-w-6xl flex-col items-center justify-center gap-8 px-4 md:gap-16">
			<div
				class="flex w-full flex-col-reverse items-center justify-center gap-8 md:flex-row md:gap-0"
			>
				<!-- Area texto principal -->
				<div class="flex w-full flex-col gap-4 md:w-1/2 md:gap-6">
					<div class="flex flex-col gap-1">
						<h3 class="font-mono text-sm md:text-base">👋 Olá eu sou</h3>
						<h1 class="flex flex-col text-4xl font-bold md:text-6xl">
							Larissa <span class="text-primary">Alves</span>
						</h1>
						<div class="flex items-center gap-1 font-mono">
							<h1 class="text-xl font-semibold text-primary md:text-2xl">></h1>
							<p class="text-base text-muted-foreground md:text-xl">Fullstack Developer</p>
						</div>
					</div>

					<p class="w-full text-sm md:w-[90%] md:text-base">
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
							class="flex items-center gap-2 rounded-lg bg-primary/90 px-4
                 py-4 text-sm font-medium text-primary-foreground
                 hover:bg-primary hover:shadow-xl hover:shadow-primary/30 md:px-6 md:py-6 md:text-base"
							>Ver projetos <ArrowRight class="h-4 w-4 md:h-6 md:w-6" /></Button
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

				<div class="relative w-full animate-slide-left md:w-1/2">
					<div class="relative z-10 pb-4 md:pb-6">
						<!-- Profile image -->
						<div class="relative mx-auto h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72">
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
								class="absolute -right-1 -bottom-1 animate-float rounded-full border border-primary bg-card px-3 py-1 font-mono text-xs text-primary md:-right-2 md:-bottom-2 md:px-4 md:py-2 md:text-sm"
							>
								&lt;dev/&gt;
							</div>
						</div>
					</div>

					<!-- Code Block -->
					<div
						class="hidden transform transition-transform duration-300 hover:scale-[1.02] md:block"
					>
						<CodeBlock code={codeSnippet} language="typescript" />
					</div>

					<!-- Floating Elements -->
					<div
						class="absolute -top-4 -right-4 h-12 w-12 animate-float rounded-xl border border-primary/30 md:-top-8 md:-right-8 md:h-16 md:w-16"
						style="animation-delay: -2s"
					></div>
					<div
						class="absolute -bottom-2 -left-2 h-6 w-6 animate-float rounded-lg bg-primary/20 md:-bottom-4 md:-left-4 md:h-8 md:w-8"
						style="animation-delay: -4s"
					></div>
				</div>
			</div>

			<!-- Scroll Indicator -->
			<div class="hidden animate-fade-in flex-col items-center gap-2 md:flex">
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
