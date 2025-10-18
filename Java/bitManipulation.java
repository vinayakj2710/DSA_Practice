public class bitManipulation {
    public static int binaryToDecimal (int N) {
        int dec = 0;
        int power = 1;
        while( N!=0 ){
            int r = N%10;
            dec += power*r;
            power *= 2;
            N = N/10;
        }
        return dec;
    }

    public static int decimalToBinary (int N) {
        int bin = 0;
        int power = 1;
        while( N!=0 ){
            int r = N%2;
            bin += power*r;
            power *= 10;
            N = N/2;
        }
        return bin;
    }

    public static void main(String args[]) {
        int A = 1011;
        int B = 11;
        System.out.println(binaryToDecimal(A));
        System.out.println(decimalToBinary(B));
    }
}