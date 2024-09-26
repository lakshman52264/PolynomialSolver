# Polynomial Solver Using Lagrange Interpolation

This project solves for the constant term `c` of a polynomial using Lagrange interpolation. The input points are provided in a JSON format, where the y-values are encoded in different bases.

## Example Input
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
