module.exports = function reverse (n) {
    let reversed = n.toString().split("").reverse().join("");
    reversed = parseInt(reversed);
  
    if (n < 0) {
      return reversed ;
    }
    return reversed;
}
