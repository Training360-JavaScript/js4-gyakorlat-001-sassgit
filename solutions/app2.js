const sorterPromise = arrayOfStrings => new Promise((resolve, reject) => {
  if (!Array.isArray(arrayOfStrings) || !arrayOfStrings.every(e => typeof e == 'string'))
    reject('Error: Not all elements are string type!');
  else resolve(arrayOfStrings.sort());
});





export default sorterPromise;
