var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
var x = 200;
var y = 100;
var auxX = 8;
var auxY = 0;

function gerar_cor_hexadecimal() {
    return '#' + parseInt((Math.random() * 0xFFF))
        .toString(16)
        .padStart(3, '0');
}

function animate () {
    requestAnimationFrame(animate);

    c.clearRect(0,0,innerWidth,innerHeight);

    c.fillStyle = gerar_cor_hexadecimal();
    c.fillRect(200,x,200,200);

    if ((x + 200) > innerHeight){
        auxX = -auxX;
    }
     
    else if(x<0) auxX=-auxX;

    x = x+auxX;
    
}

animate();

function Speed () {
   animate ();
}

/*
//Desafio 1 
for (var i = 0; i < 10; i++) {

    auxX = x + auxX; //Reposiciona em X

    //Quadrado
    c.fillStyle = 'rgba(0,255,0,0.5)'; //Escolhe a cor
    c.fillRect(auxX, 200, 25, 25); //Posiciona em X, Y e depois o tamanho

    //Linha
    c.beginPath(); //InÃ­cio do comando
    c.moveTo(auxX,25 ); //InÃ­cio da linha
    c.lineTo(auxX, 100); //Final da linha
    c.strokeStyle = "purple"; //DefiniÃ§Ã£o da cor
    c.stroke(); //Executa o desenho

    //CÃ­rculo
    c.beginPath();
    c.arc(auxX, 400, 20, 0, Math.PI * 2, false);
    c.strokeStyle = "red";
    c.stroke();

}



//Desafio 2
for (var i = 0; i < 10; i++) {

    auxX = Math.random()*500 + Math.random()*50; //Reposiciona em X
    auxY = Math.random()*150 + Math.random()*300; //Reposiciona em Y

    //Quadrado
    c.fillStyle = "blue"; //Escolhe a cor
    c.fillRect(auxX, auxY, 25, 25); //Posiciona em X, Y e depois o tamanho

    //Linha
    c.beginPath(); //InÃ­cio do comando
    c.moveTo(auxX-Math.random()*50, x + auxX); //InÃ­cio da linha
    c.lineTo(auxX-Math.random()*50, y + auxY); //Final da linha
    c.strokeStyle = "purple"; //DefiniÃ§Ã£o da cor
    c.stroke(); //Executa o desenho

    //CÃ­rculo
    c.beginPath();
    c.arc(auxX, auxY*Math.random(), 20, 0, Math.PI * 2, false);
    c.strokeStyle = "red";
    c.stroke();
}



//Desafio 3
for (var i = 0; i < 10; i++) {

    auxX = Math.random() * 500 + Math.random() * 50; //Reposiciona em X
    auxY = Math.random() * 150 + Math.random() * 300; //Reposiciona em Y

    //Quadrado
    c.beginPath();
    c.fillStyle = gerar_cor_hexadecimal(); //Escolhe a cor
    c.fillRect(auxX, auxY, 25, 25); //Posiciona em X, Y e depois o tamanho

    //Linha
    c.beginPath(); //InÃ­cio do comando
    c.moveTo(auxX - Math.random() * 50, x + auxX); //InÃ­cio da linha
    c.lineTo(auxX - Math.random() * 50, y + auxY); //Final da linha
    c.strokeStyle = gerar_cor_hexadecimal(); //DefiniÃ§Ã£o da cor
    c.stroke(); //Executa o desenho

    //CÃ­rculo
    c.beginPath();
    c.arc(auxX, auxY * Math.random() * 5, 20, 0, Math.PI * 2, false);
    c.strokeStyle = gerar_cor_hexadecimal();
    c.stroke();
}

//Desafio 4
//CÃ­rculo
for (var i = 0; i < 30; i++) {

    auxX = Math.random() * 500 + Math.random() * 50; //Reposiciona em X
    auxY = Math.random() * 150 + Math.random() * 300; //Reposiciona em Y

    //CÃ­rculo
    c.beginPath();
    c.arc(auxX, auxY*Math.random(),Math.random()* 25, 0, Math.PI * 2, false);
    c.strokeStyle = gerar_cor_hexadecimal();
    c.stroke();
}

//coração
function draw() {
    if (canvas.getContext){
      var ctx = canvas.getContext('2d');
      // Quadratric curves example
      ctx.beginPath();
      ctx.moveTo(75,40);
      ctx.bezierCurveTo(75,37,70,25,50,25);
      ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
      ctx.bezierCurveTo(20,80,40,102,75,120);
      ctx.bezierCurveTo(110,102,130,80,130,62.5);
      ctx.bezierCurveTo(130,62.5,130,25,100,25);
      ctx.bezierCurveTo(85,25,75,37,75,40);
      ctx.fill();
    }
}

//simbolo do batman
var batman = document.getElementById('canvas');

c.ellipse(1000, 500, 900, 500, 0, 0, 2 * Math.PI);
c.fillStyle = "#FFEB3B";
c.fill();
c.closePath();

c.beginPath();
c.moveTo(1000, 800);
c.quadraticCurveTo(1000, 460, 1390, 650);
c.quadraticCurveTo(1400, 490, 1650, 650);
c.quadraticCurveTo(1400, 250, 1300, 250);
c.lineTo(1275, 350);
c.lineTo(1075, 400);
c.lineTo(1060, 300);
c.lineTo(1030, 360);
c.lineTo(1000, 365);
c.lineTo(970, 360);
c.lineTo(940, 300);
c.lineTo(925, 400);
c.lineTo(725, 350);
c.lineTo(700, 250);
c.quadraticCurveTo(600, 250, 350, 650);
c.quadraticCurveTo(600, 490, 590, 650);
c.quadraticCurveTo(1000, 460, 1000, 800);
c.lineWidth = 2;
c.fillStyle = "#212121";
c.fill();

//estrela

c.beginPath(); {
    c.moveTo(75,40);
    c.bezierCurveTo(75,37,70,25,50,25);
    c.bezierCurveTo(20,25,20,62.5,20,62.5);
    c.bezierCurveTo(20,80,40,102,75,120);
    c.bezierCurveTo(110,102,130,80,130,62.5);
    c.bezierCurveTo(130,62.5,130,25,100,25);
    c.bezierCurveTo(85,25,75,37,75,40);
    c.fill();
    } 

    function drawStar(cx,cy,spikes,outerRadius,innerRadius){
      var rot=Math.PI/2*3;
      var x=cx;
      var y=cy;
      var step=Math.PI/spikes;

      c.beginPath();
      c.moveTo(cx,cy-outerRadius)
      for(i=0;i<spikes;i++){
        x=cx+Math.cos(rot)*outerRadius;
        y=cy+Math.sin(rot)*outerRadius;
        c.lineTo(x,y)
        rot+=step

        x=cx+Math.cos(rot)*innerRadius;
        y=cy+Math.sin(rot)*innerRadius;
        c.lineTo(x,y)
        rot+=step
      }
      
      c.lineTo(cx,cy-outerRadius);
      c.closePath();
      c.lineWidth=5;
      c.strokeStyle=gerar_cor_hexadecimal();
      c.stroke();
      c.fillStyle=gerar_cor_hexadecimal();
      c.fill();
    }
       drawStar(600,100,5,30,15);
*/