const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("play-pause");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const shuffleBtn = document.getElementById("shuffleBtn");
const repeatBtn = document.getElementById("repeatBtn");
const title = document.getElementById("track-title");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const albumImg = document.getElementById("albumImg");
const playlistEl = document.getElementById("playlist");
const volumeSlider = document.getElementById("volume");
const albumArt = document.getElementById("albumArt");
const equalizer = document.getElementById("equalizer");

const songs = [
  { name: "song1.mp3", title: "Rocking", img: "album/album2.jpg" },
  { name: "song2.mp3", title: "Piano", img: "album/album2.jpg" },
  { name: "song3.mp3", title: "Smooth Song", img: "album/album2.jpg" },
  { name: "song4.mp3", title: "Chill Beats", img: "album/album2.jpg" },
  { name: "song5.mp3", title: "Arijit Singh - Mashup", img: "album/album1.png" }
];

let currentIndex = 0;
let isPlaying = false;
let shuffle = false;
let repeat = false;

function loadSong(index) {
  const song = songs[index];
  title.textContent = song.title;
  albumImg.src = song.img || "album/default.jpg";
  audio.src = `music/${song.name}`;
  updateActiveSong();
}

function playSong() {
  audio.play();
  isPlaying = true;
  playPauseBtn.textContent = "⏸️";
  albumArt.classList.add("glow");
  equalizer.classList.remove("hidden");
}

function pauseSong() {
  audio.pause();
  isPlaying = false;
  playPauseBtn.textContent = "▶️";
  albumArt.classList.remove("glow");
  equalizer.classList.add("hidden");
}

function nextSong() {
  currentIndex = shuffle
    ? Math.floor(Math.random() * songs.length)
    : (currentIndex + 1) % songs.length;
  loadSong(currentIndex);
  playSong();
}

function prevSong() {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  loadSong(currentIndex);
  playSong();
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

function updateActiveSong() {
  const listItems = playlistEl.querySelectorAll("li");
  listItems.forEach((li, idx) => {
    li.classList.toggle("active", idx === currentIndex);
  });
}

playPauseBtn.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});
nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);

shuffleBtn.addEventListener("click", () => {
  shuffle = !shuffle;
  alert(`Shuffle ${shuffle ? "On" : "Off"}`);
});

repeatBtn.addEventListener("click", () => {
  repeat = !repeat;
  audio.loop = repeat;
  alert(`Repeat ${repeat ? "On" : "Off"}`);
});

audio.addEventListener("timeupdate", () => {
  if (audio.duration) {
    progress.value = (audio.currentTime / audio.duration) * 100;
    currentTimeEl.textContent = formatTime(audio.currentTime);
    durationEl.textContent = formatTime(audio.duration);
  }
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

audio.addEventListener("ended", () => {
  if (!repeat) nextSong();
});

volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
});

/* Build playlist */
songs.forEach((song, index) => {
  const li = document.createElement("li");

  const img = document.createElement("img");
  img.src = song.img || "album/default.jpg";
  img.alt = song.title;

  const text = document.createElement("span");
  text.textContent = song.title;

  li.appendChild(img);
  li.appendChild(text);

  li.addEventListener("click", () => {
    currentIndex = index;
    loadSong(currentIndex);
    playSong();
  });

  playlistEl.appendChild(li);
});

loadSong(currentIndex);
