#include <stdio.h>

int main()
{
    int arr[] = {1,1};
    // int arr[] = {6,0,3,3,6,7,2,7};
    int count = 1;
    int index = -1;
    int n = sizeof(arr)/sizeof(arr[0]);
    for(int i = 0;i < n-1;i++){
        if(arr[i] != arr[i+1])
            break;
        if(i == n-2)
            count++;
    }
    for(int i = 0;i < n;i++){
        if(arr[i] == 0){
            index = i;
        }
    }
    if(index != -1)
        count++;

    int selected = 0;
    for(int i = 0;i < n;i++){
        if(arr[i] < (n/2)){
            selected++;
        }
    }
    if(selected == n/2)
        count++;
    printf("%d",count);
    return 0;
}