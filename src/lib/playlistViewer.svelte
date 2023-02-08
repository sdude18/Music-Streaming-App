<script>
  import mainStore from "../store.js";

  export let query;

  let playlistCover;
  let playlistDescription;
  let playlistDate;
  let playlistTitle;

  let songTitles = [];
  let songCovers = [];
  let songArtists = [];
  let mp3Preview = [];

  let options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "26ed9a7238msh42eb30a06cd1235p174ef8jsnae84630d35a5",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  fetch("https://deezerdevs-deezer.p.rapidapi.com/playlist/" + query, options)
    .then((response) => response.json())
    .then((response) => {
      let { picture_medium } = response;
      let { description } = response;
      let { creation_date } = response;
      let { title } = response;
      playlistCover = picture_medium;
      playlistDescription = description;
      playlistDate = creation_date;
      playlistTitle = title;

      for (let i = 0; i < response.tracks.data.length; i++) {
        let { cover_xl } = response.tracks.data[i].album;
        let { title } = response.tracks.data[i];
        let { preview } = response.tracks.data[i];
        let { name } = response.tracks.data[i].artist;

        if (title.length > 15) title = title.substring(0, 10) + "...";

        mp3Preview.push(preview);
        songTitles.push(title);
        songCovers.push(cover_xl);
        songArtists.push(name);

        songTitles = songTitles;
        songCovers = songCovers;
        songTitles = songTitles;
        mp3Preview = mp3Preview;
      }
    })
    .catch((err) => console.error(err));

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
  <title>{playlistTitle} - {playlistDescription}</title>
</svelte:head>

<div class="info">
  <div class="cover">
    <img src={playlistCover} alt="Cover" />
  </div>
  <div class="text">
    <h4>Playlist</h4>
    <h1>{playlistTitle}</h1>
    <h4>{playlistDescription}</h4>
    <h4>{playlistDate}</h4>
  </div>
</div>
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

<style scoped>
  .info {
    display: flex;
    align-items: center;
    gap: 3rem;
    height: 30vh;
  }

  .info img {
    height: 25vh;
    aspect-ratio: 1/1;
  }

  @media only screen and (max-width: 600px) {
    .text h4:nth-child(1),
    .text h4:nth-child(3) {
      display: none;
    }

    .info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: fit-content;
      min-height: 25vh;
    }

    .info img {
      height: 15vh;
      aspect-ratio: 1/1;
    }
  }

  @media only screen and (max-width: 450px) {
    .info h1 {
      font-size: 1.25rem;
    }

    .info h4 {
      display: none;
    }

    .info {
      display: flex;
      flex-direction: row;
      min-height: 20vh;
      gap: 0.5rem;
    }
  }
</style>
