nose_x= 0;
nose_y= 0;

function preload()
{
  clown_nose=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function take_snapshot()
{
  save("student_png");
}

function setup()
{
  canvas=createCanvas(400, 400);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(400,400);
  video.hide();
  poseNet=ml5.poseNet(video, modelLoaded);
  poseNet.on("pose",gotPoses);
}

function draw()
{
  image(video,0,0,400,400);
  //fill(255,0,0);//
  //stroke(255,0,0)//
  //circle(nose_x, nose_y, 55,);//
  image(clown_nose,nose_x-45,nose_y-25,100,75);
}

function modelLoaded()
{
  console.log("Model Loaded!");
}

function gotPoses(results)
{
   if (results.length > 0)
   {
     console.log(results);
     nose_x= results[0].pose.nose.x;
     nose_y= results[0].pose.nose.y;
     console.log("Nose X =" + nose_x);
     console.log("Nose Y =" + nose_y);
   }
}