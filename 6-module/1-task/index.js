/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = null; // DOM
    this.templateTable = this.templateTable(); // table -string
    this.templateToElements(this.templateTable); // table DOM
    this.addHandler();

  }

  buttonHandler(e) {
    if (e.target.nodeName === 'BUTTON') {
      e.target.parentElement.parentElement.remove();
    }
  }

  addHandler() {

    this.elem.addEventListener('click', this.buttonHandler);
  }

  templateTable() {
    return (
      `<table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${this.createRows()}
        </tbody>
      </table>`
    );
  }

  templateToElements(template) { // string -> DOM
    const newElement = document.createElement('div');
    newElement.innerHTML = template;

    this.elem = newElement.firstChild;
  }

  createRows() {
    return (
      this.rows.map(el => this.templateRow(el)).join('')
    );
  }

  templateRow(el) {
    return (`
      <tr>
        <td>${el.name}</td>
        <td>${el.age}</td>
        <td>${el.salary}</td>
        <td>${el.city}</td>
        <td><button>X</button></td>
      </tr>
    `);
  }

  handlerClickRemove(e) {
    if (e.target === 'button') {
      e.remove(); // del <tr>
    }
  }

  handelEvent(tr) {
    tr.addEventListener('click', handlerClickRemove);
  }
}
