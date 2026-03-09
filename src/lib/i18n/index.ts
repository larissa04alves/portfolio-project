import { browser } from '$app/environment';
import { init, register, getLocaleFromNavigator, locale } from 'svelte-i18n';

export const LOCALE_KEY = 'portfolio-locale';

register('pt', () => import('./pt.json'));
register('en', () => import('./en.json'));

export function setupI18n(): void {
	const savedLocale = browser ? localStorage.getItem(LOCALE_KEY) : null;
	const navigatorLocale = browser ? getLocaleFromNavigator() : null;
	const raw = savedLocale ?? navigatorLocale ?? 'pt';
	const initialLocale: 'pt' | 'en' = raw.startsWith('en') ? 'en' : 'pt';

	init({
		fallbackLocale: 'pt',
		initialLocale
	});
}

export function setLocale(lang: 'pt' | 'en'): void {
	locale.set(lang);
	if (browser) {
		localStorage.setItem(LOCALE_KEY, lang);
	}
}
