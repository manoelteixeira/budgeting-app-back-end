// helpers/dataHelpers.js

/**
 * Return the index of the object for the given ID
 * @param {Array} data
 * @param {String} id
 * @returns {Number}
 */
function getDataIndex(data, id) {
  for (idx in data) {
    if (data[idx].id == id) {
      return idx;
    }
  }
  return -1;
}

module.exports = { getDataIndex };
