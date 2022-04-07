<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let index: Number;
  export let title: string;

  let count = 0;

  function handleTitle() {
    dispatch('title', { index, title });
  }

  function handlePlus() {
    count += 1;
    dispatch('plus', { index, count });
  }
  function handleMinus() {
    if (count >= 1) {
      count -= 1;
      dispatch('minus', { index, count });
    }
  }
  function handleZero() {
    count = 0;
    dispatch('zero', { index, count });
  }

  function deleteCounter() {
    dispatch('delete', { index });
  }
</script>

<div>
  <input type="text" bind:value={title} on:input={handleTitle} />
  <span>{count}</span>
  <button on:click={handlePlus}>+</button>
  <button on:click={handleMinus}>-</button>
  <button on:click={handleZero}>0</button>
  <button on:click={deleteCounter}>✖️</button>
</div>
