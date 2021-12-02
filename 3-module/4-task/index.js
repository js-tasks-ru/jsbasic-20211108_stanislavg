function showSalary(users, age) {
  const filteredArr = users.filter(user => user.age <= age);

  const changedArr = filteredArr.map(user => `${user.name}, ${user.balance}`);

  const str = changedArr.join('\n');

  return str;
}
