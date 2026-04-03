require('datejs')

function combineUsers(...args) {
  combinedObject = {
    users: [],
    merge_date: ''
  }
  
  combinedObject.merge_date = new Date().toString('M/d/yyyy')

  args.forEach(singleArray => {
    combinedObject.users.push(...singleArray)
  })
  return combinedObject
}



module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};