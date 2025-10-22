public class carryForward{

// ------- Count of 'ag' pairs in given string ----------
    public static int countOfAgPairs (String A){
        int N = A.length();
        int pairs = 0;
        int count = 0;
        for(int i=0; i<N; i++){
            char ch = A.charAt(i);
            if(ch == 'a'){
                count++;
            }
            if(ch == 'g'){
                pairs+=count;
            }
        }
        return pairs;
    }

//---------------- count of even numbers in given range -----------
    public static int[] countOfEven (int[] A, int[][] B){
        int N = A.length;
        int M = B.length;
        int[] pcount = new int[N];
        if(A[0] % 2 == 0){
            pcount[0] = 1;
        }else{
            pcount[0] = 0;
        }
        for(int i=1; i<N; i++){
            if(A[i] % 2 == 0){
                pcount[i] = pcount[i-1] + 1;
            }else{
                pcount[i] = pcount[i-1];
            }
        }

        int[] ans = new int[M];
        for(int i=0; i<M; i++){
            int l = B[i][0];
            int r = B[i][1];
            int count = 0;
            if(l == 0){
                count = pcount[r];
            }else{
                count = pcount[r] - pcount[l-1];
            }
            ans[i] = count;
        }
        return ans;
    }

    public static void main(String args[]){
        String A = "abcgdavdgge";
        int[] B = {1,2,3,4,5,6};
        int[][] C = {{0,2},{1,5}};

        int[] result = countOfEven(B,C);

        System.out.println(countOfAgPairs(A)); // 5

        for(int count : result){
            System.out.print(count+" "); // 1 3
        }
    }
}