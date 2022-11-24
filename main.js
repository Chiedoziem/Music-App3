Song1 = "";
Song2 = "";
Song3 = "";
Song4 = "";
Song5 = "";
Song6 = "";
Song7 = "";
Song8 = "";
Song9 = "";
Song10 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function preload(){
  Song1 = document.getElementById("Song1")
  Song2 = document.getElementById("Song2")
  Song3 = document.getElementById("Song3")
  Song4 = document.getElementById("Song4")
  Song5 = document.getElementById("Song5")
  Song6 = document.getElementById("Song6")
  Song7 = document.getElementById("Song7")
  Song8 = document.getElementById("Song8")
  Song9 = document.getElementById("Song9")
  Song10 = document.getElementById("Song10")
}
function setup(){
    canvas = createCanvas(640, 520);
    canvas.position(0, 490);
    video = createCapture(VIDEO);
    video.size(640, 420);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
 function draw(){
    image(video, 0, 0, 640, 520)
}
function play(){
  Song1.play();
  Song1.setVolume(1);
  Song1.rate(1)

  Song2.play();
  Song2.setVolume(1);
  Song2.rate(1)

  Song3.play();
  Song3.setVolume(1);
  Song3.rate(1)

  Song3.play();
  Song3.setVolume(1);
  Song3.rate(1)

  Song4.play();
  Song4.setVolume(1);
  Song4.rate(1)

  Song5.play();
  Song5.setVolume(1);
  Song5.rate(1)

  Song6.play();
  Song6.setVolume(1);
  Song6.rate(1)

  Song7.play();
  Song7.setVolume(1);
  Song7.rate(1)

  Song8.play();
  Song8.setVolume(1);
  Song8.rate(1)

  Song9.play();
  Song9.setVolume(1);
  Song9.rate(1)

  Song10.play();
  Song10.setVolume(1);
  Song10.rate(1)
}
function modelLoaded(){
  console.log('Model Loaded');
}
function gotPoses(results){
if (results.length > 0){
  console.log(results);
  leftWristX = results[0].pose.leftWrist.x;
  leftWristY = results[0].pose.leftWrist.y;
  console.log('Left Wrist X '+leftWristX+'Left Wrist Y'+leftWristY);
  rightWristX = results[0].pose.rightWrist.x;
  rightWristY = results[0].pose.rightWrist.y;
  console.log('Right Wrist X '+rightWristX+'Right Wrist Y'+leftWristY)
}
}
