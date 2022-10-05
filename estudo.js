let tabuada = 2;
function escreva(){
    document.write("<h1> tabuada do " + tabuada + "</h1>");
    document.write(tabuada + " x 1 = " + (tabuada*1) + "<br>")
    document.write(tabuada + " x 2 = " + (tabuada*2) + "<br>");
    document.write(tabuada + " x 3 = " + (tabuada*3) + "<br>");
    document.write(tabuada + " x 4 = " + (tabuada*4) + "<br>");
    document.write(tabuada + " x 5 = " + (tabuada*5) + "<br>");
    document.write(tabuada + " x 6 = " + (tabuada*6) + "<br>");
    document.write(tabuada + " x 7 = " + (tabuada*7) + "<br>");
    document.write(tabuada + " x 8 = " + (tabuada*8) + "<br>");
    document.write(tabuada + " x 9 = " + (tabuada*9) + "<br>");
    document.write(tabuada + " x 10 = " + (tabuada*10) + "<br>");
    }

    let lista =("Jesus", "Spessato","Duarte","jorge","Neuza","Gilmar","jossyara");

function mostraLista(){
    document.write("tamanho da lista: " + lista.length + "<br");
    document.write("professor: " + lista[1]+ "<br>");
    for(let i = 0; i < lista.length; 1++){
        document.write("professor: "+ lista[1] + "<br>");
    }
}

function multiplica(){
    for(let i = 6; i <= 8; i++){
       document.write("Tabuada do " + i + "<br>")
       for(let j = 1; j <= 10; j++){
        document.write(i + " x "+j+" = " + (i*j) + "<br>");
       }
    }
}
