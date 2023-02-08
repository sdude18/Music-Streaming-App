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
    "1652248171",
    "3155776842",
    "1313621735",
    "1111142221",
    "6614423884",
    "1362528775",
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

<h1>Charts</h1>
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
