function highlight(table) {

  for (let row of table.rows) {
    for (let cell of row.cells) {
      if (cell.dataset.available == "true") {
        row.classList.add('available');
      // } else if ()) {
      //   row.setAttribute("hidden", true);
      } else if (cell.dataset.available == "false") {
        row.classList.add('unavailable');
      }
      if (cell.textContent == "m") {
        row.classList.add('male');
      }
      if (cell.textContent == "f") {
        row.classList.add('female');
      }

      if (cell.textContent <= 18) {
        row.style.textDecoration = 'line-through';
      }
    }
  }
}
