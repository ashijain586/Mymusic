let audio = document.querySelectorAll('audio');
let songsList = document.querySelector('.rtdwn');
let playbutton = document.querySelector('#playbtn');
let pausebutton = document.querySelector('#pausebtn');
let progressBar =  document.querySelector('#progress-bar');

audio = Array.from(audio);
let template = '';

audio.forEach(function(song,index){
    let songName = song.dataset.name ;
    let artistName = song.dataset.singer ;

    template += `   <div data-index = ${index} data-song={songName}  class="songcontainer">
    <div class="songimg">
        <i class="ri-music-2-fill"></i>
    </div>

    
  
    <div class="songinfo">
       <div class="songsname">
       ${ songName}
       </div>
       <div class="artistname">
            ${artistName}
       </div>
      
  </div>

<div class="like">
    <i class="ri-heart-3-fill"></i>
    
   
</div>

<div class="timing">
    00:00 / 00:00
</div>
  <div class="speaker">
    <i class="ri-volume-up-fill"></i>
    <i class="ri-volume-mute-fill"></i>

   </div>
</div>`
     
              
   songsList.innerHTML = template;
  
});

 
let clickedSong = '';

songsList.addEventListener('click', function(details){
     if(clickedSong === ''){
          clickedSong = audio[details.target.dataset.index];   
          clickedSong.play();
          document.querySelector('.songname').textContent = clickedSong.dataset.name;
          document.querySelector('.artistname').textContent = clickedSong.dataset.singer;
          playbutton.style.display = 'none';
          pausebutton.style.display = 'initial';
          

     }
     else{
          clickedSong.pause();
          currentTime = 0;
          clickedSong = audio[details.target.dataset.index];
          clickedSong.play();
          document.querySelector('.songname').textContent = clickedSong.dataset.name;
          document.querySelector('.artistname').textContent = clickedSong.dataset.singer;
         
          

     } 

})

playbutton.addEventListener('click', function(){
     playbutton.style.display = 'none';
     pausebutton.style.display = 'initial';
     clickedSong.play();
     
})

pausebutton.addEventListener('click', function(){
     pausebutton.style.display = 'none';
     playbutton.style.display = 'initial';
     clickedSong.pause();
     
})


// function songDetails(i){
//      songkanameupdate.textContent = clickedSong.dataset.name;
//      artistkanameupdate.textContent = clickedSong.dataset.singer;
     
// }

// songDetails(0);


function updateProgressValue() {
     progressBar.max = clickedSong.duration;
     progressBar.value = clickedSong.currentTime;
     document.querySelector('.currentTime').innerHTML = (formatTime(Math.floor(clickedSong.currentTime)));
    
 };
 
 
 function formatTime(seconds) {
     let min = Math.floor((seconds / 60));
     let sec = Math.floor(seconds - (min * 60));
     if (sec < 10){ 
         sec  = `0${sec}`;
     };
     return `${min}:${sec}`;
 };
 
 
 setInterval(updateProgressValue, 500);
 
 function changeProgressBar() {
     clickedSong.currentTime = progressBar.value;
 };

