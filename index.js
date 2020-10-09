// findMatching
const findMatching = (drivers, string) => {
  return drivers.filter(name => 
    name.toUpperCase() === string.toUpperCase()
  )
}

// fuzzyMatch
const fuzzyMatch = (drivers, string) => {
  return drivers.filter(name => 
    name.charAt(0) === string.charAt(0)
  )
}

// matchName
const matchName = (drivers, string) => {
  return drivers.filter(result => result.name === string)
}
