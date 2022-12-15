<script>
  import Lazy from "svelte-lazy";
  import { play } from "./Play.js";
  import accountstore from "../accountstore.js";
  import { initializeApp } from "firebase/app";
  import {
    getFirestore,
    collection,
    getDocs,
    onSnapshot,
    query,
  } from "firebase/firestore";

  import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

  const firebaseConfig = {
    apiKey: "AIzaSyAmDg1h5sJJ4teLVmrA-VYCSpL4QLXE-3Q",
    authDomain: "music-369d7.firebaseapp.com",
    projectId: "music-369d7",
    storageBucket: "music-369d7.appspot.com",
    messagingSenderId: "1098254840614",
    appId: "1:1098254840614:web:e334f9a8d671cfcd54c7e7",
  };

  const firebase = initializeApp(firebaseConfig);
  const auth = getAuth(firebase);
  const provider = new GoogleAuthProvider();
  const firestore = getFirestore(firebase);

  var LoggedIn = false;
  var user;
  var username;
  var userimg;
  var useremail;

  $: mp3preview = [];
  $: songtitles = [];
  $: songcovers = [];
  $: songartists = [];

  function SignIn() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        user = result.user;
        LoggedIn = true;
        username = user.displayName;
        userimg = user.photoURL;
        useremail = user.email;
        accountstore.set({
          username: username,
          userimg: userimg,
          useremail: useremail,
        });
        GetMessages();
      })
      .catch((error) => {
        LoggedIn = false;
      });
  }

  async function SignOut() {
    const { signOut } = await import("firebase/auth");
    mp3preview = [];
    songtitles = [];
    songcovers = [];
    songartists = [];
    signOut(auth)
      .then(() => {
        LoggedIn = false;
      })
      .catch((error) => {
        LoggedIn = false;
      });
  }

  onSnapshot(collection(firestore, "Messages"), () => {
    GetMessages();
  });

  GetMessages();
  async function GetMessages() {
    if (mp3preview.length != 0) {
      mp3preview = [];
      songtitles = [];
      songcovers = [];
      songartists = [];
    }
    const q = query(collection(firestore, $accountstore.useremail));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const { artist } = doc.data();
      const { artwork } = doc.data();
      const { preview } = doc.data();
      const { title } = doc.data();

      mp3preview.push(preview);
      songtitles.push(title);
      songcovers.push(artwork);
      songartists.push(artist);

      mp3preview = mp3preview;
      songtitles = songtitles;
      songcovers = songcovers;
      songartists = songartists;
    });
  }

  auth.onAuthStateChanged(function (user) {
    if (user && $accountstore.useremail != "") {
      LoggedIn = true;
    } else {
      LoggedIn = false;
    }
  });
</script>

{#if LoggedIn == false}
  <div class="results noterm">
    <h1>Login In To Save Songs To Your Library</h1>
    <button on:click={SignIn} class="loginbtn"
      ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"
        ><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
          d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
        /></svg
      > Login With Google</button
    >
  </div>
{:else if LoggedIn == true}
  <div class="accountheader">
    <div class="headerleft">
      <img src={$accountstore.userimg} alt="user" />
      <h1>{$accountstore.username}</h1>
    </div>
    <div class="headerright">
      <button on:click={SignOut} class="logoutbtn">Logout</button>
    </div>
  </div>
  <div class="likedsongs">
    <h1>Liked Songs</h1>
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
  </div>
{:else}
  <div class="results noterm">
    <h1>An Error Has Occured</h1>
    <h1>Try Refreshing Page</h1>
  </div>
{/if}

<style>
  .loginbtn {
    display: flex;
    align-items: center;
    gap: 1vw;
    margin-top: 5vh;
    font-size: 1.5rem;
  }

  .logoutbtn {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 295px) {
    .loginbtn,
    .logoutbtn {
      font-size: 1.15rem;
    }
  }

  svg {
    height: 1.5rem;
  }

  .accountheader,
  .headerleft,
  .headerright {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    min-height: 50px;
    gap: 1vw;
    padding-top: 0.1rem;
    padding-bottom: 0.75rem;
  }

  .accountheader img {
    border-radius: 50%;
    height: 40px;
  }
</style>
