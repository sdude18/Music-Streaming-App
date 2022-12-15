import { writable } from "svelte/store";

const playingsong = writable({
  title: "",
  artwork: [],
  artist: [],
  songsartwork: [],
  songtitles: [],
  songpreview: [],
  songsindex: 0,
});

export default playingsong;
