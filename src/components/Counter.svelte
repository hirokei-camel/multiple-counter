<script lang="ts">
  import { countersData } from '../countersData';
  import type { operationInfo } from '../types';
  export let index: number;
  function operateCount(opt: operationInfo) {
    if (opt === 'plus') {
      $countersData[index].count += 1;
      return;
    }
    if (opt === 'minus') {
      if ($countersData[index].count <= 0) {
        console.log('カウントの値は負の数にできません');
        return;
      }
      $countersData[index].count -= 1;
      return;
    }
    if (opt === 'reset') {
      $countersData[index].count = 0;
      return;
    }

    console.error('演算子が正しくセットされていません');
  }
</script>

<div>
  <input type="text" bind:value={$countersData[index].title} />

  <span>{$countersData[index].count}</span>
  <button on:click={() => operateCount('plus')}>+</button>
  <button on:click={() => operateCount('minus')}>-</button>
  <button on:click={() => operateCount('reset')}>0</button>
  <button
    on:click={() => {
      $countersData.splice(index, 1);
      $countersData = $countersData;
    }}>✖️</button
  >
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
