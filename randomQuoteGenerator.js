const quote1 = 'Keep your face always toward the sunshine - and shadows will fall behind you. - Walt Whitman'
const quote2 = 'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller'
const quote3 = "Nothing is impossible, the word itself says 'I'm possible'! - Audrey Hepburn"
const quote4 = 'The best preparation for tomorrow is doing your best today. - H. Jackson Brown, Jr.'
const quote5 = 'It is never too late to be what you might have been. - George Eliot'

const numInQuestion = [quote1, quote2, quote3, quote4, quote5];
num = [];


let randNum = Math.floor(Math.random()*5);



num.push(randNum);
//console.log(num);

if (num[0] === 0){
    console.log(quote1);
} else if (num[0] === 1){
    console.log(quote2);
} else if (num[0] === 2){
    console.log(quote3);
} else if (num[0] === 3){
    console.log(quote4);
} else if (num[0] === 4){
    console.log(quote5);
}


