'use strict'

function isVowel(vowel) {
    if(vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u') {
        return true
    }
    return false
}

function vowelsAndConsonants(s) {
    let consonants = []
    for (let i = 0; i < s.length; i++) {
        if(isVowel(s[i])) {
            console.log(s[i])
        } else {
            consonants.push(s[i])
        }
    }
    for (let consonant of consonants) {
        console.log(consonant)
    }
}

function main() {
    const s = 'javascriptloops';
    vowelsAndConsonants(s);
}

main()