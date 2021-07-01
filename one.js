pic= "";
status="";
object=[];




function preload(){
    pic=loadImage("Family.jpg")
}

function setup(){
canvas= createCanvas(300,200)
canvas.center()
objectdetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="status:object detected";

}

function modelLoaded(){
    console.log("Model Loaded Successfully")
    status=true;
    objectdetector.detect(pic,gotresult)
}   

function gotresult(error,results){
if(error){
    console.error(error)
}
    console.log(results)

    object=results;
}

function draw(){
    image(pic,0,0,300,200)
    if(status!=""){
        for(i=0;i<object.length;i++){
            document.getElementById("status").innerHTML="status:object detected";
        position_y=object[i].y
        position_x=object[i].x
        confidence=object[i].confidence
        width=object[i].width
        height=object[i].height
        name_object=object[i].label 
        percent=floor( confidence*100)
        fill("#1ff0c6")
       text(name_object+""+percent+"%" ,position_x+15,position_y+15)
       noFill() 
       stroke ("red")
       rect(position_x,position_y,width,height)//x,y,wid,hei

        }
        }

    }
    function back(){
        window.location="main.html"
    }

