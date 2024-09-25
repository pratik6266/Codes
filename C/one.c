#include <stdio.h>
int max(int a,int b){
    if(a > b){
        return a;
    }
    return b;
}
int main()
{
    // int arr[] = {1,2,3,1};
    int arr[] = {2,7,9,3,1};
    int n = sizeof(arr)/sizeof(arr[0]);
    int sum = 0;
    int c = 0;
    for(int i = 0;i < n;i++){
        sum = 0;
        for(int j = i;j < n;j++){
            sum = sum + arr[j];
            j++;
        }
        c = max(sum,c);
        // printf("%d %d\n",sum,c);
    }
    printf("%d",c);
}