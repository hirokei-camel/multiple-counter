<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  // 新しくカウンターが生成されたときにインデックス番号を付与しておくため。
  export let index: Number;

  let count = 0;
  let title = 'new';

  // ボタンが押されたとき、値の更新と親コンポーネントへの値渡しをする処理群。
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

<style>
  button {
    background-color: #9adcff;
    border: none;
    cursor: pointer;
    outline: none;
    appearance: none;
  }
</style>
