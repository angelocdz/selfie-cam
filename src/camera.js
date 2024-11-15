export async function getVideo() {
  const avStream = await navigator.mediaDevices.getUserMedia({
    video: true,
  });
  const video = document.createElement("video");

  try {
    // modern browsers
    video.srcObject = avStream;
  } catch (error) {
    // old browsers
    video.src = window.URL.createObjectURL(avStream);
    throw error;
  }

  await video.play();
  return video;
}

export function drawVideo(video, canvas) {
  console.log("draw");

  const context = canvas.getContext("2d");

  /*
  console.log(video.videoWidth);
  console.log(canvas.width);
  */

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight); // (x, y)
}
