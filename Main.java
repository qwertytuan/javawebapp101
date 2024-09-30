package abc;
class stringdg {
String name;
}

public class Main {

    public static void main(String[] args) {
        stringdg str = new stringdg();
        str.name = "Hello";
  if (str.name == null) {
            str.name = "Hello";
        } else {
           
            System.out.println(str.name);
            str.name = "World";
  }
        System.out.println(str.name);
    }
}
