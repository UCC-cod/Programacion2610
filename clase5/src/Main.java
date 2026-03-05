import java.util.Scanner;
void main (){
    System.out.println("Hola mundo");


    double precio = 10.2;
    boolean isActivo = true;
    String nombre = "Valery";
    Double precioTotal = 20.6;

    System.out.println("Mi nombre es: " + nombre);

    int num1 = 1;
    int num2 = 2;

    System.out.println("Suma : " + (num1+num2));
    System.out.println("Resta : " + (num2-num1));
    System.out.println("Multiplicación : " + (num1*num2));
    System.out.println("División : " + (num2/num1));
    System.out.println("Modulo :" + (num1%num2));

    /*
    * Sentencia de control
    **/

    int edad = 19;
    //if(edad >= 18) System.out.println("Es mayor de edad");
    if(edad >=18){
        System.out.println("Es mayor de edad");
    }else{
        System.out.println("Es menor de edad");
    }

    int dia = 3;
    switch (dia){
        case 1:
            System.out.println("Lunes");
            break;
        case 2:
            System.out.println("Martes");
            break;
        case 3:
            System.out.println("Miércoles");
            break;
        default:
            System.out.println("Día no válido");
    }

    for (int i = 1; i <= 5; i++) {
        System.out.println("Iterador" + i);
    }

    int contador = 3;
    while (contador > 0){
        System.out.println("Contador: " + contador);
        contador--;
    }

    int numero = 1;
    do {
        System.out.println("Número en do while: " + numero);
        numero++;
    }while(numero <=5);

    //Instanciar : crear un obecto de una clase
    Scanner sc = new Scanner(System.in);
    System.out.println("Uso de la entrada de texto: ");
    String entrada = sc.nextLine();
    System.out.println("Entrada de texto " + entrada);
}



