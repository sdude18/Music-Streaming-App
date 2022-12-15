<script>
  import Lazy from "svelte-lazy";
  import { navigate } from "svelte-navigator";

  var playlistsarr = [
    "1677006641",
    "1996494362",
    "6682665064",
    "3411272262",
    "10581717182",
    "10517014662",
    "10335983602",
    "1306085715",
    "1724212365",
    "10709033662",
  ];

  $: songtitles = [];
  $: songcovers = [];
  $: playlistid = [];

  for (let i = 0; i < playlistsarr.length; i++) {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "26ed9a7238msh42eb30a06cd1235p174ef8jsnae84630d35a5",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };

    fetch(
      "https://deezerdevs-deezer.p.rapidapi.com/playlist/" + playlistsarr[i],
      options
    )
      .then((response) => response.json())
      .then((response) => {
        var { title } = response;
        var { picture_medium } = response;
        var { id } = response;

        if (title.length > 10) title = title.substring(0, 10) + "...";

        songtitles.push(title);
        songcovers.push(picture_medium);
        playlistid.push(id);

        songtitles = songtitles;
        songcovers = songcovers;
        playlistid = playlistid;
      })
      .catch((err) => console.error(err));
  }

  async function openplaylist(id) {
    await id;
    navigate("/playlist/" + id, { replace: false });
  }
</script>

<svelte:head>
  <title>Music</title>
</svelte:head>

<h1>Playlists youll love</h1>
<div class="results term">
  {#each songtitles as songtitle, index}
    <div
      class="grid-item"
      on:click={() => openplaylist(playlistid[index])}
      on:keypress={() => openplaylist(playlistid[index])}
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
  {/each}
</div>
