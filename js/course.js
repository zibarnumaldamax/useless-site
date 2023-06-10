const Btn = document.getElementById('Btn');
const audio = document.getElementById("myaudio");
const block2 = document.getElementById("block2");
const block3 = document.getElementById("block3");
const block4 = document.getElementById("block4");

Btn.addEventListener('click', () => {
  block2.innerHTML = ""
  block2.innerHTML = `<img id="myimg" src="img/kekw.png" alt="картинка" height="300">`
  block3.innerHTML = `<input type="range" min="0" max="100" value="0" id="slider">`
  block4.innerHTML = `<img src="img/couse-pull.png" alt="картинка" height="75">`

  const slider = document.getElementById('slider');
  const image = document.getElementById("myimg");
  
  slider.addEventListener('input', () => {
  const value = slider.value;
  const opacity = value / 100;
  const volume = value / 100;
  image.style.opacity = opacity;
  audio.volume = volume;
});
});

var isPlaying = true;
document.onclick = function(){
    if(isPlaying == true) audio.play()
    isPlaying = false;
}
audio.volume = 0.0;