module.exports = function reverse (n) {
  n = n.toString().split("").reverse().join("");
  n = /\d+/g.exec(n);
  return n;
}
