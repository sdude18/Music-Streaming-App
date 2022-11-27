<script>
  import PlaylistViewer from "./lib/PlaylistViewer.svelte";
  import Search from "./lib/Search.svelte";
  import { Router, Route, Link, navigate } from "svelte-navigator";
  import Loadable from "svelte-loadable";
  import playingsong from "./store.js";
  import { FastAverageColor } from "fast-average-color";
  const fac = new FastAverageColor();
  import { swipe } from "svelte-gestures";

  let direction;

  function swipedownviewaudio(event) {
    direction = event.detail.direction;
    console.log(direction);
    if (direction == "bottom") {
      viewaudio = false;
    }
  }

  playingsong.subscribe((data) => {});

  let innerWidth;
  let durationcompleted = 0;
  let duration = 0;
  let currentduration = 0;
  let viewaudio = false;
  let SearchContent;

  $: $playingsong, sveltestorechanged();

  $: if (innerWidth > 490) {
    sveltestorechanged();
  }

  function sveltestorechanged() {
    var audio = document.getElementById("audio");
    if ($playingsong.title != null && $playingsong.title != "" && audio) {
      window.myTimer = setInterval(function () {
        duration = audio.duration;
        currentduration = audio.currentTime;
        durationcompleted = (audio.currentTime / audio.duration) * 100;
      }, 1000);
    }
  }

  function pauseaudio() {
    event.cancelBubble = true;
    if (event.stopPropagation) event.stopPropagation();
    if (audio.duration > 0 && !audio.paused) {
      audio.pause();
    } else {
      audio.play();
    }
  }

  $: $playingsong, mediaseassion();

  function mediaseassion() {
    if ("mediaSession" in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: $playingsong.title,
        artist: "",
        album: "",
        artwork: [
          {
            src: $playingsong.artwork,
            type: "image/png",
            sizes: "250x250",
          },
        ],
      });

      navigator.mediaSession.setActionHandler("play", function () {
        audio.play();
      });
      navigator.mediaSession.setActionHandler("pause", function () {
        audio.pause();
      });
      navigator.mediaSession.setActionHandler("seekbackward", function () {
        audio.currentTime = Math.max(audio.currentTime - 5, 0);
      });
      navigator.mediaSession.setActionHandler("seekforward", function () {
        audio.currentTime = Math.max(audio.currentTime + 5, 0);
      });
      navigator.mediaSession.setActionHandler("previoustrack", function () {
        backward();
      });
      navigator.mediaSession.setActionHandler("nexttrack", function () {
        forward();
      });
    }
  }

  $: if (innerWidth > 450) {
    viewaudio = false;
  }

  function changetime() {
    var audio = document.getElementById("audio");
    window.clearInterval(myTimer);
    audio.pause();
    console.log(durationcompleted);
    audio.currentTime = (durationcompleted / 100) * audio.duration;
    audio.play();
    sveltestorechanged();
  }

  function swipefooter() {
    direction = event.detail.direction;
    console.log(direction);
    if (direction == "top") {
      footeropen();
    } else if (direction == "right") {
      backward();
    } else if (direction == "left") {
      forward();
    }
  }

  function footeropen() {
    if (
      $playingsong.artwork.trim().length != 0 &&
      innerWidth < 450 &&
      viewaudio == false
    ) {
      viewaudio = true;
      var color;
      fac.getColorAsync($playingsong.artwork).then((color) => {
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
        document.getElementById("viewaudio").style.background = colordarken;
      });
    } else {
      viewaudio = false;
    }
  }

  async function search() {
    navigate("/search/" + SearchContent);
  }

  function play(cover, title, preview, index) {
    var audio = document.getElementById("audio");
    var source = document.getElementById("audioSource");
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
      songsartwork: $playingsong.songsartwork,
      songtitles: $playingsong.songtitles,
      songpreview: $playingsong.songpreview,
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

  function forward() {
    event.cancelBubble = true;
    if (event.stopPropagation) event.stopPropagation();
    var index = $playingsong.songsindex + 1;
    var cover = $playingsong.songsartwork[index];
    var title = $playingsong.songtitles[index];
    var preview = $playingsong.songpreview[index];
    play(cover, title, preview, index);
    if (viewaudio == true) {
      fac.getColorAsync($playingsong.artwork).then((color) => {
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
        document.getElementById("viewaudio").style.background = colordarken;
      });
    }
  }

  function backward() {
    event.cancelBubble = true;
    if (event.stopPropagation) event.stopPropagation();
    var index = $playingsong.songsindex - 1;
    if (index >= 0) {
      var cover = $playingsong.songsartwork[index];
      var title = $playingsong.songtitles[index];
      var preview = $playingsong.songpreview[index];
      play(cover, title, preview, index);
      if (viewaudio == true) {
        fac.getColorAsync($playingsong.artwork).then((color) => {
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
          document.getElementById("viewaudio").style.background = colordarken;
        });
      }
    }
  }
</script>

{#if viewaudio}
  <div
    class="viewaudio"
    id="viewaudio"
    use:swipe={{
      timeframe: 300,
      minSwipeDistance: 30,
    }}
    on:swipe={swipedownviewaudio}
  >
    <button class="closeviewaudio" on:click={() => (viewaudio = false)}
      ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
        ><path
          d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
        /></svg
      ></button
    >
    <img src={$playingsong.artwork} id="viewaudioimg" />
    <h1>{$playingsong.title}</h1>
    <div class="controlsmobile">
      <p>{currentduration.toFixed(0)}</p>
      <input
        on:mouseup={changetime}
        on:change={changetime}
        type="range"
        min="0"
        max="100"
        bind:value={durationcompleted}
        class="slider"
      />
      <p>{duration.toFixed(0)}</p>
    </div>
    <div class="songmobile">
      <button on:click={backward}
        ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
          ><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
            d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z"
          /></svg
        ></button
      >
      <button on:click={pauseaudio}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
          ><path
            d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
          /></svg
        >
      </button>
      <button on:click={forward}
        ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
          ><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
            d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z"
          /></svg
        ></button
      >
    </div>
  </div>
{/if}
<Router>
  <!--Sidenav-->
  <nav class:displaynone={viewaudio == true} class:sidenav={viewaudio == false}>
    <div class="logo">
      <h1>Music</h1>
    </div>
    <div class="links">
      <Link to="/"
        ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
          ><path
            d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
          /></svg
        >Home</Link
      >
      <Link to="/search"
        ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
          ><path
            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"
          /></svg
        >Search</Link
      >
    </div>
  </nav>
  {#if $playingsong.artwork != "" || innerWidth >= 900}
    <footer
      on:click={footeropen}
      class:displaynone={viewaudio == true}
      use:swipe={{
        timeframe: 300,
        minSwipeDistance: 30,
      }}
      on:swipe={swipefooter}
    >
      <div class="song">
        <button on:click={backward}
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
            ><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
              d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z"
            /></svg
          ></button
        >
        <button on:click={pauseaudio}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
            ><path
              d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
            /></svg
          >
        </button>
        <button on:click={forward}
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
            ><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
              d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z"
            /></svg
          ></button
        >
      </div>
      <div class="controls">
        <p>{currentduration.toFixed(0)}</p>
        <input
          on:mouseup={changetime}
          on:change={changetime}
          type="range"
          min="0"
          max="100"
          bind:value={durationcompleted}
          class="slider"
        />
        <p>{duration.toFixed(0)}</p>
      </div>
      <div class="duration"><h1>{$playingsong.title}</h1></div>
    </footer>
  {/if}
  <!--Main-->
  <main class:displaynone={viewaudio == true}>
    <Route path="/" primary={false}>
      <Loadable loader={() => import("./lib/Home.svelte")} />
    </Route>
    <Route path="playlist/*" primary={false}>
      <Route path="/">
        <Loadable loader={() => import("./lib/Home.svelte")} />
      </Route>
      <Route path=":id" component={PlaylistViewer} />
    </Route>
    <Route path="search/*" primary={false}>
      <div class="header">
        <form on:submit|preventDefault={search}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
            ><path
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"
            /></svg
          >
          <input
            placeholder="Search ..."
            bind:value={SearchContent}
            on:input={search}
          />
        </form>
      </div>
      <Route path="/">
        <Loadable loader={() => import("./lib/Search.svelte")} />
      </Route>
      <Route path=":id" component={Search} />
    </Route>
  </main>
</Router>

<svelte:window bind:innerWidth />

<audio id="audio">
  <source id="audioSource" src="" />
  Your browser does not support the audio format.
</audio>
