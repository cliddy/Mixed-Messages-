const quote1 = 'Keep your face always toward the sunshine - and shadows will fall behind you. - Walt Whitman'
const quote2 = 'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller'
const quote3 = "Nothing is impossible, the word itself says 'I'm possible'! - Audrey Hepburn"
const quote4 = 'The best preparation for tomorrow is doing your best today. - H. Jackson Brown, Jr.'
const quote5 = 'It is never too late to be what you might have been. - George Eliot'

const numInQuestion = [quote1, quote2, quote3, quote4, quote5];

num = [];

const zodiacSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpius', 'Sagittarius', 'Capricornus', 'Aquarius', 'Pisces'];

let randNum = Math.floor(Math.random()*5);

let randNum2 = Math.floor(Math.random()*12)



let randLat = Math.random()*90.0000000;
let randLong = Math.random()*180.0000000;



let randLatPosNeg = Math.floor(Math.random()*2)
let randLongPosNeg = Math.floor(Math.random()*2)



if (randLatPosNeg === 0){
    randLatPosNeg = -1;
} else {
    randLatPosNeg;
}

if (randLongPosNeg === 0){
    randLongPosNeg = -1;
} else {
    randLongPosNeg;
}

const randLatCoord = randLat * randLatPosNeg;
const randLongCoord = randLong * randLongPosNeg;


num.push(randNum);

num.push(randNum2);


if (num[0] === 0){
    console.log(quote1);
} else if (num[0] === 1){
    console.log(quote2);
} else if (num[0] === 2){
    console.log(quote3);
} else if (num[0] === 3){
    console.log(quote4);
} else{
    console.log(quote5);
}


if (num[1] === 0){
    console.log(`Astrology Sign: ${zodiacSigns[0]}`);
} else if (num[1] === 1){
    console.log(`Astrology Sign: ${zodiacSigns[1]}`);
} else if (num[1] === 2){
    console.log(`Astrology Sign: ${zodiacSigns[2]}`);
} else if (num[1] === 3){
    console.log(`Astrology Sign: ${zodiacSigns[3]}`);
} else if (num[1] === 4){
    console.log(`Astrology Sign: ${zodiacSigns[4]}`);
} else if (num[1] === 5){
    console.log(`Astrology Sign: ${zodiacSigns[5]}`);
} else if (num[1] === 6){
    console.log(`Astrology Sign: ${zodiacSigns[6]}`);
} else if (num[1] === 7){
    console.log(`Astrology Sign: ${zodiacSigns[7]}`);
} else if (num[1] === 8){
    console.log(`Astrology Sign: ${zodiacSigns[8]}`);
} else if (num[1] === 9){
    console.log(`Astrology Sign: ${zodiacSigns[9]}`);
} else if (num[1] === 10){
    console.log(`Astrology Sign: ${zodiacSigns[10]}`);
} else{
    console.log(`Astrology Sign: ${zodiacSigns[11]}`);
} 

console.log(`Coordinates: Latitude: ${randLatCoord}, Longitude: ${randLongCoord}`)