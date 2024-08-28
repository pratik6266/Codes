#include <iostream>
using namespace std;

class complex
{
    int real;
    int img;

    public: 

        friend void sum(complex a, complex b); // private or public don't matter

        void set()
        {
            cout<<"Enter real part: ";
            cin>>real;
            cout<<"Enter imaginary part: ";
            cin>>img;
        }

        void display()
        {
            cout<<real<<" + "<<img<<"i"<<endl;
        }       
};

void sum(complex a, complex b)
{
    int x = a.real + b.real;
    int y = a.img + b.img;
    cout<<x<<" + "<<y<<"i"<<endl;
}

int main()
{
    complex a ,b ,c;
    a.set();
    a.display();
    b.set();
    b.display();
    sum(a,b);
    return 0;
}