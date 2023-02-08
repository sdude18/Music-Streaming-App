<script>
  import { Link } from "svelte-navigator";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "26ed9a7238msh42eb30a06cd1235p174ef8jsnae84630d35a5",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  let lofi = [
    "3338949242",
    "1306085715",
    "8749345882",
    "2994534926",
    "6399372064",
    "9858729782",
  ];

  let songTitles = [];
  let songCovers = [];
  let playlistId = [];

  for (let i = 0; i < lofi.length; i++) {
    fetch(
      "https://deezerdevs-deezer.p.rapidapi.com/playlist/" + lofi[i],
      options
    )
      .then((response) => response.json())
      .then((response) => {
        var { title } = response;
        var { picture_medium } = response;
        var { id } = response;

        if (title.length > 15) title = title.substring(0, 10) + "...";

        songTitles.push(title);
        songCovers.push(picture_medium);
        playlistId.push(id);
        songTitles = songTitles;
        songCovers = songCovers;
        songTitles = songTitles;
      })
      .catch((err) => console.error(err));
  }
</script>

<h1>Lofi</h1>
<div class="grid">
  {#each songTitles as songtitle, i}
    <Link to="/playlist/{playlistId[i]}">
      <div class="item">
        <img src={songCovers[i]} alt="Cover" />
        <h2>{songTitles[i]}</h2>
      </div>
    </Link>
  {/each}
</div>

<style scoped>
  h1 {
    margin: 0;
    margin-top: 0.25rem;
    margin-bottom: 1rem;
  }
</style>
