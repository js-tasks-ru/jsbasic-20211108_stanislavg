function sumSalary(salaries) {
  let sum = 0;

  for (let salary of Object.values(salaries)) {

    if (typeof salary === 'number' && !!isFinite(salary)) {
      sum += salary;
    }
  }

  return sum;
}

let salaries = {
  John: 1000,
  Ann: 1000,
  Pete: 1000,
};

sumSalary(salaries);
