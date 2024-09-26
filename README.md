# Polynomial Solver Using Lagrange Interpolation

This project solves for the constant term `c` of a polynomial using Lagrange interpolation, based on a set of given points in different base formats.

## Problem Statement

In this project, we implement a simplified version of Shamir's Secret Sharing algorithm to find the constant term `c` of a polynomial from a set of points encoded in different base formats.

## Polynomial Representation

The polynomial is represented as: f(x) = a_m * x^m + a_(m-1) * x^(m-1) + ... + a_1 * x + c


Where:
- `f(x)` is the polynomial function.
- `m` is the degree of the polynomial.
- `a_m, a_(m-1), ..., a_1` are the coefficients of the polynomial.
- `c` is the constant term we aim to find.

The task is to compute the constant term `c` using `k` given points, where each point consists of an x-value and a y-value encoded in a specific base.

## Input Format

The input is provided in JSON format with the following structure:
- `n`: the number of points provided.
- `k`: the minimum number of points required to solve for the polynomial.
- `points`: a list of points where each point contains:
  - `x`: the x-value.
  - `y`: the y-value, which is encoded in a specific base format.

Example JSON input:
```json
{
  "n": 3,
  "k": 3,
  "points": [
    {"x": 1, "y": "100"},
    {"x": 2, "y": "111"},
    {"x": 3, "y": "1100"}
  ]
}


