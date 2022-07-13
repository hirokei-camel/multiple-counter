<script lang="ts">
  import { countersData } from '../countersData';
  import { operationType } from '../types';
  export let index: number;
  function operateCount(action: operationType): void {
    switch (action) {
      case operationType.Plus:
        $countersData[index].count += 1;
        break;
      case operationType.Minus:
        if ($countersData[index].count <= 0) {
          console.log('カウントの値は負の数にできません');
          break;
        }
        $countersData[index].count -= 1;
        break;
      case operationType.Reset:
        $countersData[index].count = 0;
        break;
    }
    // ------case: using　early return------
    // if (action === operationType.Plus) {
    //   $countersData[index].count += 1;
    //   return;
    // }
    // if (action === operationType.Minus) {
    //   if ($countersData[index].count <= 0) {
    //     console.log('カウントの値は負の数にできません');
    //     return;
    //   }
    //   $countersData[index].count -= 1;
    //   return;
    // }
    // if (action === operationType.Reset) {
    //   $countersData[index].count = 0;
    //   return;
    // }
    // -------------------------------------
  }
</script>

<div>
  <input type="text" bind:value={$countersData[index].title} />

  <span>{$countersData[index].count}</span>
  <button on:click={() => operateCount(operationType.Plus)}>+</button>
  <button on:click={() => operateCount(operationType.Minus)}>-</button>
  <button on:click={() => operateCount(operationType.Reset)}>reset</button>
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
