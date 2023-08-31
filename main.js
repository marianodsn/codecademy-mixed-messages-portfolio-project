// generates a random number between 0 -> 4
const generateRandomNumber = (num) => Math.floor(Math.random() * 5);

// create an object for sneaker combination options
const sneakerOptions = {
    sneakerStyle: ['Jordan 1 Low', 'Jordan 1 High', 'Nike AirMax 1', 'Veja', 'Adidas Stan Smith'],
    occasion: ['casual walk', 'night out', 'work meeting', 'sneaker convention', 'sporting event'],
    sneakerPurpose: ['complimenting your look', 'creating a style pop', 'helping you get comments', 'because you have not worn them in a while', 'you should show off your new add']
}

// create array that will be used to display the message to user
let sneakerSelection = []; 

// iterate over the sneakerOptions object
for (let prop in sneakerOptions) {
    let indexSelect = generateRandomNumber(sneakerOptions[prop].length); 
    switch (prop) {
        case 'sneakerStyle':
            sneakerSelection.push(`You should wear your ${sneakerOptions[prop][indexSelect]}.`);
            break;
        case 'occasion':
            sneakerSelection.push(`They are a pretty good selection for a ${sneakerOptions[prop][indexSelect]}.`);
            break;
        case 'sneakerPurpose':
            sneakerSelection.push(`They might be a good choice ${sneakerOptions[prop][indexSelect]}.`);
            break;
        default: 
            sneakerSelection.push('There is not enough information.')
    }
}

let formatSneakerSelect = (selection) => {
    const formatted = sneakerSelection.join('\n')
    console.log(formatted)
}

const sneakerAsciiArt = `                                
                                                         888                             
                                                         888                             
                                                         888                             
                         .d8888b 88888b.  .d88b.  8888b. 888  888 .d88b. 888d888.d8888b  
                         88K     888 "88bd8P  Y8b    "88b888 .88Pd8P  Y8b888P"  88K      
                         "Y8888b.888  88888888888.d888888888888K 88888888888    "Y8888b. 
                              X88888  888Y8b.    888  888888 "88bY8b.    888         X88 
                          88888P'888  888 "Y8888 "Y888888888  888 "Y8888 888     88888P'
                          `

console.log(sneakerAsciiArt);
formatSneakerSelect(sneakerSelection);