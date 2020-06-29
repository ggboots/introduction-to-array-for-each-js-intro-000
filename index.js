// Add your doToElementsInArray() function here:

function doToElementsInArray(array, callback){
  array.forEach(callback)
}
// Add your changeCompletely() function here:
function changeCompletely(array, element, index) {
  array[index] = Math.floor(Math.random() * 100 + 2).toString() + 1 ${array[index]};
}
