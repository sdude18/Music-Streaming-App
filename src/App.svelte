<script>
  import { Router, Route, navigate } from "svelte-navigator";

  import Footer from "./lib/footer.svelte";
  import Sidenav from "./lib/sidenav.svelte";
  import Header from "./lib/header.svelte";
  import Rap from "./lib/rap.svelte";
  import Lofi from "./lib/lofi.svelte";
  import PlaylistViewer from "./lib/playlistViewer.svelte";
  import Search from "./lib/search.svelte";
  import Charts from "./lib/charts.svelte";

  let searchField, width;

  async function search() {
    navigate("/search/" + searchField, { replace: true });
  }
</script>

<Sidenav />
<Footer />
<main>
  {#if width > 1000}
    <Header />
  {/if}
  <Router>
    <div class="content">
      <Route path="/">
        <Rap />
        <Lofi />
        <Charts />
      </Route>
      <Route path="playlist/:query" let:params>
        <PlaylistViewer query={params.query} />
      </Route>
      <Route path="search/*" primary={false}>
        <form on:submit|preventDefault={search}>
          <input
            bind:value={searchField}
            placeholder="Search..."
            on:input={search}
          />
        </form>
        <Route path="/">
          <div class="noTerm">
            <h1>Search for tracks, artists, podcasts, and playlists.</h1>
          </div>
        </Route>
        <Route path=":id" component={Search} />
      </Route>
    </div>
  </Router>
</main>
<svelte:window bind:innerWidth={width} />

<style scoped>
  .noTerm {
    height: calc(100vh - 200px);
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }

  main {
    margin-left: 240px;
    margin-top: 55px;
    margin-bottom: 100px;
  }

  .content {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  form input {
    width: 100%;
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    border-radius: 10px;
    outline: none;
    margin-bottom: 1rem;
    border: none;
  }

  @media only screen and (max-width: 1000px) {
    main {
      margin-left: 210px;
      margin-top: 10px;
      margin-bottom: 100px;
    }

    .content {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }

  @media only screen and (max-width: 900px) {
    main {
      margin-left: 0px;
      margin-top: 10px;
      margin-bottom: 120px;
    }
  }
</style>
