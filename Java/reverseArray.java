public class reverseArray{

    public static int[] reverseArray(int[] A){
        int N = A.length;
        int i = 0;
        int j = N-1;
        while(i<j){
            int temp = A[i];
            A[i] = A[j];
            A[j] = temp;
            i++;
            j--;
        }
        return A;
    }
    public static void main(String args[]){
        int[] A = {1,2,3,4};
        int[] result = reverseArray(A);

        for(int res : result){
            System.out.print(res+" ");
        }
    }
}