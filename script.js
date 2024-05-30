const board = document.getElementById("board");
const table = document.getElementById("tableBoard");

for (let y = 0; y < 8; y++) {
  const trElement = document.createElement("tr");
  for (let x = 0; x < 8; x++) {
    const tdElement = document.createElement("td");
    if ((x + y) % 2 === 0) {
      tdElement.classList.add("sev");
    } else {
      tdElement.classList.add("spitak");
    }
    trElement.append(tdElement);
  }
  table.append(trElement);
}
