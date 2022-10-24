# JavaScript DevTools Part 1 Responses

## Kenny Nguyen

### Q1

num1 and num2 are saved as strings, which results in string appendment instead of arithmetic addition. As a result, 23 is returned by calculateSum instead of 5.

### Q2

To fix the bug, convert num1 and num2 into numbers before adding them to result. This allows for arithmetic addition to occur instead of string appendment.
The fixed code can be found in fix.png.