<script lang="ts">
  import { onDestroy } from 'svelte';
  import Counter from './components/Counter.svelte';
  import { countersData } from './countersData';

  // カウンターの状態が格納される配列(store)
  let counters;

  const unsubscribe = countersData.subscribe((value) => {
    counters = value;
  });

  onDestroy(unsubscribe);
  // counters[counters.length - 1].index;
  // カウンターコンポーネントを作成、削除するための処理群。
  function addNewCounter() {
    let lastIndex =
      counters.length == 0 ? 0 : counters[counters.length - 1].index + 1;
    counters = [
      ...counters,
      {
        index: lastIndex,
        count: 0,
        title: 'new',
      },
    ];
  }
  function deleteCounter(event) {
    counters.splice(event.detail.index, 1);
    counters = counters;
  }

  // 値の更新がある都度に、合計値とタイトル列挙を更新。
  $: total = counters.reduce((sum, item) => {
    return sum + item.count;
  }, 0);

  $: titleList = counters.map((x) => {
    return x.title;
  });
</script>

<main>
  <h1>Multiple Counter</h1>
  {#each counters as counter, index (counter.index)}
    <Counter
      {index}
      bind:count={counters[index].count}
      bind:title={counters[index].title}
      on:delete={deleteCounter}
    />
  {/each}
  <button on:click={addNewCounter}>New Counter</button>
  <p>title list: {titleList}</p>
  <p>sum of count: {total}</p>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  button {
    background-color: #fff89a;
    border: none;
    cursor: pointer;
    outline: none;
    appearance: none;
  }

  h1 {
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
