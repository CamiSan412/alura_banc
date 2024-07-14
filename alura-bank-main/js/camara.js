const abrirCamara = document.querySelector("[data-video-boton]");
const video = document.querySelector("[data-video]");
const campoCamara = document.querySelector("[data-camera]");
let imgUrl = "";

const botonTomarFoto = document.querySelector("[data-tomar-foto]");
const mensaje = document.querySelector("[data-mensaje]");
const canvas = document.querySelector("[data-video-canvas]");
const botonEnviar = document.querySelector("[data-enviar]");

abrirCamara.addEventListener("click", async () => {
  const iniciarVideo = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });

  abrirCamara.style.display = "none";
  campoCamara.style.display = "block";
  video.srcObject = iniciarVideo;
});

botonTomarFoto.addEventListener("click", () => {
  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
  imgUrl = canvas.toDataURL("image/png");
  campoCamara.style.display = "none";
  mensaje.style.display = "block";
});

botonEnviar.addEventListener("click", () => {
  const recibirDatos = localStorage.getItem("registro");
  const datos = JSON.parse(recibirDatos);
  datos.img_url = imgUrl;
  localStorage.setItem("registro", JSON.stringify(datos));

  window.location.href='abrir-cuenta-form-3.html'
});
