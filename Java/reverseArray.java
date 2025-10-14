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
    /* T.C = O(N) --- S.C = O(1) */

//-----------Reverse Part of an Array---------------------------//

    public static int[] revPartArray (int[] A, int si, int ei){  
        // si - Start index, ei - End index
        int N = A.length;
        while(si < ei){
            int temp = A[si];
            A[si] = A[ei];
            A[ei] = temp;
            si++;
            ei--;
        }
        return A;
    }
    /* T.C = O(N) --- S.C = O(1) */

//---------------- Rotate an array K times ----------------------------------//

    public static int[] reverseKtimes(int[] A, int K){
        int N = A.length;
        K = K % N;
        revPartArray(A, 0, N-1);
        revPartArray(A, 0, K-1);
        revPartArray(A, K, N-1);
        return A;
    }
    /* T.C = O(N) --- S.C = O(1) */

    public static void main(String args[]){
        int[] A = {1,2,3,4};
        int[] B = {5,6,7,8};
        int[] C = {9,10,11,12};

        int[] result = reverseArray(A);

        for(int res : result){
            System.out.print(res+" ");
        }
        System.out.println("");

        int[] result2 = revPartArray(B, 1, 2);

        for(int res2 : result2){
            System.out.print(res2+" ");
        }
        System.out.println("");

        int[] result3 = reverseKtimes(C, 2);

        for(int res3 : result3){
            System.out.print(res3+" ");
        }
    }
}