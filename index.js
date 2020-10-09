// findMatching
const findMatching = (drivers, string) => {
  return drivers.filter(name => 
    name.toUpperCase() === string.toUpperCase()
  )
}

// fuzzyMatch
const fuzzyMatch = (drivers, string) => {
  return drivers.filter(name => 
    
  )
}

// matchName
const matchName = (drivers, string) => {
  return drivers.filter(result => result.name === string)
}
