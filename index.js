class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^a-zA-Z1-9-' ]/g, '').trim()
  }

  static titleize(string){
    let conjunctions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let newString = Formatter.capitalize(string)
    return newString.split(' ').map(word => {
      if (!conjunctions.some(x => x === word)){
        return Formatter.capitalize(word)
        // word.charAt(0).toUpperCase() + word.slice(1) 
      }
      return word
    }).join(' ')
  }
}