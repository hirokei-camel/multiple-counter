<script lang="ts">
  import { countersData } from '../countersData';
  // 削除ボタンが押された際に配列の場所を特定するための変数
  export let index: number;
</script>

<div>
  <input type="text" bind:value={$countersData[index].title} />

  <span>{$countersData[index].count}</span>
  <button on:click={() => ($countersData[index].count += 1)}>+</button>
  <button on:click={() => ($countersData[index].count -= 1)}>-</button>
  <button on:click={() => ($countersData[index].count = 0)}>0</button>
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
