const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  rows.push(character);
}

let result = ""

for (const row of rows) {
  result = row + "\n" + result;
}

console.log(result);