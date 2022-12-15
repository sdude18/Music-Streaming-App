import playingsong from "../store.js";

export async function play(
  cover,
  title,
  preview,
  index,
  songcovers,
  songtitles,
  mp3preview,
  songartists
) {
  var audio = document.getElementById("audio");
  var source = document.getElementById("audioSource");

  await changecolour(cover);

  playingsong.set({
    title: title,
    artwork: cover,
    artist: songartists,
    songsindex: index,
    songsartwork: songcovers,
    songtitles: songtitles,
    songpreview: mp3preview,
  });

  console.log("play");

  if (source.src != preview) {
    source.src = preview;
    await audio.load();
    await audio.play();
  } else if (audio.duration > 0 && !audio.paused) {
    await audio.pause();
  } else {
    await audio.play();
  }
}

export async function changecolour(cover) {
  const { FastAverageColor } = await import("fast-average-color");
  const fac = new FastAverageColor();
  fac.getColorAsync(cover).then((color) => {
    if (color.isDark == true) {
      if (document.querySelector("footer")) {
        document.querySelector("footer").style.background = color.hex;
        document.querySelector("footer").style.color = "white";
        document.querySelector("footer").style.fill = "white";
      }
      if (document.querySelector(".viewaudio")) {
        document.querySelector(".viewaudio").style.color = "white";
        document.querySelector(".viewaudio").style.fill = "white";
        document.querySelector(".viewaudio").style.background = color.hex;
      }
      if (document.querySelector(".controlsmobile input")) {
        document.querySelector(".controlsmobile input").style.background =
          "white";
      }
      if (document.querySelector(".controls input")) {
        document.querySelector(".controls input").style.background = "white";
      }
      if (document.querySelector(".slider")) {
        document
          .querySelector(".slider")
          .style.setProperty("--thumbcolour", "white");
      }
    } else {
      if (document.querySelector("footer")) {
        document.querySelector("footer").style.background = color.hex;
        document.querySelector("footer").style.color = "black";
        document.querySelector("footer").style.fill = "black";
      }
      if (document.querySelector(".viewaudio")) {
        document.querySelector(".viewaudio").style.background = color.hex;
        document.querySelector(".viewaudio").style.color = "black";
        document.querySelector(".viewaudio").style.fill = "black";
      }
      if (document.querySelector(".controls input")) {
        document.querySelector(".controls input").style.background = "black";
      }
      if (document.querySelector(".controlsmobile input")) {
        document.querySelector(".controlsmobile input").style.background =
          "black";
      }
      if (document.querySelector(".slider")) {
        document
          .querySelector(".slider")
          .style.setProperty("--thumbcolour", "black");
      }
    }
  });
}
