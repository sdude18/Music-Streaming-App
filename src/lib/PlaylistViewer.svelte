<script>
  import { FastAverageColor } from "fast-average-color";
  import { onMount } from "svelte";
  import Lazy from "svelte-lazy";
  import playingsong from "../store.js";

  const fac = new FastAverageColor();

  var audio = document.getElementById("audio");
  var source = document.getElementById("audioSource");
  export let id;

  onMount(async () => {
    getdata();
  });

  $: mp3preview = [];
  $: songtitles = [];
  $: songcovers = [];
  $: playlisttitle = "";
  $: playlistdescription = "";
  $: playlistimage = "";

  async function getdata() {
    await id;
    var options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "26ed9a7238msh42eb30a06cd1235p174ef8jsnae84630d35a5",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };

    fetch("https://deezerdevs-deezer.p.rapidapi.com/playlist/" + id, options)
      .then((response) => response.json())
      .then((response) => {
        mp3preview = [];
        songtitles = [];
        songcovers = [];
        playlisttitle = "";
        playlistdescription = "";
        playlistimage = "";

        var { description } = response;
        var { title } = response;
        var { picture_xl } = response;

        if (description.length > 10)
          description = description.substring(0, 20) + "...";

        playlistimage = picture_xl;
        playlisttitle = title;
        playlistdescription = description;

        for (let i = 0; i < response.tracks.data.length; i++) {
          var { cover_xl } = response.tracks.data[i].album;
          var { title } = response.tracks.data[i];
          var { preview } = response.tracks.data[i];

          if (title.length > 10) title = title.substring(0, 10) + "...";

          mp3preview.push(preview);
          songtitles.push(title);
          songcovers.push(cover_xl);
        }
      })
      .catch((err) => console.error(err));
  }

  function play(cover, title, preview, index) {
    var color;
    fac.getColorAsync(cover).then((color) => {
      color = color;
      var R = parseInt(color.hex.substring(1, 3), 16);
      var G = parseInt(color.hex.substring(3, 5), 16);
      var B = parseInt(color.hex.substring(5, 7), 16);
      R = parseInt((R * (100 + -60)) / 100);
      G = parseInt((G * (100 + -60)) / 100);
      B = parseInt((B * (100 + -60)) / 100);
      R = R < 255 ? R : 255;
      G = G < 255 ? G : 255;
      B = B < 255 ? B : 255;
      var RR =
        R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
      var GG =
        G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
      var BB =
        B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);
      var colordarken = "#" + RR + GG + BB;
      document.querySelector("footer").style.background = colordarken;
    });

    playingsong.set({
      title: title,
      artwork: cover,
      artist: "",
      color: color,
      songsindex: index,
      songsartwork: songcovers,
      songtitles: songtitles,
      songpreview: mp3preview,
    });

    if (source.src != preview) {
      source.src = preview;
      audio.load();
      audio.play();
    } else if (audio.duration > 0 && !audio.paused) {
      audio.pause();
    } else {
      audio.play();
    }
  }
</script>

<svelte:head>
  <title>{playlisttitle} - {playlistdescription}</title>
</svelte:head>

{#if id == undefined || id == ""}
  <div class="results noterm">
    <h1>No playlist provided</h1>
  </div>
{:else}
  <div class="headergrid">
    <img class="playlistimage" src={playlistimage} alt="playlist image" />
    <div class="innergrid">
      <h1>{playlisttitle}</h1>
      <h2>{playlistdescription}</h2>
    </div>
  </div>
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
              index
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
