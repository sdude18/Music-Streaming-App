<script>
  import { Link, Router } from "svelte-navigator";
  import mainStore from "../store.js";
</script>

<nav>
  <div class="padding">
    <div class="logo">
      <h1>Music</h1>
    </div>
    <div class="links">
      <Router>
        <Link class="link" to="/" style="font-size: 1.5rem;"
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
            ><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
              d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
            /></svg
          > Home</Link
        >
        <Link class="link" to="/search" style="font-size: 1.5rem;"
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
            ><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
            /></svg
          > Search</Link
        >
        <!--
          <Link class="link" to="/library" style="font-size: 1.5rem;"
            >Library</Link
          >
        -->
      </Router>
    </div>
  </div>
  {#if $mainStore.songArtwork[$mainStore.songIndex]}
    <img src={$mainStore.songArtwork[$mainStore.songIndex]} alt="Cover Art" />
  {/if}
</nav>

<style scoped>
  nav {
    width: 240px;
    height: calc(100vh - 91px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: black;
    color: white;
    position: fixed;
    top: 0;
  }

  img {
    width: 100%;
  }

  svg {
    fill: white;
    height: 1rem;
  }

  .links,
  .padding {
    display: flex;
    flex-direction: column;
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .padding {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media only screen and (max-width: 1000px) {
    nav {
      width: 210px;
    }
  }

  @media only screen and (max-width: 900px) {
    nav {
      width: 100vw;
      height: 55px;
      top: auto;
      bottom: 0px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .links,
    .padding {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;
    }

    .logo {
      display: none;
    }

    img,
    .logo {
      display: none;
    }
  }

  @media only screen and (max-width: 800px) {
    nav {
      border-radius: 5px;
    }
  }
</style>
