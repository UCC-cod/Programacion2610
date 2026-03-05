public class Main{
    public static void main(String[] args) {
        Persona persona1 = new Persona();
        Persona persona2 = new Persona("Ana", 15);
        Persona persona3 = new Persona("Juan");
        Persona persona4 = new Persona();
        Persona persona5 = new Persona("Andrés", 18);

        System.out.println(persona2);
        persona2.consultarEdad();
        persona5.saludar();

        String informacion = persona2.informacion();
        System.out.println(informacion);

        System.out.println("información de Ana");
        System.out.println("Edad antes de: " + persona2.getEdad());
        persona2.setEdad(16);
        System.out.println("Edad luego de utilizar el método set: " + persona2.getEdad());





    }
}

