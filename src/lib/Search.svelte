<script>
  import { useLocation } from "svelte-navigator";
  import Lazy from "svelte-lazy";

  import { play } from "./Play.js";

  export let id;

  const location = useLocation();

  $: $location, getdata();

  $: mp3preview = [];
  $: songtitles = [];
  $: songcovers = [];
  $: songartists = [];

  async function getdata() {
    await id;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "26ed9a7238msh42eb30a06cd1235p174ef8jsnae84630d35a5",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };

    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + id, options)
      .then((response) => response.json())
      .then((response) => {
        mp3preview = [];
        songtitles = [];
        songcovers = [];
        songartists = [];
        for (let i = 0; i < response.data.length; i++) {
          var { preview } = response.data[i];
          var { title_short } = response.data[i];
          var { cover_xl } = response.data[i].album;
          var { name } = response.data[i].artist;

          if (title_short.length > 10)
            title_short = title_short.substring(0, 10) + "...";
          if (name.length > 10) name = name.substring(0, 10) + "...";

          mp3preview.push(preview);
          songtitles.push(title_short);
          songcovers.push(cover_xl);
          songartists.push(name);
        }
      })
      .catch((err) => console.error(err));
  }
</script>

<svelte:head>
  <title>Results For {id}</title>
</svelte:head>

{#if id == undefined || id == ""}
  <div class="results noterm">
    <h1>Search for tracks, artists, podcasts, and playlists.</h1>
  </div>
{:else}
  <h1 class="margintop50">Search results for "{id}"</h1>
  <div class="results term">
    {#each mp3preview as preview, index}
      <Lazy offset={10}>
        <div
          class="grid-item"
          on:click={() =>
            play(
              songcovers[index],
              songtitles[index],
              mp3preview[index],
              index,
              songcovers,
              songtitles,
              mp3preview,
              songartists
            )}
          on:keypress={() =>
            play(
              songcovers[index],
              songtitles[index],
              mp3preview[index],
              index,
              songcovers,
              songtitles,
              mp3preview,
              songartists
            )}
        >
          <div class="container">
            <Lazy offset={10}>
              <img
                src={songcovers[index]}
                alt={songcovers[index]}
                style="width:100%;"
              />
            </Lazy>
            <div class="bottom-left">
              <button
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <h1 style="text-align: center;">{songtitles[index]}</h1>
        </div>
      </Lazy>
    {/each}
  </div>
{/if}
