/* 
In C you use functions to solve the problem
'main' function is executed by default
header file - stdio.h = standard input and output
 */

#include <stdio.h>

int printmsg(char a[]) {
    printf("String is %s\r\n", a);
}

int main() {
    printf("Hello world");

    char a[6] = "hello";
    printf("\nYour string is: %s\r\n", a);

/* 
Functions
- Parameters are optional.
- Functions are declared before main func.
 */
    printmsg(a);

    return 0;
}