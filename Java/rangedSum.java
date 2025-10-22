public class rangedSum{

    public static int[] rangedSum(int[] A, int[][] B){
        int N = A.length;
        int M = B.length;
        int[] psum = new int[N];
        psum[0] = A[0];
        for(int i=1; i<N; i++){
            psum[i] = psum[i-1] + A[i];
        }

        int[] ans = new int[M];
        for(int i=0; i<M; i++){
            int l = B[i][0];
            int r = B[i][1];
            int sum = 0;
            if(l == 0){
                sum = psum[r];
            }else{
                sum = psum[r] - psum[l-1];
            }
            ans[i] = sum;
        }
        return ans;
    }

    //------------- Even Indexed element sum

    public static int[] evenSum(int[] A, int[][] B){
        int N = A.length;
        int M = B.length;
        int[] psum = new int[N];
        psum[0] = A[0];
        for(int i=1; i<N; i++){
            if(i%2 == 0){
                psum[i] = psum[i-1] + A[i];
            }else{
                psum[i] = psum[i-1];
            }
        }

        int[] ans = new int[M];
        for(int i=0; i<M; i++){
            int l = B[i][0];
            int r = B[i][1];
            int sum = 0;
            if(l == 0){
                sum = psum[r];
            }else{
                sum = psum[r] - psum[l-1];
            }
            ans[i] = sum;
        }
        return ans;
    }

    //------------- Odd Indexed element sum

    public static int[] oddSum(int[] A, int[][] B){
        int N = A.length;
        int M = B.length;
        int[] psum = new int[N];
        psum[0] = 0;
        for(int i=1; i<N; i++){
            if(i%2 != 0){
                psum[i] = psum[i-1] + A[i];
            }else{
                psum[i] = psum[i-1];
            }
        }

        int[] ans = new int[M];
        for(int i=0; i<M; i++){
            int l = B[i][0];
            int r = B[i][1];
            int sum = 0;
            if(l == 0){
                sum = psum[r];
            }else{
                sum = psum[r] - psum[l-1];
            }
            ans[i] = sum;
        }
        return ans;
    }

    public static void main(String args[]){
        int[] A = {1,2,3,4,5};
        int[][] B = {{0,2},{1,4}};

        int[] res1 = rangedSum(A,B);
        int[] res2 = evenSum(A,B);
        int[] res3 = oddSum(A,B);

        for(int sum : res1){
            System.out.print(sum+" "); // 6,14
        }
        System.out.println();
        for(int sum : res2){
            System.out.print(sum+" "); // 4,8
        }
        System.out.println();
        for(int sum : res3){
            System.out.print(sum+" "); // 2,6
        }
    }
}