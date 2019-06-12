<header>
	<select bind:value={activeTutorial}>
		{#each tutorials as tutorial (tutorial.id)}
		<option value={tutorial}>{tutorial.name}</option>
		{/each}
	</select>
	<nav>
		<a href="dashboard">Dashboard</a>
		<a href="tutorials">Tutorials</a>
	</nav>
</header>
<div>
	<Tutorial {...activeTutorial}/>
	<Editor />
</div>
<footer>
	<button>Previous</button>
	<button>Next</button>
</footer>

<script>
	import Editor from './Editor.svelte'
	import Tutorial from './Tutorial.svelte'
	export let tutorials;
	let activeTutorial = tutorials[0]
</script>

<style>
	header {
		background: #f1f1f1;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: .25rem 1rem;
	}
	nav {
		display: flex;
	}
	a{
		padding: .25rem 1rem;
	}
	div{
		display: grid;
		grid-template-columns: auto 1fr;
		height: 100%;
		width: 100%;
	}
	*, *::before, *::after{box-sizing:border-box}
</style>