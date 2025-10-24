import java.util.*;

public class subArrays{
    //------------ Print sub array in a given range --------
    public static int[] subArray(int[] A, int si, int ei){
        int len = ei-si+1;
        int[] ans = new int[len];
        for(int i=si; i<=ei; i++){
            ans[i - si] = A[i];
        }
        return ans;
    }

    //--------- print all possible subarrays --------------
    public static ArrayList<int []> allSubArrays (int[] A){
        ArrayList<int []> ans = new ArrayList<int []>();
        for(int i=0; i<A.length; i++){
            for(int j=i; j<A.length; j++){
                ans.add(subArray(A, i, j));
            }
        }
        return ans;
    }

    public static void main(String args[]){
        int[] A = {1,2,3,4,5};

        int[] result = subArray(A, 1, 3);
        for(int num : result){
            System.out.print(num + " ");
        }

        System.out.println("");

        ArrayList<int[]> result2 = allSubArrays(A);

        for(int[] num : result2){
            System.out.print(Arrays.toString(num)+" ");
        }
    }
}