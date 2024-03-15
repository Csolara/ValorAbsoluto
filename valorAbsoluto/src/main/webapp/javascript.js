/**
 * 
 */

 function fun1(){
	 let numero1 = prompt("Escribe un numero");
	 
	 let numero2;
	 
	 if(numero1 < 0){
		 numero2 = numero1 * -1;
	 }else{
		 numero2 = numero1;
	 }
	 
	 document.write(numero2);
 }