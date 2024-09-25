#include <stdio.h>

int main()
{
    // int n = 10;
    int n = 1;
    int arr[n];
    int i = 0;
    int num = 1;
    while(i != n){
        if(num == 1){
            arr[i] = num;
            i++;
        }
        else if(num%2 == 0 || num%3 == 0 || num%5 == 0){
            arr[i] = num;
            i++;
        }
        num++;
    }
    // for(int j = 0;j < i;j++){
    //     printf("%d  ",arr[j]);
    // }
    printf("%d",arr[i-1]);
    return 0;
}