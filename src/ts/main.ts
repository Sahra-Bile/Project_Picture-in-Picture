const videoElement: HTMLVideoElement = document.getElementById('video') as HTMLVideoElement;
const button:HTMLButtonElement = document.getElementById('button') as HTMLButtonElement;


async function selectMediaStream(): Promise<void>{
 //* prompt to select media stream, pass to video element, then play 
  try{
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () =>{
      videoElement.play();
    }


  }catch(error){
    console.log("whoops error here:" , error);

  }
  
}

 button.addEventListener('click', async () =>{
  //* disable button 
  button.disabled = true;
  //* start picture in picture 
  await videoElement.requestPictureInPicture();
  //* reset button 
  button.disabled = false;

 });
//! on load 
selectMediaStream();