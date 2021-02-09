import java.util.Scanner;



public class Main{



   public static void main(String[] args) throws IOException {

     Scanner teclado = new Scanner(System.in);

     double x = teclado.nextDouble();

       for (int i = 2 ; i <= x ; i++) {

         if (i %2==0) System.out.println(i);

      }

   }

}
