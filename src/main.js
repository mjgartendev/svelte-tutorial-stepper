import App from './App.svelte';
import tutorials from './tutorials'
const app = new App({
	target: document.body,
	props: {
		tutorials: tutorials
	}
});

export default app;