import java.util.Arrays;

public class nobleInteger{

    public static int nobleInDistinct(int[] A) {
        int N = A.length;
        Arrays.sort(A);
        int noble = 0;
        for(int i=0; i<N; i++){
            if(A[i] == i){
                noble++;
            }
        }
        return (noble>0) ? noble : -1;
    }

    public static int nobleInNonDistinct(int[] A){
        int N = A.length;
        Arrays.sort(A);
        int noble = 0;
        int count_smaller = 0;
        if(A[0] == 0) noble++;
        for(int i=1; i<N; i++){
            if(A[i] != A[i-1]){
                count_smaller = i;
            }
            if(count_smaller == A[i]){
                noble++;
            }
        }
        return (noble > 0) ? noble : -1;
    }

    public static int nobleNonDistinctRev (int[] A){
        int N = A.length;
        Arrays.sort(A);
        int noble = 0;
        int count_greater = 0;
        if(A[N-1] == 0) noble++;
        for(int i=0; i<N-1; i++){
            if(A[i] == A[i+1]){
                continue;
            }
            count_greater = N-i-1;
            if(count_greater == A[i]){
                noble++;
            }
        }
        return (noble > 0) ? noble : 0;
    }

    public static void main(String args[]){
        int[] A = {3,2,1,4,0};
        int[] B = {3,2,1,3};
        
        System.out.println(nobleInDistinct(A));
        System.out.println(nobleInNonDistinct(B));
        System.out.println(nobleNonDistinctRev(B));
        
    }
}