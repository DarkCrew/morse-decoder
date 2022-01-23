const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    let arr = expr.match(/.{1,10}/g);
    let newArr = arr.map(function(num){
        num = parseInt(num).toString();
        if (num === 'NaN'){
            return result += ' ';
        }
        str = '';
        for (let i = 0; i < num.length; i += 2){
            number = num[i] + num[i + 1];
            if (number === '10'){
                str += '.';
            }else if(number === '11'){
                str += '-';
            }else{
                str += '';
            }
        }
        result += MORSE_TABLE[`${str}`];
    });
    return result;
}

module.exports = {
    decode
}