public class numberOfFactors{
    public static int factors (int N){
        int count = 0;
        if(N == 0) return 0;
        for(int i=1; i*i<=N; i++){
            if(N % i == 0){
                if(N/i == i){
                    count++;
                }else{
                    count+=2;
                }
            }
        }
        return count;
    }
    public static void main(String args[]){
        System.out.print(factors(49));
    }
}