public class SpecialIndex {
    public static void main(String args[]){
        int[] A = {4,3,2,7,6,-2};
        System.out.println(SpecialIndex(A));
    }

    public static int SpecialIndex(int[] A){
        int N = A.length;
        int[] peven = new int[N];
        int[] podd = new int[N];
        peven[0] = A[0];
        podd[0] = 0;
        for(int i=1; i<N; i++){
            if((i&1) != 1){
                peven[i] = peven[i-1] + A[i];
                podd[i] = podd[i-1];
            }else{
                peven[i] = peven[i-1];
                podd[i] = podd[i-1] + A[i];
            }
        }
        for(int i=0; i<N; i++){
            int evenSum = 0;
            int oddSum = 0;
            if(i==0){
                evenSum = podd[N-1] - podd[i];
                oddSum = peven[N-1] - peven[i];
            }else{
                evenSum = peven[i-1] + podd[N-1] - podd[i];
                oddSum = podd[i-1] + peven[N-1] - peven[i];
            }
            if(evenSum == oddSum){
                return i;
            }
        }
        return -1;
    }
}