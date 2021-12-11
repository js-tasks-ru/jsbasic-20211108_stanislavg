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
