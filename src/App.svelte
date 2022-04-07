<script lang="ts">
  import Counter from './Counter.svelte';
  let index = 0;

  // カウンターの状態が格納される配列
  let counters = [
    {
      index: 0,
      count: 0,
      title: 'new',
    },
  ];

  // 子コンポーネントから渡された値を配列に反映させる処理群
  function addNewCounter() {
    index += 1;
    counters = [...counters, { index, count: 0, title: 'new' }];
  }
  function deleteCounter(event) {
    counters.splice(event.detail.index, 1);
    counters = counters;
  }
  function plus(event) {
    counters[event.detail.index].count = event.detail.count;
  }
  function minus(event) {
    counters[event.detail.index].count = event.detail.count;
  }
  function zero(event) {
    counters[event.detail.index].count = event.detail.count;
  }
  function updateTitle(event) {
    counters[event.detail.index].title = event.detail.title;
  }

  // 値の更新がある都度に合計値とタイトルリストを更新
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
      on:plus={plus}
      on:minus={minus}
      on:zero={zero}
      on:delete={deleteCounter}
      on:title={updateTitle}
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
