const { BadRequestError } = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  // if the conversion isn't successful, throw a BadRequestError and will
  // be handled in your route
  let numArray = [];
  for (let str of strNums) {
    if (Number.isNaN(Number(str))) {
      throw new BadRequestError(`${str} is not a number.`)
    } else {
       numArray.push(Number(str));
    }
  }
  return numArray;
}


module.exports = { convertStrNums };