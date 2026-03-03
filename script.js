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

// ===== DANH SÁCH HỌC SINH =====
const students = [
 {name:"Nguyễn Phạm Ngọc Ân", dob:"26/02/2008", img:"images/nguyen-pham-ngoc-an.jpg"},
 {name:"Nguyễn Thị Minh Châu", dob:"30/03/2008", img:"images/nguyen-thi-minh-chau.jpg"},
 {name:"Phùng Ngọc Danh", dob:"14/12/2008", img:"images/phung-ngoc-danh.jpg"},
 {name:"Trương Thị Mỹ Duyên", dob:"18/11/2008", img:"images/truong-thi-my-duyen.jpg"},
 {name:"Đinh Hữu Quang Đạt", dob:"13/09/2008", img:"images/dinh-huu-quang-dat.jpg"},
 {name:"Huỳnh Tấn Đạt", dob:"10/06/2008", img:"images/huynh-tan-dat.jpg"},
 {name:"Nguyễn Thị Diễm Hằng", dob:"16/04/2008", img:"images/nguyen-thi-diem-hang.jpg"},
 {name:"Trần Đình Hoàng", dob:"28/02/2008", img:"images/tran-dinh-hoang.jpg"},
 {name:"Phạm Đình Quốc Huy", dob:"26/10/2008", img:"images/pham-dinh-quoc-huy.jpg"},
 {name:"Lê Văn Kha", dob:"29/07/2008", img:"images/le-van-kha.jpg"},
 {name:"Văn Tấn Lê Kha", dob:"09/09/2008", img:"images/van-tan-le-kha.jpg"},
 {name:"Đặng Hoàng Phúc Khang", dob:"02/10/2008", img:"images/dang-hoang-phuc-khang.jpg"},
 {name:"Bùi Phương Khánh", dob:"03/04/2008", img:"images/bui-phuong-khanh.jpg"},
 {name:"Trần Gia Khánh", dob:"06/04/2008", img:"images/tran-gia-khanh.jpg"},
 {name:"Đồng Lê Ly Na", dob:"01/01/2008", img:"images/dong-le-ly-na.jpg"},
 {name:"Trần Phương Nam", dob:"04/05/2008", img:"images/tran-phuong-nam.jpg"},
 {name:"Vũ Tiến Nam", dob:"27/04/2008", img:"images/vu-tien-nam.jpg"},
 {name:"Bùi Trần Bảo Ngân", dob:"26/04/2008", img:"images/bui-tran-bao-ngan.jpg"},
 {name:"Dương Trần Bảo Ngọc", dob:"23/09/2008", img:"images/duong-tran-bao-ngoc.jpg"},
 {name:"Phạm Bảo Ngọc", dob:"15/10/2008", img:"images/pham-bao-ngoc.jpg"},
 {name:"Nguyễn Lê Thảo Nguyên", dob:"03/10/2008", img:"images/nguyen-le-thao-nguyen.jpg"},
 {name:"Phạm Hồng Nguyên", dob:"03/12/2008", img:"images/pham-hong-nguyen.jpg"},
 {name:"Lê Thọ Thanh Nhân", dob:"05/04/2008", img:"images/le-tho-thanh-nhan.jpg"},
 {name:"Trần Thị Huỳnh Như", dob:"03/03/2008", img:"images/tran-thi-huynh-nhu.jpg"},
 {name:"Đinh Xuân Phước", dob:"12/01/2008", img:"images/dinh-xuan-phuoc.jpg"},
 {name:"Lê Nguyễn Lan Phương", dob:"16/06/2008", img:"images/le-nguyen-lan-phuong.jpg"},
 {name:"Nguyễn Ngọc Quân", dob:"20/08/2008", img:"images/nguyen-ngoc-quan.jpg"},
 {name:"Lưu Văn Quyền", dob:"19/02/2008", img:"images/luu-van-quyen.jpg"},
 {name:"Hồ Lê Như Quỳnh", dob:"02/11/2008", img:"images/ho-le-nhu-quynh.jpg"},
 {name:"Vũ Đình Thảo", dob:"25/10/2008", img:"images/vu-dinh-thao.jpg"},
 {name:"Nguyễn Huỳnh Hoàng Thiện", dob:"29/11/2008", img:"images/nguyen-huynh-hoang-thien.jpg"},
 {name:"Nguyễn Thị Ngọc Thoa", dob:"25/08/2008", img:"images/nguyen-thi-ngoc-thoa.jpg"},
 {name:"Lê Nguyễn Thanh Thuận", dob:"27/05/2008", img:"images/le-nguyen-thanh-thuan.jpg"},
 {name:"Nguyễn Thị Phương Thuận", dob:"18/05/2008", img:"images/nguyen-thi-phuong-thuan.jpg"},
 {name:"Trần Thị Minh Thư", dob:"02/01/2008", img:"images/tran-thi-minh-thu.jpg"},
 {name:"Lê Võ Quang Thương", dob:"14/07/2008", img:"images/le-vo-quang-thuong.jpg"},
 {name:"Lê Đức Trí", dob:"26/11/2008", img:"images/le-duc-tri.jpg"},
 {name:"Lâm Quang Trung", dob:"18/09/2008", img:"images/lam-quang-trung.jpg"},
 {name:"Đồng Thị Cẩm Tú", dob:"18/09/2008", img:"images/dong-thi-cam-tu.jpg"},
 {name:"Cao Trần Vũ", dob:"11/10/2008", img:"images/cao-tran-vu.jpg"},
 {name:"Phan Quốc Vũ", dob:"28/06/2008", img:"images/phan-quoc-vu.jpg"},
 {name:"Lê Quang Ý", dob:"08/10/2008", img:"images/le-quang-y.jpg"}
];

const slider = document.getElementById("studentSlider");

students.forEach(s=>{
  const div = document.createElement("div");
  div.className="student-card";
  div.innerHTML=`
    <img src="${s.img}">
    <p>${s.name}</p>
  `;
  div.onclick=()=>openStudent(s);
  slider.appendChild(div);
});

let currentStudent = null;

function openStudent(s){
  currentStudent = s;
  document.getElementById("studentImg").src = s.img;
  document.getElementById("studentName").innerText = s.name;
  document.getElementById("studentDob").innerText = "Ngày sinh: " + s.dob;
  document.getElementById("dreamInput").value =
    localStorage.getItem(s.name) || "";
  document.getElementById("studentModal").style.display="flex";
}

function saveDream(){
  localStorage.setItem(currentStudent.name,
    document.getElementById("dreamInput").value);
  alert("Đã lưu ước mơ!");
}

function closeStudent(){
  document.getElementById("studentModal").style.display = "none";
}

document.querySelectorAll(".flip-card").forEach(card=>{
  card.addEventListener("click", ()=>{
    card.classList.toggle("active");
  });
});
