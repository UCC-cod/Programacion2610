public class Persona {
    //Encapsulamiento
    private String nombre;
    //Los protegidos solo son accedidos desde las clases hijas - Herencia
    protected int edad;

    //Constructores
    //Polimorfismo
    public Persona() {
    }

    public Persona(String nombre) {
        this.nombre = nombre;
    }

    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    //Encapsulamiento
    //Métodos get
    public String getNombre() {
        return nombre;
    }
    public int getEdad() {
        return edad;
    }

    //Métodos Set
    public void setEdad(int edad) {
        this.edad = edad;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    //Acciones de la clase - Métodos
    void saludar(){
        System.out.println("hola, me llamo: " + this.nombre);
    }

    void consultarEdad(){
        System.out.println("La edad es: " + this.edad);
    }

    String informacion(){
        return this.nombre + " " + this.edad;
    }
}