noseX=0;
noseY=0;

function setup() {
canvas=createCanvas(600,500);
canvas.position(400,200);
video=createCapture(VIDEO);
video.size(600,500);
video.hide();

posenet=ml5.poseNet(video,ModelLoad);
posenet.on('pose',gotPoses);
}
function ModelLoad() {
 console.log("Posenet is Initialised");
}
function preload() {
clown_nose=loadImage('https://i.postimg.cc/2SFZ62Ns/114-1147898-clown-nose-png-clip-art-clown-nose-transparent.png');
}

function draw() {
image(video,0,0,600,500);
image(clown_nose,noseX,noseY,30,30);
}
function take_snapshot() {
  save('clown-nose-photo.png')
}

function gotPoses(results) {
if(results.length>0) {
  console.log(results);
  console.log("Nose X = "+results[0].pose.nose.x);
  console.log("Nose Y = "+results[0].pose.nose.y);
  noseX=results[0].pose.nose.x-15;
  noseY=results[0].pose.nose.y-15;
}
}