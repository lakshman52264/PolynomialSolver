# Polynomial Solver Using Lagrange Interpolation

This project solves for the constant term `c` of a polynomial using Lagrange interpolation. The input points are provided in a JSON format, where the y-values are encoded in different bases.

## Example Input  Test-case-1
```json
{
    "keys": {
        "n": 4,
        "k": 3
    },
    "1": {
        "base": "10",
        "value": "4"
    },
    "2": {
        "base": "2",
        "value": "111"
    },
    "3": {
        "base": "10",
        "value": "12"
    },
    "6": {
        "base": "4",
        "value": "213"
    }
}
```
# Result for the Above Input
### The secret constant 'c' is: 3
![image](https://github.com/user-attachments/assets/861d32c5-7524-460c-807c-29f78d9f896d)


## Example Input Test-case-2
```json
{
    "keys": {
        "n": 9,
        "k": 6
    },
    "1": {
        "base": "10",
        "value": "28735619723837"
    },
    "2": {
        "base": "16",
        "value": "1A228867F0CA"
    },
    "3": {
        "base": "12",
        "value": "32811A4AA0B7B"
    },
    "4": {
        "base": "11",
        "value": "917978721331A"
    },
    "5": {
        "base": "16",
        "value": "1A22886782E1"
    },
    "6": {
        "base": "10",
        "value": "28735619654702"
    },
    "7": {
        "base": "14",
        "value": "71AB5070CC4B"
    },
    "8": {
        "base": "9",
        "value": "122662581541670"
    },
    "9": {
        "base": "8",
        "value": "642121030037605"
    }
```
# Result for the Above Input
### The secret constant 'c' is: 28735619723864
![image](https://github.com/user-attachments/assets/57fcc8ce-208d-477e-96bd-c27b419f8355)


