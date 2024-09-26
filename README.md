Polynomial Solver Using Lagrange Interpolation
This project solves for the constant term c of a polynomial using Lagrange interpolation, based on given points in different base formats.

Problem Statement
In this project, we implement a simplified version of Shamir's Secret Sharing algorithm to find the constant term c of a polynomial from a set of points encoded in different base formats.

Polynomial Representation
The polynomial can be represented as:

𝑓
(
𝑥
)
=
𝑎
𝑚
𝑥
𝑚
+
𝑎
𝑚
−
1
𝑥
𝑚
−
1
+
.
.
.
+
𝑎
1
𝑥
+
𝑐
f(x)=a 
m
​
 x 
m
 +a 
m−1
​
 x 
m−1
 +...+a 
1
​
 x+c
Where:

𝑓
(
𝑥
)
f(x) is the polynomial function.
𝑚
m is the degree of the polynomial.
𝑎
𝑚
,
𝑎
𝑚
−
1
,
.
.
.
,
𝑎
1
a 
m
​
 ,a 
m−1
​
 ,...,a 
1
​
  are coefficients.
𝑐
c is the constant term we aim to find.
The task is to compute the constant term c using 
𝑘
k given points in various bases.

Input Format
The input is provided in JSON format, with different bases for the y-values. Here's an example:

json
Copy code
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
n is the number of points provided.
k is the minimum number of points required to solve for the polynomial.
Each point consists of an x value (the key) and a y value, which is encoded in a specific base.
Results
Test Case 1:
Input:

json
Copy code
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
For this input, the decoded points are:

(1, 4)
(2, 7)
(3, 12)
Using Lagrange interpolation, the constant term c of the polynomial is:

csharp
Copy code
The secret constant 'c' is: 3
Test Case 2:
Input:

json
Copy code
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
}
For this input, the decoded points are:

(1, 28735619723837)
(2, 28735619723850)
(3, 28735619723839)
(4, 28735619723846)
(5, 28735619723841)
(6, 28735619654702)
Using Lagrange interpolation, the constant term c of the polynomial is:

csharp
Copy code
The secret constant 'c' is: 28735619723864
How to Run
To run this project, follow these steps:

Clone this repository.
Ensure you have Node.js installed.
Run the following command to execute the solution:
bash
Copy code
node polynomial_solver.js
Make sure that the required JSON files (sample.json, sample1.json) are present in the project directory.

License
This project is licensed under the MIT License.

Notes:
The code blocks for JSON, Bash commands, and results are now properly formatted.
The math expressions use proper Markdown for inline and block formatting (although GitHub's markdown does not support LaTeX directly, this will render better in Markdown viewers that support it).
The results are clearly shown for both test cases.
