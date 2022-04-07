noseX = 0;
noseY = 0;
function preload() {
clown_nose = loadImage('https://i.postimg.cc/NjqPn84h/clown-img.png');
}
function setup() {
    canvas = createCanvas(300, 300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide()
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is initialized");
}
function gotPoses(resuts){
    if (resuts.length > 0){
        console.log(resuts);
        noseX = resuts[0].pose.nose.x -10;
        noseY = resuts[0].pose.nose.y -10;
        console.log("Nose x =" + noseX);
        console.log("Nose y =" + noseY);
    }

}

function draw() {
image(video,0,0,300,300);

image(clown_nose, noseX, noseY, 30, 30);
}


function take_snapshot() {
    save("myFilterImage.png")
}