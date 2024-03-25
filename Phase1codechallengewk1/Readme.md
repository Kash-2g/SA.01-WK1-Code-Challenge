# Net Salary Calculator

This program is designed to calculate an individual's net salary based on the provided inputs of basic salary and benefits. It also calculates the payee (tax), NHIF deductions, NSSF deductions, gross salary, and net salary. The tax rates used in this program are sourced from the Kenya Revenue Authority (KRA), and the NHIF and NSSF rates are based on publicly available information.

## Usage

1. Open the `index.html` file in a web browser.
2. Enter the basic salary and benefits in the respective input fields.
3. Click the "Calculate Net Salary" button.
4. The program will then display the calculated gross salary, payee (tax), NHIF deductions, NSSF deductions, and net salary below the input fields.

## Features



- Calculates gross salary based on the sum of basic salary and benefits.
- Calculates payee (tax) using KRA tax rates.
- Calculates NHIF deductions based on salary ranges.
- Calculates NSSF deductions based on a fixed rate.
- Displays detailed breakdown of salary components.
- Responsive design for ease of use on various devices.

## Resources


- [KRA Tax Rates](https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye)
- [NHIF Rates](https://www.aren.co.ke/payroll/taxrates.htm)
- [NSSF Rates](https://www.aren.co.ke/payroll/taxrates.htm)



# Speed Demerit Points Calculator

This JavaScript program calculates demerit points for a speeding driver based on the provided speed of the car. It follows the rules:

- If the speed is less than 70 km/h, it prints "Ok".
- For every 5 km/h above the speed limit (70 km/h), it gives the driver one demerit point.
- If the driver accumulates more than 12 demerit points, it prints "License suspended".

## Usage

1. Copy the provided JavaScript code into your project or create a new JavaScript file.
2. Call the `calculateDemeritPoints()` function with the speed of the car as the argument.
3. The function will print the appropriate message based on the provided speed.

```javascript
// Example usage:
calculateDemeritPoints(80); // Output: "Points: 2"
calculateDemeritPoints(65); // Output: "Ok"
calculateDemeritPoints(110); // Output: "License suspended"


# Grade Calculator

This simple HTML program calculates the grade based on the student's marks.

## How to Use

1. Open the `index.html` file in a web browser.
2. Enter the student's marks in the input field (0-100).
3. Click the "Calculate Grade" button.
4. The corresponding grade will be displayed on the webpage.

## Grade Criteria

- A: Marks greater than 79
- B: Marks between 60 and 79
- C: Marks between 50 and 59
- D: Marks between 40 and 49
- E: Marks less than 40

## Author

This program was developed by [Kaarshe Hassan].

## License

This project is licensed under the [MIT License](LICENSE).