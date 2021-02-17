const secrets = require("secrets.js-grempe")

const data_a = JSON.stringify([
  {name: "foo", a: 1, b: 2},
  {name: "bar", a: 1, b: 2}
]);
const data_b = JSON.stringify([
  {name: "baz", a: 2, b: 2},
  {name: "foofoo", a: 2, b: 2},
]);

const hex_a = secrets.str2hex(data_a)
const shares_a = secrets.share(hex_a, 5, 3)
const hex_b = secrets.str2hex(data_b)
const shares_b = secrets.share(hex_b, 5, 3)

const comb_a = secrets.combine([shares_a[0], shares_a[1], shares_a[2]])
const comb_b = secrets.combine([shares_b[0], shares_b[1], shares_b[2]])

console.log(JSON.parse(secrets.hex2str(comb_a)))
console.log(JSON.parse(secrets.hex2str(comb_b)))
