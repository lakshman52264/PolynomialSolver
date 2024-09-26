Polynomial Solver Using Lagrange Interpolation
This project solves for the constant term c of a polynomial using Lagrange interpolation, based on given points in different base formats.

Problem Statement
In this project, we implement a simplified version of Shamir's Secret Sharing algorithm to find the constant term c of a polynomial from a set of points encoded in different base formats.

Polynomial Representation
The polynomial can be represented as:

f(x) = a_m * x^m + a_(m-1) * x^(m-1) + ... + a_1 * x + c

Where:

f(x) is the polynomial function.
m is the degree of the polynomial.
a_m, a_(m-1), ..., a_1 are the coefficients.
c is the constant term we aim to find.
The task is to compute the constant term c using k given points in various bases.

Input Format
The input is provided in JSON format, with different bases for the y-values.

n is the number of points provided.
k is the minimum number of points required to solve for the polynomial.
Each point consists of an x value (the key) and a y value, which is encoded in a specific base.
Results
Test Case 1:
For this input, the decoded points are:

(1, 4)
(2, 7)
(3, 12)
Using Lagrange interpolation, the constant term c of the polynomial is:

The secret constant 'c' is: 3

Test Case 2:
For this input, the decoded points are:

(1, 28735619723837)
(2, 28735619723850)
(3, 28735619723839)
(4, 28735619723846)
(5, 28735619723841)
(6, 28735619654702)
Using Lagrange interpolation, the constant term c of the polynomial is:

The secret constant 'c' is: 28735619723864

How to Run
To run this project, follow these steps:

Clone this repository.
Ensure you have Node.js installed.
Run the project.
Make sure that the required JSON files are present in the project directory.
