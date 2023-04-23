import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class Que1 {

    static void binarySearch(double key, ArrayList<Double> l1) {

            if (l1.contains(key)) {
                System.out.println("key found ");
                return;
            }
        
            System.out.println("key not found");
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number of companies");
        int N;
        double p;
        N = sc.nextInt();
        int m = 1;
        ArrayList<Double> l = new ArrayList<>();
        int f = 0, t = 0;
        while (m <= N) {
            System.out.println("Enter the current stock price of company " + m);
            p = sc.nextDouble();
            l.add(p);
            System.out.println("Whether company's stock price rose today compare to yesterday?\n");
            boolean b = sc.nextBoolean();
            if (b == true)
                t++;
            else if (b == false)
                f++;
            m++;
        }
        int choice;
        while (true) {
            System.out.println("***********************************************************");
            System.out.println(
                    "1. Display the companies stock prices in ascending order\r\n"
                            + "2. Display the companies stock prices in descending order\r\n"
                            + "3. Display the total no of companies for which stock prices rose today\r\n"
                            + "4. Display the total no of companies for which stock prices declined today\r\n"
                            + "5. Search a specific stock price\r\n" + "6. press 0 to exit");
            System.out.println("***********************************************************");
            System.out.println("Enter the choice");
            int c = sc.nextInt();
            switch (c) {
                case 1: {
                    System.out.println(" stock in ascending order");
                    Collections.sort(l);
                    for (double list : l)
                        System.out.println(list);
                    break;
                }
                case 2: {
                    System.out.println("stock in descending  order");
                    Collections.sort(l, Collections.reverseOrder());
                    for (double list : l)
                        System.out.println(list);
                    break;
                }
                case 3: {
                    System.out.println("Total no of companies whose stock price rose today");
                    System.out.println(t);
                    break;

                }
                case 4: {
                    System.out.println("Total no of companies whose stock price declined today");
                    System.out.println(f);
                    break;

                }
                case 5: {
                    double key;
                    System.out.println("Enter the key");
                    key = sc.nextDouble();
                    binarySearch(key, l);
                    break;
                }
                case 0: {
                    sc.close();
                    return;
                }
                default:
                    System.out.println("WRONG CHOICE");
            }
        }
    }
}
