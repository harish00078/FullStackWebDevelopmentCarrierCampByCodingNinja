const song = new Audio();
const playlist = ["song1.mp3", "song2.mp3", "song3.mp3"]; // replace with your own songs

let songIndex = 0;

function loadSong() {
  song.src = playlist[songIndex];
  song.load();
}

function playSong() {
  song.play();
  document.getElementById("play").innerHTML = "<i class='fa fa-pause'></i>";
}

function pauseSong() {
  song.pause();
  document.getElementById("play").innerHTML = "<i class='fa fa-play'></i>";
}

function nextSong() {
  songIndex++;
  if (songIndex >= playlist.length) {
    songIndex = 0;
  }
  loadSong();
  playSong();
}

function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = playlist.length - 1;
  }
  loadSong();
  playSong();
}

function shufflePlaylist() {
  playlist.sort(() => Math.random() - 0.5);
  loadSong();
  playSong();
}

function repeatSong() {
  song.currentTime = 0;
  playSong();
}

loadSong();

document.getElementById("play").addEventListener("click", () => {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
});

document.getElementById("prev").addEventListener("click", prevSong);

document.getElementById("next").addEventListener("click", nextSong);

document.getElementById("shuffle").addEventListener("click", shufflePlaylist);

document.getElementById("repeat").addEventListener("click", repeatSong);
