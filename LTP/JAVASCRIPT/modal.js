
function openModal(){
    // Variável do Modal
    var modal = document.getElementById("profileModal");

    // Abrir o Modal
    modal.style.display = "block";
    modal.classList.remove("fadeo");
    modal.classList.add("fade");

    // Quando clicado fora da aba, fechar ela
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.classList.add("fadeo");
          setTimeout(() => {
            modal.style.display = "none";
          }, 350);
        }
    } 
}

function cadastro(){
    // Variável do Modal do perfil para desabilitar
    var modal = document.getElementById("profileModal");
    var modalLogin = document.getElementById("loginModal");
    modal.style.display = "none";
    modalLogin.style.display = "none";

    // Variável do Modal de Cadastro
    var modalCad = document.getElementById("cadastroModal");

    // Abrir o Modal
    modalCad.style.display = "flex";

    // Para evitar repetir uma animação do Fade Out já realizada antes, remove-la antes de executar o Fade In
    modalCad.classList.remove("fadeo");

    // Execução da animação Fade In com o acrescento da classe
    modalCad.classList.add("fade");

    // Quando clicado fora da aba, fechar ela
    window.onclick = function(event) {
        if (event.target == modalCad) {
          //Adicionar animação de Fade Out
          modalCad.classList.add("fadeo");
          // Após animação, desabilitar o Modal
          setTimeout(() => {
            modalCad.style.display = "none";
          }, 350);
        }
    } 
}

function showPassword(){
    const password = document.querySelector('#password');
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
}

function login(){
    // Variável do Modal do perfil para desabilitar
    var modal = document.getElementById("profileModal");
    var modalCad = document.getElementById("cadastroModal");
    modal.style.display = "none";
    modalCad.style.display = "none";

    // Variável do Modal
    var modalLogin = document.getElementById("loginModal");

    // Abrir o Modal
    modalLogin.style.display = "flex";

     // Para evitar repetir uma animação do Fade Out já realizada antes, remove-la antes de executar o Fade In
     modalLogin.classList.remove("fadeo");

     // Execução da animação Fade In com o acrescento da classe
     modalLogin.classList.add("fade");

    // Quando clicado fora da aba, fechar ela
    window.onclick = function(event) {
      if (event.target == modalLogin) {
        //Adicionar animação de Fade Out
        modalLogin.classList.add("fadeo");
        // Após animação, desabilitar o Modal
        setTimeout(() => {
          modalLogin.style.display = "none";
        }, 350);
      }
    } 
}

function videoModal(){
  // Variável do Modal do video
  var modalvideo = document.getElementById("videoModal");
  var video = document.getElementById("videoPlay");

  // Abrir o Modal
  modalvideo.style.display = "flex";
  video.play();

   // Para evitar repetir uma animação do Fade Out já realizada antes, remove-la antes de executar o Fade In
   modalvideo.classList.remove("fadeo");

   // Execução da animação Fade In com o acrescento da classe
   modalvideo.classList.add("fade");

  // Quando clicado fora da aba, fechar ela
  window.onclick = function(event) {
    if (event.target == modalvideo) {
      video.pause(); // Pausa o vídeo
      video.currentTime = 0; // Opcional: reinicia o vídeo
      //Adicionar animação de Fade Out
      modalvideo.classList.add("fadeo");
      // Após animação, desabilitar o Modal
      setTimeout(() => {
        modalvideo.style.display = "none";
      }, 350);
    }
  } 
}

function addCatalog(){
  var aba = document.getElementById("ab-add");
  var btnAdd = document.getElementById("btnFunction");
  btnAdd.classList.add("fadeo");

  setTimeout(() => {
    btnAdd.style.display = "none";
    aba.style.display = "flex";
    // Para evitar repetir uma animação do Fade Out já realizada antes, remove-la antes de executar o Fade In
    btnAdd.classList.remove("fadeo");
  }, 350);
  aba.classList.add("fade");
}

function delCatalog(){
  var abaDel = document.getElementById("ab-del")
  var btnDel = document.getElementById("btnFunction");
  btnDel.classList.add("fadeo");

  setTimeout(() => {
    btnDel.style.display = "none";
    abaDel.style.display = "flex";
    // Para evitar repetir uma animação do Fade Out já realizada antes, remove-la antes de executar o Fade In
    btnDel.classList.remove("fadeo");
  }, 350);
  abaDel.classList.add("fade");
}

function getBack(){
  var aba = document.getElementById("ab-add");
  var abaDel = document.getElementById("ab-del")
  var btnBack = document.getElementById("btnFunction");
  aba.classList.add("fadeo");
  abaDel.classList.add("fadeo");
  setTimeout(() =>{
    aba.style.display = "none";
    abaDel.style.display = "none";
    btnBack.style.display = "flex";
    aba.classList.remove("fadeo");
    abaDel.classList.remove("fadeo");
  }, 350);
  btnBack.classList.add("fade");
}