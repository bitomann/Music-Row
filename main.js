// // Your job is to sign each of these promising young music stars to the appropriate label.

const recordLabels = [
    "JumpStop Records",
    "Chatten Records",
    "Polar Records"
];
console.log(recordLabels)

// Create a factory function for each possible genre (e.g. createBluegrassArtist()). Then invoke the appropriate function for each of the following artists and place the resulting object in the corresponding label array.

// vvv FACTORY FUNCTIONS vvv //
// Factory Function for Funk artist
const createFunkArtist = (name, age) => ({
    "name": name,
    "age": age,
    "genre": "Funk"
})


// Factory Function for Rap artist
const createRapArtist = (name, age) => ({
    "name": name,
    "age": age,
    "genre": "Rap"
})

// Factory Function for Country artist
const createCountryArtist = (name, age) => ({
    "name": name,
    "age": age,
    "genre": "Country"
})

// Factory Function for Bluegrass artist
const createBluegrassArtist = (name, age) => ({
    "name": name,
    "age": age,
    "genre": "Bluegrass"
})

// Factory Function for Pop artist
const createPopArtist = (name, age) => ({
    "name": name,
    "age": age,
    "genre": "Pop"
})


// vvv CREATING ARTIST OBJECTS vvv //
// Bruce Atikins is a Country artist and is 23 years old
const bruceAtkins = createCountryArtist("Bruce Atkins", 23)

// Jensen Brown is a Pop artist and is 20 years old
const jensenBrown = createPopArtist("Jensen Brown", 20)

// Dre Funkz is a Funk artist and is 25 years old
const dreFunkz = createFunkArtist("Dre Funkz", 25)

// Dusta Grimes is a Rap artist and is 21 years old
const dustaGrimes = createRapArtist("Dusta Grimes", 21)

// Bartholomew Danielson is a Bluegrass artist and is 23 years old
const bartholomewDanielson = createBluegrassArtist("Bartholomew Danielson", 23)

// Avilee Dallas is a Country artist and is 19 years old
const avileeDallas = createCountryArtist("Avilee Dallas", 19)

// Austin Kinkaid is a Pop artist and is 22 years old
const austinKinkaid = createPopArtist("Austin Kinkaid", 22)

// Loyoncé Branis is a Rap artist and is 27 years old
const loyncéBranis = createRapArtist("Loyoncé Branis", 27)


// vvv ALL ARTISTS ARRAY vvv //
const allArtists = [bruceAtkins, jensenBrown, dreFunkz, dustaGrimes, bartholomewDanielson, avileeDallas, austinKinkaid, loyncéBranis]

// JumpStop Records works with Funk and Rap artists.
const jumpStopRecords = allArtists.filter(artist => {
    let isFunkOrRap = false
    
    if (artist.genre === "Funk" || artist.genre === "Rap") {
        isFunkOrRap = true
    }
    
    return isFunkOrRap
})
console.log("JumpStop Records: ", jumpStopRecords)

// Chatten Records works with Country and Bluegrass artists.
const chattenRecords = allArtists.filter(artist => {
    let isCountryOrBluegrass = false
    
    if (artist.genre === "Country" || artist.genre === "Bluegrass") {
        isCountryOrBluegrass = true
    }
    
    return isCountryOrBluegrass
})
console.log("Chatten Records: ", chattenRecords)

// Polar Records works with Pop artists.
const polarRecords = allArtists.filter(artist => {
    let isPop = false
    
    if (artist.genre === "Pop") {
        isPop = true
    }
    
    return isPop
})
console.log("Polar Records: ", polarRecords)