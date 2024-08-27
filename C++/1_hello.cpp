#include <iostream>
using namespace std;

class employee
{
    private:   // can't be acces outside so use method
        int a, b, c;

    public:  // can be accessed any where 
        int d, e;

    void setdata(int a, int b, int c);
    void getdata(){
        cout<<a<<endl;
        cout<<b<<endl;
        cout<<c<<endl;
        cout<<d<<endl;
        cout<<e<<endl;
    }
};

void employee::setdata(int a1, int b1, int c1)
{
    a = a1;
    b = b1;
    c = c1;
}

int main()
{
    employee harry;
    harry.setdata(1,2,3);
    harry.d = 4;
    harry.e = 5;
    harry.getdata();
    return 0;
}