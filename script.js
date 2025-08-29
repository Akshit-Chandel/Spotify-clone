const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const songs = Array.from(document.querySelectorAll('.card audio'));
let currentSongIndex = -1;

function stopAllSongs() {
  songs.forEach(song => {
    song.pause();
    song.currentTime = 0;
  });
}

function playSong(index) {
  stopAllSongs();
  currentSongIndex = index;
  songs[currentSongIndex].play();
  playBtn.style.display = 'none';
  pauseBtn.style.display = 'inline';
}

function pauseSong() {
  if (currentSongIndex !== -1) {
    songs[currentSongIndex].pause();
    playBtn.style.display = 'inline';
    pauseBtn.style.display = 'none';
  }
}

function nextSong() {
  if (currentSongIndex !== -1) {
    let nextIndex = (currentSongIndex + 1) % songs.length;
    playSong(nextIndex);
  }
}

function prevSong() {
  if (currentSongIndex !== -1) {
    let prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(prevIndex);
  }
}

// Event listeners
playBtn.addEventListener('click', () => {
  if (currentSongIndex !== -1) {
    songs[currentSongIndex].play();
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline';
  }
});

pauseBtn.addEventListener('click', pauseSong);
nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);

// Click song card to play
document.querySelectorAll('.card').forEach((card, index) => {
  card.addEventListener('click', () => {
    playSong(index);
  });
});
