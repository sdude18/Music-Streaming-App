<script>
  import { navigate } from "svelte-navigator";
</script>

<header>
  <div class="links">
    <button on:click={() => navigate(-1)}
      ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
        ><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
          d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
        /></svg
      ></button
    >
    <button on:click={() => navigate(1)}
      ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
        ><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
          d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
        /></svg
      ></button
    >
  </div>
  <!--
    <div class="account">
      <button>Login</button>
    </div>
  -->
</header>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    height: 55px;
    position: fixed;
    z-index: 2;
    background-color: #121212;
    width: calc(100% - 240px);
    top: 0;
  }

  button {
    background-color: #121212;
    border: none;
    color: white;
    font-size: 1.25rem;
  }

  svg {
    height: 15px;
    fill: white;
  }

  @media only screen and (max-width: 1000px) {
    header {
      width: calc(100% - 210px);
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }
</style>
