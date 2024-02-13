
//setup
let cnv= document.getElementById("myCanvas")
var ctx = cnv.getContext("2d")
cnv.width = 900;
cnv.height = 900;

//sky
ctx.fillStyle = "blue";
ctx.fillRect ( 0,0,900,900);

//grass
ctx.fillStyle = "green";
ctx.fillRect ( 0, 550, 900, 900);

//cabin body

ctx.fillStyle = "brown";
ctx.fillRect ( 250, 310, 450,250);

//cabin roof
ctx.fillStyle =  "RGB( 72,38,38)"
ctx.fillRect ( 250, 200,450,165);

ctx.beginPath();
ctx.fillStyle = "RGB( 153,102,79)";
ctx.moveTo(250, 365);
ctx.lineTo(322, 200);
ctx.lineTo(350, 200);
ctx.lineTo(440, 365);
ctx.fill();

//chimney
ctx.fillStyle =  "RGB( 72,38,38)"
ctx.fillRect ( 575, 150,50,50);

//window

ctx.fillStyle = "lightblue"
ctx.fillRect ( 577,400,75,75)


ctx.fillStyle = "RGB( 255,206,184)"
ctx.fillRect(613,400,5,75);
ctx.fillRect ( 577, 436,75,5);

//door
ctx.fillStyle = "black";
ctx.fillRect (340,460,70,100);

ctx.fillStyle = "white";
ctx.fillRect ( 390,525,5,5);


//tree

let treeImg = document.getElementById("tree");
ctx.drawImage (treeImg, 0, 170, 350, 400);
ctx.drawImage (treeImg, 50, 300, 300, 300);
ctx.drawImage (treeImg, 650, 290, 300, 300);
