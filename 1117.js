let resultado = document.getElementById("mediaResultado")

function calcularMedia(){
 let n1 = Number(document.getElementById("n1").value)
 let n2 = Number(document.getElementById("n2").value)

 if(n1>=0 && n1 <=10 && n2>=0 && n2<=10){
   let media = (n1+n2)/2
   resultado.innerHTML = "Media: " + media
 }else{
    alert("As notas não estão validas ")
 }


}