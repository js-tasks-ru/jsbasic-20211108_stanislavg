// function highlight(table) {

//   for (let row of table.rows) {
//     for (let cell of row.cells) {
//       if (cell.dataset.available === "true") {
//         row.classList.add('available');
//       // } else if ()) {
//       //   row.setAttribute("hidden", true);
//       } else if (cell.dataset.available === "false") {
//         row.classList.add('unavailable');
//       }
//       if (cell.textContent === "m") {
//         row.classList.add('male');
//       }
//       if (cell.textContent === "f") {
//         row.classList.add('female');
//       }

//       if (cell.textContent <= 18) {
//         row.style.textDecoration = 'line-through';
//       }
//     }
//   }
// }

function highlight(table) {

  for (i = 1; i < table.rows.length; i++) {
    let age = table.rows[i].cells[1];
    let gender = table.rows[i].cells[2];
    let status = table.rows[i].cells[3];

    if (age.textContent <= 18) {
      age.parentElement.style.textDecoration = 'line-through';
    }

    if (gender.textContent === "m") {
      age.parentElement.classList.add('male');
    }

    if (gender.textContent === "f") {
      age.parentElement.classList.add('female');
    }

    if (status.dataset.available === "true") {
      age.parentElement.classList.add('available');
    }

    if (status.dataset.available === "false") {
      age.parentElement.classList.add('unavailable');
    }

    if (!status.dataset.available) {
      status.parentElement.setAttribute("hidden", true);
    }
  }
}
