// inisialisasi variabel dari div class html
var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

// fungsi untuk menghitung data yang di input dari user
function calculate(){
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    modal.style.display = "block";
    modalText.innerHTML = `Harap lengkapi formulir`;
  }else{
    countBmi();
  }

}

// fungsi untuk pemilihan jenis kelamin
function countBmi(){
  var p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }

  /*
    untuk menghitung berat badan

    apabila berat badan dibawah 18.8 = kekurangan berat badan
    apabila berat badan diantara 18.5 - 24.9 = user ideal
    apabila berat badan diantara 25 - 29.9 = kelebihan berat badan
    apabila berat badan kurang dari bmi = obesitas
  */
  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
      
  var result = '';
  if(bmi<18.5){
    result = 'kekurangan berat badan';
     }else if(18.5<=bmi&&bmi<=24.9){
    result = 'normal (ideal)';
     }else if(25<=bmi&&bmi<=29.9){
    result = 'kelebihan berat badan';
     }else if(30<=bmi){
    result = 'kegemukan (obesitas)';
     }

// keterangan status berat badan
resultArea.style.display = "block";
  document.querySelector(".comment").innerHTML = `Anda <span id="comment">${result}</span>`;
  document.querySelector("#result").innerHTML = bmi.toFixed(2);
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
