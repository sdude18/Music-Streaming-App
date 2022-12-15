import { writable } from "svelte/store";

const accountstore = writable({
  username: "",
  userimg: "",
  useremail: "",
});

export default accountstore;
