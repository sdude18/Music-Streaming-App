<script>
  import { useLocation } from "svelte-navigator";
  const location = useLocation();
  import mainStore from "../store.js";
  export let id;
  $: $location, getdata();
  getdata();

  let songTitles = [];
  let songCovers = [];
  let songArtists = [];
  let mp3Preview = [];

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "26ed9a7238msh42eb30a06cd1235p174ef8jsnae84630d35a5",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  async function getdata() {
    await id;
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + id, options)
      .then((response) => response.json())
      .then((response) => {
        mp3Preview = [];
        songTitles = [];
        songCovers = [];
        songArtists = [];
        for (let i = 0; i < response.data.length; i++) {
          var { preview } = response.data[i];
          var { title_short } = response.data[i];
          var { cover_xl } = response.data[i].album;
          var { name } = response.data[i].artist;

          if (title_short.length > 15)
            title_short = title_short.substring(0, 10) + "...";

          mp3Preview.push(preview);
          songTitles.push(title_short);
          songCovers.push(cover_xl);
          songArtists.push(name);
        }
      })
      .catch((err) => console.error(err));
  }

  function playSong(n) {
    mainStore.set({
      songArtist: songArtists,
      songArtwork: songCovers,
      songTitle: songTitles,
      songPreview: mp3Preview,
      songIndex: n,
    });

    let audio = document.getElementById("audio");
    audio.load();
  }
</script>

<svelte:head>
  <title>Results For {id}</title>
</svelte:head>

<div class="grid">
  {#each songTitles as songtitle, i}
    <div
      class="item"
      on:keydown={() => playSong(i)}
      on:click={() => playSong(i)}
    >
      <img src={songCovers[i]} alt="Cover" />
      <h2>{songTitles[i]}</h2>
    </div>
  {/each}
</div>
