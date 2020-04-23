
<<<<<<< HEAD


=======
>>>>>>> 49b6139c313561f2fec465481a531816908101c1
function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value

  return obj
}

function deleteFromObjectByKey(object, key) {
   var newObj = Object.assign({}, object)
   delete newObj[key]

   return newObj
 }

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]

  return object
}
