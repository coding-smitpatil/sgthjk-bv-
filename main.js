song1="";
song2="";
song1status="";
song2status="";
leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;


function preload(){
    song1=loadSound("1.mp3");
    song2=loadSound("2.mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on("pose",getposes);
}

function draw(){
    image(video,0,0,600,500);
}
function play(){
    song1.play();
    song1.setVolume(1);
    song1.rate(1);
}

function modelloaded(){
    console.log("posenetisinniatialized");
}

function getposes(results){
if(results.length>0)
{console.log(results);
leftwristx=results[0].pose.leftWrist.x;
leftwristy=results[0].pose.leftWrist.y;
rightwristx=results[0].pose.rightWrist.x;
rightwristy=results[0].pose.rightWrist.y;
}
}

