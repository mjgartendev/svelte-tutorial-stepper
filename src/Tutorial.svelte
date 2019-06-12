<div>
<section>
  <h3>Steps</h3> 
  <ol> 
  {#each steps as step}
    <li>{step.title}</li>
  {/each}
  </ol>
</section>
<section>
  <h3>{name}: {activeStep.title}</h3>
  <div>{@html activeStep.content}</div>
</section>
</div>

<script>
  export let steps;
  $: activeStep = steps[0];
  export let name;
</script>

<style>
div{
  display: flex;
}
section{
  border: 1px solid #ccc;
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>