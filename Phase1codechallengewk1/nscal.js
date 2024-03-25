
function calculateNetSalary() {
  var basicSalary = parseFloat(document.getElementById("basicSalary").value);
  var benefits = parseFloat(document.getElementById("benefits").value);

  var kraTaxRates = {
    'band1': { 'min': 0, 'max': 24000, 'rate': 10 },
    'band2': { 'min': 24001, 'max': 32333, 'rate': 15 },
    'band3': { 'min': 32334, 'max': 40333, 'rate': 20 },
    'band4': { 'min': 40334, 'max': 48333, 'rate': 25 },
    'band5': { 'min': 48334, 'max': Infinity, 'rate': 30 }
  };

  var nssfRate = 0.06; // NSSF contribution rate
  var nhifRates = {
    'band1': { 'min': 0, 'max': 5999, 'amount': 150 },
    'band2': { 'min': 6000, 'max': 7999, 'amount': 300 },
    'band3': { 'min': 8000, 'max': 11999, 'amount': 400 },
    'band4': { 'min': 12000, 'max': 14999, 'amount': 500 },
    'band5': { 'min': 15000, 'max': 19999, 'amount': 600 },
    'band6': { 'min': 20000, 'max': 24999, 'amount': 750 },
    'band7': { 'min': 25000, 'max': 29999, 'amount': 850 },
    'band8': { 'min': 30000, 'max': 34999, 'amount': 900 },
    'band9': { 'min': 35000, 'max': 39999, 'amount': 1000 },
    'band10': { 'min': 40000, 'max': 44999, 'amount': 1100 },
    'band11': { 'min': 45000, 'max': 49999, 'amount': 1200 },
    'band12': { 'min': 50000, 'max': 59999, 'amount': 1300 },
    'band13': { 'min': 60000, 'max': 69999, 'amount': 1400 },
    'band14': { 'min': 70000, 'max': 79999, 'amount': 1500 },
    'band15': { 'min': 80000, 'max': 89999, 'amount': 1600 },
    'band16': { 'min': 90000, 'max': 99999, 'amount': 1700 },
    'band17': { 'min': 100000, 'max': Infinity, 'amount': 1800 }
  };

  // Calculate NHIF Deductions
  var nhifDeductions = calculateNHIFDeductions(basicSalary + benefits, nhifRates);

  // Calculate NSSF Deductions
  var nssfDeductions = basicSalary * nssfRate;

  // Calculate Gross Salary
  var grossSalary = basicSalary + benefits;

  // Calculate PAYE (Tax)
  var payee = calculatePAYE(grossSalary, kraTaxRates);

  // Calculate Net Salary
  var netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

  document.getElementById("result").innerHTML = "Gross Salary: " + grossSalary.toFixed(2) + "<br>" +
                                                  "PAYE (Tax): " + payee.toFixed(2) + "<br>" +
                                                  "NHIF Deductions: " + nhifDeductions.toFixed(2) + "<br>" +
                                                  "NSSF Deductions: " + nssfDeductions.toFixed(2) + "<br>" +
                                                  "Net Salary: " + netSalary.toFixed(2);
}

function calculateNHIFDeductions(salary, nhifRates) {
  for (var band in nhifRates) {
    if (salary >= nhifRates[band].min && salary <= nhifRates[band].max) {
      return nhifRates[band].amount;
    }
  }
  return 0;
}

function calculatePAYE(salary, kraTaxRates) {
  var payee = 0;
  for (var band in kraTaxRates) {
    if (salary > kraTaxRates[band].min && salary <= kraTaxRates[band].max) {
      payee = (salary - kraTaxRates[band].min) * (kraTaxRates[band].rate / 100);
      break;
    } else if (salary > kraTaxRates[band].max) {
      payee += (kraTaxRates[band].max - kraTaxRates[band].min) * (kraTaxRates[band].rate / 100);
    }
  }
  return payee;
}