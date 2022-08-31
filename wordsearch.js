const transpose = function(matrix) {
    let result = [];
    for (let row = 0; row < matrix[0].length; row ++) {
      let tmpList = [];
      for (let col = 0; col < matrix.length; col ++) {
        tmpList.push(matrix[col][row]);
      }
      result.push(tmpList);
    }
    return result;
  };


const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = transpose(letters).map(item => item.join(''))

    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    for (item of verticalJoin) {
        if (item.includes(word)) return true
    }
    return false;
}

module.exports = wordSearch