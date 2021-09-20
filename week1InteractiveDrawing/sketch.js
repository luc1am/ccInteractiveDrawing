var rad = 50;
function setup() {
  createCanvas(600,600);
}

function draw() {
  background(200,200,255);
  strokeWeight(10);
  fill(100,100,100);
  text("hey, you might want to avoid those circles...",
  100,100);
  for (let i = 50; i<600; i+=100){
    for (let j = 50; j<600; j+=100){
      strokeWeight(0);
      //shadow
      fill(180,180,255);
      ellipse(i+10,j+10,rad,rad);
      //circle itself
      fill(199, 99, 169);
      ellipse(i,j, rad,rad);
      //face
      fill(100,50,100);
      arc(i-10,j-10,10,10,0,PI+QUARTER_PI, CHORD);
      arc(i+10,j-10,10,10, 0-QUARTER_PI, PI, CHORD);
      arc(i,j+10,10,10, PI, 0, OPEN);
      //light reflection
      // fill(255, 245, 212,100);
      // ellipse(i-10, j-10, 15,15);
      // fill(255, 245, 212,100);
      // ellipse(i-10, j-10, 10,10);
      // fill(255, 245, 212,100);
      // ellipse(i-11, j-11, 8,8);
      // fill(255, 245, 212,100);
      // ellipse(i-11, j-11, 6,6);
    }
  }
  //describes the position of the mouse in
  //              relation to circle's grid
  var gridXpos = mouseX%100;
  var gridYpos = mouseY%100;
  //
  //print("mousex:", gridXpos);//test if it works
  //which grid number the mouse is in (0,1,2,...)
  var gridXnum = floor(mouseX/100);
  var gridYnum = floor(mouseY/100);
  //circle equation
  if ((sq(gridXpos-50)+sq(gridYpos-50))<sq(25)){
    //fill(199, 99, 169);
    noFill();
    strokeWeight(10);
    stroke(199, 99, 169)
    ellipse((gridXnum*100+50),gridYnum*100+50, 50,50);
    noStroke();
    //text bubble
    fill(255,255,255);
    ellipse(gridXnum*100+50, gridYnum*100+10, 90,20)
    triangle(gridXnum*100+70, gridYnum*100+10,
      gridXnum*100+90, gridYnum*100+5,
      gridXnum*100+80, gridYnum*100+30,);
    fill(0);
    text("GET OFF!!!", gridXnum*100+15, gridYnum*100+15);
    //strokeWeight(13);
  }

}
