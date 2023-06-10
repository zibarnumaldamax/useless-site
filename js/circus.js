var isPlaying = true;
toggleBtn.addEventListener('click', () => {
  if(!isPlaying) {
   audio.play();
   toggleBtn.innerHTML = 'NO MUZIKA!';
   isPlaying = true;
  } else {
   audio.pause();
   toggleBtn.innerHTML = 'MUZIKA!';
   isPlaying = false;
  }
});

var audio = document.getElementById("myaudio");
audio.volume = 0.2;

const textarea1 = document.querySelector('#textarea1');
const textarea2 = document.querySelector('#textarea2');

  textarea1.addEventListener('input', () => {
   let text = textarea1.value;
   let displayText = "";
   
   for(let i=0; i<text.length; i++) {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let color = `rgb(${r}, ${g}, ${b})`;
    let font = ['sans-serif', 'serif', 'monospace', 'cursive', 'fantasy'][Math.floor(Math.random()*5)];
    let caseType = Math.random() >= 0.5 ? 'uppercase' : 'lowercase';

    displayText += `<span style="color:${color}; font-family:${font}; text-transform:${caseType}">${text.charAt(i)}</span>`;
   }

   textarea2.innerHTML = ""; 
   textarea2.innerHTML = displayText; 
  });