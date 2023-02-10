video ="";
status = "";
objects = [];

function preload() {
    video = createVideo("video.mp4");
    video.hide();
}
function setup() {
  canvas = createCanvas(480,380);
canvas.position(200,90);

}
function draw() {
    image(video, 0, 0, 480, 380);
    if(status !="") {
        objectDetected.detect(video, gotresults);
for(i=0; i<objects.length; i++) {
document.getElementById("status").innerHTML = "Status : Object Detected";
document.getElementById("number_of_objects").innerHTML="Number of objects detected are : "+objects.length;
fill("red")
percent = floor(objects[i].confidence*100);
text(objects[i].label+" "+percent+"%",objects[i].x+15, objects[i].y+15);
noFill();
stroke("red");
rect(objects[i].x, objects[i].y,objects[i].width, objects[i].height);
}
    }

}
function start() {
    objectDetected = ml5.objectDetector("cocossd").moldelLoded;
    document.getElementById("status").innerHTML ="Status :detecting object";
}
function moldelLoded(){
    console.log("model loaded");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
    
}
function gotresults(error, results) {
    if(error) {
        console.log(error);

    }
    console.log(results);
    objects = results;

}