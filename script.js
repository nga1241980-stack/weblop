function openModal(year){
  document.getElementById("modal").style.display="flex";
  document.getElementById("modal-title").innerText = "Thông tin " + year;
}

function closeModal(){
  document.getElementById("modal").style.display="none";
}

/* ===== MUSIC SYSTEM ===== */
let songs = [
  {src:"music1.mp3", name:"Tuổi học trò"},
  {src:"music2.mp3", name:"Thanh xuân của chúng ta"},
  {src:"music3.mp3", name:"Ký ức học sinh"}
];

let audio = new Audio();
let index = 0;
let isPlaying = false;

let songName = document.getElementById("songName");
let musicIconInner = document.getElementById("musicIconInner");

/* load bài đầu */
audio.src = songs[index].src;

/* hết bài → bài tiếp */
audio.addEventListener("ended", function(){
  index = (index + 1) % songs.length;
  audio.src = songs[index].src;
  audio.play();
  updateUI();
});

/* play / pause */
function toggleMusic(){
  if(!isPlaying){
    audio.play();
    isPlaying = true;
  }else{
    audio.pause();
    isPlaying = false;
  }
  updateUI();
}

/* update icon + chữ */
function updateUI(){
  if(isPlaying){
    songName.innerText = "🎵 Đang phát: " + songs[index].name;
    musicIconInner.className = "fa-solid fa-music";
  }else{
    songName.innerText = "⏸ Chưa phát";
    musicIconInner.className = "fa-solid fa-play";
  }
}

/* auto play khi user click lần đầu */
document.body.addEventListener("click", function(){
  if(!isPlaying){
    audio.play();
    isPlaying = true;
    updateUI();
  }
},{once:true});