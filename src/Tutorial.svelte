<div>
<section style="background: #f4f4f4;">
  <select bind:value={activeTutorial} on:change={() => activeStep = activeTutorial.steps[0]}>
    {#each tutorials as tutorial (tutorial.id)}
      <option value={tutorial}>{tutorial.name}</option>
    {/each}
  </select>
  <h3>Steps</h3>
  <ul> 
  {#each activeTutorial.steps as step}
    <li class:active={activeStep === step} on:click={() => activeStep = step}>
      {step.order}
    </li>
  {/each}
  </ul>
</section>

<section>
<div>
  <button>Prev</button>
  <button>Next</button>
</div>
{#if activeStep}
  <h3>{activeStep.title}</h3>
  <p style="width: 350px; max-width: 400px;">{@html activeStep.content}</p>
  {/if}
</section>
</div>


<script>
  let tutorials = [
    {
      id: "1",
      name: "Hello World",
      steps: [
        {title: "Log Hello World", order: 1, content: "Use console.log()"},
        {title: "Wait for a response...", order: 2, content: "LOL jk"}
      ]
    },
    {
      id: "2",
      name: "Buttons Are Awesome",
      steps: [
        { title: "Make a button", order: 1, content: "Try the button tag?" },
        { title: "Style that button", order: 2, content: "Make sure to override the box-shadow and border" },
    ]}
  ]
  let activeTutorial = tutorials[0];
  let activeStep = activeTutorial.steps[0];
</script>

<style>
div{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
section{
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
h3{padding: .5rem 0;width: 100%; text-align: center;}
ul{padding: 0; margin: 0}
li{
  white-space: nowrap; 
  color: #777; 
  cursor: pointer; 
  list-style: none;
  padding: 1.5rem;
  height: 1rem;
  width: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem auto;
  border-radius: 50%;
  border: 3px solid currentColor;
  font-weight: bold;
  font-size: 1.2rem;
  }
li.active{color: mediumseagreen;font-weight: bold}
	*, *::before, *::after{box-sizing:border-box}
</style>