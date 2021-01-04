<script>
  import prettyUrl from './pretty-url.js';
  let name = '';
</script>

<main>
  <input bind:value={name}>
  <h1>Hello {prettyUrl(name)}!</h1>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
