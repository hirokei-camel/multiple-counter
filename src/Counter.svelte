<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  // 削除ボタンが押された際に配列の場所を特定するための変数
  export let index: number;

  export let count: number;
  export let title: string;

  // 数値が更新された際の処理。
  const calc = (operator: string) => {
    switch (operator) {
      case 'plus':
        count += 1;
        break;
      case 'minus':
        if (count >= 1) {
          count -= 1;
        }
        break;
      case 'zero':
        count = 0;
        break;
    }
  };

  const deleteCounter = () => {
    dispatch('delete', { index });
  };
</script>

<div>
  <input type="text" bind:value={title} />

  <span>{count}</span>
  <button on:click={() => calc('plus')}>+</button>
  <button on:click={() => calc('minus')}>-</button>
  <button on:click={() => calc('zero')}>0</button>
  <button on:click={deleteCounter}>✖️</button>
</div>

<style>
  button {
    background-color: #9adcff;
    border: none;
    cursor: pointer;
    outline: none;
    appearance: none;
  }
</style>
