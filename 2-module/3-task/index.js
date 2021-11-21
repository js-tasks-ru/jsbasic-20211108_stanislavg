let calculator = {
  read(a, b) {
    consolelog(this.a = +prompt("Введите значение 1", 0));
    consolelog(this.b = +prompt("Введите значение 2", 0));
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  }
};

calculator.read();
console.log(calculator.sum()); // 8
console.log(calculator.mul()); // 15

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
