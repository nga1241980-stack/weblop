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
let students = [
 {name:"Nguyễn Phạm Ngọc Ân", dob:"26/02/2008", img:"images/nguyen_pham_ngoc_an.jpg"},
 {name:"Nguyễn Thị Minh Châu", dob:"30/03/2008", img:"images/nguyen_thi_minh_chau.jpg"},
 {name:"Phùng Ngọc Danh", dob:"14/12/2008", img:"images/phung_ngoc_danh.jpg"},
 {name:"Trương Thị Mỹ Duyên", dob:"18/11/2008", img:"images/truong_thi_my_duyen.jpg"},
 {name:"Đinh Hữu Quang Đạt", dob:"13/09/2008", img:"images/dinh_huu_quang_dat.jpg"},
 {name:"Huỳnh Tấn Đạt", dob:"10/06/2008", img:"images/huynh_tan_dat.jpg"},
 {name:"Nguyễn Thị Diễm Hằng", dob:"16/04/2008", img:"images/nguyen_thi_diem_hang.jpg"},
 {name:"Trần Đình Hoàng", dob:"28/02/2008", img:"images/tran_dinh_hoang.jpg"},
 {name:"Phạm Đình Quốc Huy", dob:"26/10/2008", img:"images/pham_dinh_quoc_huy.jpg"},
 {name:"Lê Văn Kha", dob:"29/07/2008", img:"images/le_van_kha.jpg"},
 {name:"Văn Tấn Lê Kha", dob:"09/09/2008", img:"images/van_tan_le_kha.jpg"},
 {name:"Đặng Hoàng Phúc Khang", dob:"02/10/2008", img:"images/dang_hoang_phuc_khang.jpg"},
 {name:"Bùi Phương Khánh", dob:"03/04/2008", img:"images/bui_phuong_khanh.jpg"},
 {name:"Trần Gia Khánh", dob:"06/04/2008", img:"images/tran_gia_khanh.jpg"},
 {name:"Đồng Lê Ly Na", dob:"01/01/2008", img:"images/dong_le_ly_na.jpg"},
 {name:"Trần Phương Nam", dob:"04/05/2008", img:"images/tran_phuong_nam.jpg"},
 {name:"Vũ Tiến Nam", dob:"27/04/2008", img:"images/vu_tien_nam.jpg"},
 {name:"Bùi Trần Bảo Ngân", dob:"26/04/2008", img:"images/bui_tran_bao_ngan.jpg"},
 {name:"Dương Trần Bảo Ngọc", dob:"23/09/2008", img:"images/duong_tran_bao_ngoc.jpg"},
 {name:"Phạm Bảo Ngọc", dob:"15/10/2008", img:"images/pham_bao_ngoc.jpg"},
 {name:"Nguyễn Lê Thảo Nguyên", dob:"03/10/2008", img:"images/nguyen_le_thao_nguyen.jpg"},
 {name:"Phạm Hồng Nguyên", dob:"03/12/2008", img:"images/pham_hong_nguyen.jpg"},
 {name:"Lê Thọ Thanh Nhân", dob:"05/04/2008", img:"images/le_tho_thanh_nhan.jpg"},
 {name:"Trần Thị Huỳnh Như", dob:"03/03/2008", img:"images/tran_thi_huynh_nhu.jpg"},
 {name:"Đinh Xuân Phước", dob:"12/01/2008", img:"images/dinh_xuan_phuoc.jpg"},
 {name:"Lê Nguyễn Lan Phương", dob:"16/06/2008", img:"images/le_nguyen_lan_phuong.jpg"},
 {name:"Nguyễn Ngọc Quân", dob:"20/08/2008", img:"images/nguyen_ngoc_quan.jpg"},
 {name:"Lưu Văn Quyền", dob:"19/02/2008", img:"images/luu_van_quyen.jpg"},
 {name:"Hồ Lê Như Quỳnh", dob:"02/11/2008", img:"images/ho_le_nhu_quynh.jpg"},
 {name:"Vũ Đình Thảo", dob:"25/10/2008", img:"images/vu_dinh_thao.jpg"},
 {name:"Nguyễn Huỳnh Hoàng Thiện", dob:"29/11/2008", img:"images/nguyen_huynh_hoang_thien.jpg"},
 {name:"Nguyễn Thị Ngọc Thoa", dob:"25/08/2008", img:"images/nguyen_thi_ngoc_thoa.jpg"},
 {name:"Lê Nguyễn Thanh Thuận", dob:"27/05/2008", img:"images/le_nguyen_thanh_thuan.jpg"},
 {name:"Nguyễn Thị Phương Thuận", dob:"18/05/2008", img:"images/nguyen_thi_phuong_thuan.jpg"},
 {name:"Trần Thị Minh Thư", dob:"02/01/2008", img:"images/tran_thi_minh_thu.jpg"},
 {name:"Lê Võ Quang Thương", dob:"14/07/2008", img:"images/le_vo_quang_thuong.jpg"},
 {name:"Lê Đức Trí", dob:"26/11/2008", img:"images/le_duc_tri.jpg"},
 {name:"Lâm Quang Trung", dob:"18/09/2008", img:"images/lam_quang_trung.jpg"},
 {name:"Đồng Thị Cẩm Tú", dob:"18/09/2008", img:"images/dong_thi_cam_tu.jpg"},
 {name:"Cao Trần Vũ", dob:"11/10/2008", img:"images/cao_tran_vu.jpg"},
 {name:"Phan Quốc Vũ", dob:"28/06/2008", img:"images/phan_quoc_vu.jpg"},
 {name:"Lê Quang Ý", dob:"08/10/2008", img:"images/le_quang_y.jpg"}
];

let list = document.getElementById("studentList");

students.forEach(s=>{
  let div = document.createElement("div");
  div.className = "student-item";
  div.innerText = s.name;
  div.onclick = ()=>openStudent(s);
  list.appendChild(div);
});

function openStudent(s){
  document.getElementById("studentImg").src = s.img;
  document.getElementById("studentName").innerText = s.name;
  document.getElementById("studentDob").innerText = "Ngày sinh: " + s.dob;
  document.getElementById("studentModal").style.display="flex";
}

function closeStudent(){
  document.getElementById("studentModal").style.display="none";
}
