public class EquiIndex{
    public static void main(String args[]){
        int[] A = {-7,1,5,2,-4,3,0};
        System.out.println("Equilibrium Index");
        System.out.println(equiIndex(A));
    }

    public static int equiIndex(int[] A){
        int N = A.length;
        int[] psum = new int[N];
        psum[0] = A[0];
        for(int i=1; i<N; i++){
            psum[i] = psum[i-1] + A[i];
        }

        for(int i=0; i<N; i++){
            int leftSum = (i==0) ? 0 : psum[i-1];
            int rightSum = psum[N-1] - psum[i];
            if(leftSum == rightSum){
                return i;
            }
        }
        return -1;
    }
}