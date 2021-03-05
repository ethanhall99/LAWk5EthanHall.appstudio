// string

let quoteString = "Failure is simply the opportunity to begin again this time more intelligently."
let authorString = "- Henry Ford"

quoteString = quoteString.toUpperCase()
console.log(`Upper case string is: ${quoteString}`)

let completeString = quoteString.concat(authorString)

let searchWord = "Henry"
found = completeString.includes(searchWord)

if (found == true)
    console.log(`${searchWord} was in the complete string.`)
else
    console.log(`${searchWord} was NOT in the complete string.`)