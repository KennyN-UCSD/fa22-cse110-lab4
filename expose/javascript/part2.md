# JavaScript Expose Part 2 Responses

## Kenny Nguyen

### Q1

3 will be logged to the console because the variable i is within the function scope and has the value 3 when console.log(i) is run.

### Q2

150 will be logged to the console because the variable discountedPrice is within the function scope and has the value 150 when console.log(discountedPrice) is run on line 13.

### Q3

150 will be logged to the console because the variable finalPrice is within the function scope and has the value 150 when console.log(finalPrice) is run on line 14.

### Q4

[ 50, 100, 150 ]
The function returns the discounted array at the end of the function's runtime.

### Q5

An error is caused because variable i is outside of line 12's block scope. As a result, an error stating i is not defined is printed.

### Q6

An error is caused because variable discountedPrice is outside of line 13's block scope. As a result, an error stating discountedPrice is not defined is printed.

### Q7

150 will be logged to the console because the variable finalPrice is within line 14's block scope and has the value 150 when console.log(finalPrice) is run on line 14.

### Q8

[ 50, 100, 150 ]
The function returns the discounted array at the end of the function's runtime.
The discounted array is within the return function at line 16's block scope and is thus able to be returned.

### Q9

An error is caused because variable i is outside of line 11's block scope. As a result, an error stating i is not defined is printed.

### Q10

3 will be logged to the console because the variable length is within line 12's block scope and has the value 3 when console.log(length) is run on line 12.

### Q11

[ 50, 100, 150 ]
The function returns the discounted array at the end of the function's runtime.
The discounted array is within the return function at line 14's block scope and is thus able to be returned.
Even though the discounted array variable is const, discounted is not being reassigned, only changed, which does not result in an error.

### Q12

1. student.name
2. student['grad year']
3. student.greeting()
4. student['Favorite Teacher'].name
5. student.courseLoad[0]

### Q13

A:  32

* Integers mapped to string representation due to an addition operation and the use of string '3' and an integer, leading to 32.

B:  1

* Integers do not map to string representation because of an arithmetic operation (subtraction), leading to 3 - 2.

C:  3

* null maps to number 0 because of an arithmetic operation (subtraction), leading to 3 + 0.

D:  3null

* '3' and null mapped to string representation due to an addition operation and the use of string '3', leading to the string 'null' being appended to string '3'.

E:  4

* true is mapped to integer 1 and an arithmetic operation (addition) is performed with a number (3), leading to 1 + 3.

F:  0

* false and null are mapped to integer 0 and an arithmetic operation (addition) is performed, leading to 0 + 0.

G:  3undefined

* '3' and underfined mapped to string representation due to an addition operation and the use of string '3', leading to the string 'undefined' being appended to string '3'.

H:  NaN

* '3' is mapped to integer 3 because of an arithmetic operation (subtraction) and is subtracted by number undefined. Arithmetic operations with undefined yield 'NaN'.

### Q14

A:  true

* String '2' is converted to number 2, which is greater than number 1, yielding true.

B:  false

* String '2' and '12' are both being compared so no number conversion occurs. The first character of '2' is not less than the first character of '12', yielding false.

C:  true

* Regular equality check == converts '2' to number 2, which is equal to 2 yielding true.

D:  false

* Strict equality check === does not convert types and comparing two different types yields false.

E:  false

* true is mapped to integer 1 which is not equal to 2.

F:  true

* true is mapped to integer 1 while Boolean(2) is mapped to 1, making both values equal and thus yielding true.

### Q15

The == operator is a regular equality check which converts types to numbers while the === is a strict equality check which does not convert types. This means that using === will only yield true if both sides of the comparison are equal and of the same type before conversion. This results in '0' == 0 being true and '0' === 0 being false.

### Q16

Full solution found in part2-question16.js

```js
for (const prop in statistics) {
    let currPropVal = statistics[prop];
    if (prop.charAt(0) == 'r') {
        console.log(prop + ': ' + currPropVal);
    }
    if (currPropVal % 2) {
        console.log(prop + "'s value is odd.");
    }
}
```

### Q17

The array [2,4,6] will be returned because the array returned by modifyArray is the contents of the parameter array [1,2,3] modified by the callback function doSomething. In this case, doSomething multiplies the contents of the parameter array by 2 yielding the array [2,4,6].

### Q18

Full solution found in part2-question18.js

```js
function printTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(printTime, 1000);
```

### Q19

1
4
3
2

1 and 4 are printed before 3 and 2 because they do not hae timeouts set. 2 has a longer timeout delay than 3 which prints it later than 3.
