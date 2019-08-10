<div>
	<Tutorial {tutorials}/>
	<Editor />
</div>

<script>
	import Editor from './Editor.svelte'
	import Tutorial from './Tutorial.svelte'
	export let tutorials;
</script>

<style>
	div{
		display: grid;
		grid-template-columns: 1fr 4fr;
		height: 100vh;
		width: 100vw;
	}
	*, *::before, *::after{box-sizing:border-box}
</style>