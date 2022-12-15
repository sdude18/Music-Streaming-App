<script context="module">
  import { register } from "svelte-loadable";

  const HomeLoader = register({
    loader: () => import("./lib/Home.svelte"),
    resolve: () => import("./lib/Home.svelte"),
  });

  const SearchLoader = register({
    loader: () => import("./lib/Search.svelte"),
    resolve: () => import("./lib/Search.svelte"),
  });

  const AccountLoader = register({
    loader: () => import("./lib/Account.svelte"),
    resolve: () => import("./lib/Account.svelte"),
  });

  const PlaylistLoader = register({
    loader: () => import("./lib/PlaylistViewer.svelte"),
    resolve: () => import("./lib/PlaylistViewer.svelte"),
  });
</script>

<script>
  import PlaylistViewer from "./lib/PlaylistViewer.svelte";
  import Search from "./lib/Search.svelte";
  import { Router, Route, Link, navigate } from "svelte-navigator";
  import Loadable from "svelte-loadable";
  import playingsong from "./store.js";
  import { swipe } from "svelte-gestures";
  import { changecolour } from "./lib/Play.js";
  import accountstore from "./accountstore.js";

  async function likesong() {
    if ($accountstore.useremail != "") {
      const { initializeApp } = await import("firebase/app");
      const {
        getFirestore,
        collection,
        addDoc,
        getDocs,
        query,
        where,
        deleteDoc,
      } = await import("firebase/firestore");

      const firebaseConfig = {
        apiKey: "AIzaSyAmDg1h5sJJ4teLVmrA-VYCSpL4QLXE-3Q",
        authDomain: "music-369d7.firebaseapp.com",
        projectId: "music-369d7",
        storageBucket: "music-369d7.appspot.com",
        messagingSenderId: "1098254840614",
        appId: "1:1098254840614:web:e334f9a8d671cfcd54c7e7",
      };

      const firebase = initializeApp(firebaseConfig);
      const firestore = getFirestore(firebase);

      var results = [];
      const citiesRef = collection(firestore, $accountstore.useremail);
      const q = query(
        citiesRef,
        where(
          "preview",
          "==",
          $playingsong.songpreview[$playingsong.songsindex]
        )
      );

      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        const { artist } = doc.data();
        results.push(artist);
      });

      if (results.length < 1) {
        const docRef = await addDoc(
          collection(firestore, $accountstore.useremail),
          {
            user: $accountstore.useremail,
            time: new Date(),
            artwork: $playingsong.artwork,
            title: $playingsong.title,
            artist: $playingsong.artist[$playingsong.songsindex],
            preview: $playingsong.songpreview[$playingsong.songsindex],
          }
        );
      } else {
        querySnapshot.forEach((doc) => {
          deleteDoc(doc.ref);
        });
      }

      event.cancelBubble = true;
      if (event.stopPropagation) event.stopPropagation();
    }

    event.cancelBubble = true;
    if (event.stopPropagation) event.stopPropagation();
  }

  playingsong.subscribe((data) => {});

  let direction;
  let innerWidth;
  let durationcompleted = 0;
  let duration = 0;
  let currentduration = 0;
  let viewaudio = false;
  let SearchContent;
  let mouseDownOnSlider = false;
  let songplaying = true;

  $: console.log(songplaying);

  $: $playingsong, sveltestorechanged();

  $: if (innerWidth > 490) {
    sveltestorechanged();
  }

  function swipedownviewaudio(event) {
    direction = event.detail.direction;
    if (direction == "bottom") {
      viewaudio = false;
    }
  }

  function sveltestorechanged() {
    var audio = document.getElementById("audio");
    if ($playingsong.title != null && $playingsong.title != "" && audio) {
      audio.addEventListener("timeupdate", () => {
        if (!mouseDownOnSlider || innerWidth < 500) {
          if (isNaN(audio.duration)) {
            duration = 0;
          } else {
            duration = audio.duration;
          }

          if (isNaN(audio.currentTime)) {
            currentduration = 0;
          } else {
            currentduration = audio.currentTime;
          }

          if (isNaN((audio.currentTime / audio.duration) * 100)) {
            durationcompleted = 0;
          } else {
            durationcompleted = (audio.currentTime / audio.duration) * 100;
          }
        }
      });
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
        artist: $playingsong.artist[$playingsong.songsindex],
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

  async function changetime() {
    var audio = document.getElementById("audio");
    audio.currentTime = (durationcompleted / 100) * audio.duration;
  }

  function swipefooter() {
    direction = event.detail.direction;
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
      changecolour($playingsong.artwork);
    } else {
      viewaudio = false;
    }
  }

  async function search() {
    navigate("/search/" + SearchContent, { replace: true });
  }

  function play(cover, title, preview, index) {
    var audio = document.getElementById("audio");
    var source = document.getElementById("audioSource");
    changecolour(cover);

    playingsong.set({
      title: title,
      artwork: cover,
      artist: $playingsong.artist,
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
    var artist = $playingsong.artist[index];
    play(cover, title, preview, index);
    if (viewaudio == true) {
      changecolour($playingsong.artwork);
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
        changecolour($playingsong.artwork);
      }
    }
  }

  function share() {
    window.open($playingsong.songpreview[$playingsong.songsindex]);
    pauseaudio();
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
        on:drag={changetime}
        on:click={changetime}
        on:change={changetime}
        on:mouseup={() => {
          mouseDownOnSlider = false;
        }}
        on:mousedown={() => {
          mouseDownOnSlider = true;
        }}
        on:dblclick={changetime}
        type="range"
        min="0"
        max="100"
        bind:value={durationcompleted}
        class="slider"
        step="1"
      />
      <p>{duration.toFixed(0)}</p>
    </div>
    <div class="songmobile">
      <button on:click={likesong}
        ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
          ><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
            d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
          /></svg
        ></button
      >
      <button on:click={backward}
        ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
          ><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
            d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z"
          /></svg
        ></button
      >
      {#if songplaying == false}
        <button on:click={pauseaudio}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
            ><path
              d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
            /></svg
          >
        </button>
      {:else}
        <button on:click={pauseaudio}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
            ><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
              d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"
            /></svg
          >
        </button>
      {/if}
      <button on:click={forward}
        ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
          ><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
            d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z"
          /></svg
        ></button
      >
      <button on:click={share}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
          ><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
            d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"
          /></svg
        >
      </button>
    </div>
  </div>
{/if}
<Router>
  <!--Sidenav-->
  <nav class:displaynone={viewaudio == true} class:sidenav={viewaudio == false}>
    <div class="sidenavtop">
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
        <Link to="/account"
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
            ><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
              d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
            /></svg
          >Account</Link
        >
      </div>
    </div>
    {#if $playingsong.artwork != "" && innerWidth > 900}
      <div class="sidenavimg">
        <img src={$playingsong.artwork} />
      </div>
    {/if}
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
        {#if songplaying == false}
          <button on:click={pauseaudio}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
              ><path
                d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
              /></svg
            >
          </button>
        {:else}
          <button on:click={pauseaudio}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
              ><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
                d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"
              /></svg
            >
          </button>
        {/if}
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
          on:drag={changetime}
          on:click={changetime}
          on:change={changetime}
          on:mouseup={() => {
            mouseDownOnSlider = false;
          }}
          on:mousedown={() => {
            mouseDownOnSlider = true;
          }}
          on:dblclick={changetime}
          type="range"
          min="0"
          max="100"
          bind:value={durationcompleted}
          class="slider"
          step="1"
        />
        <p>{duration.toFixed(0)}</p>
      </div>
      <div class="duration">
        {#if $accountstore.useremail != ""}
          <button on:click={likesong} on:keypress={likesong}
            ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
              ><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
                d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
              /></svg
            ></button
          >
        {/if}
        {#if $playingsong.title != ""}
          <div class="text">
            <h2>{$playingsong.title}</h2>
            <h4>By : {$playingsong.artist[$playingsong.songsindex]}</h4>
          </div>
        {/if}
      </div>
    </footer>
  {/if}
  <!--Main-->
  <main class:displaynone={viewaudio == true}>
    <Route path="/" primary={false}>
      <Loadable loader={HomeLoader}>
        <div slot="loading">Loading...</div>
      </Loadable>
    </Route>
    <Route path="account" primary={false}>
      <Loadable loader={AccountLoader}>
        <div slot="loading">Loading...</div>
      </Loadable>
    </Route>
    <Route path="playlist/*" primary={false}>
      <Route path="/">
        <Loadable loader={HomeLoader}>
          <div slot="loading">Loading...</div>
        </Loadable>
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
        <Loadable loader={SearchLoader}>
          <div slot="loading">Loading...</div>
        </Loadable>
      </Route>
      <Route path=":id" component={Search} />
    </Route>
  </main>
</Router>

<svelte:window bind:innerWidth />

<audio
  id="audio"
  autoPlay
  on:pause={() => {
    songplaying = false;
  }}
  on:play={() => {
    songplaying = true;
  }}
>
  <source id="audioSource" src="" />
  Your browser does not support the audio format.
</audio>
