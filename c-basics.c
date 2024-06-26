/*
In C you use functions to solve the problem
'main' function is executed by default
header file - stdio.h = standard input and output
header file - string.h = necessary to manipulate strings
 */

#include <stdio.h>
#include <string.h>

int printMessage(char a[])
{
    size_t len = strlen(a);
    if (len > 0)
    {
        printf("String is %s\r\n", a);
    }
}

int main()
{
    printf("Hello world");

    char a[6] = "hello";
    printf("\nYour string is: %s\r\n", a);

    /*
    Functions
    - Parameters are optional.
    - Functions are declared before main func.
     */
    printMessage(a);

    return 0;
}