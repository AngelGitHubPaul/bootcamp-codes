function countLetter(letter, sentence) {
    let result = 0;

    // Implement input validation to ensure that the letter parameter is a single character. If it's not, return a message, "Invalid letter input"
    if(letter.length != 1) {
        return "Invalid letter input";
    }
    // Implement input validation to ensure that the sentence parameter is not single character. If it is, return a message, "Invalid sentence input"
    if(sentence.length <= 1) {
        return "Invalid sentence input";
    }
    // Then, identify how many times a letter has occurred in a given sentence then return count.
    // If letter does not occur in the sentence, return undefined.
    sentence.split('').map((char) => {
        if(char == letter) {
            result++;
        }
    })

    if(result == 0) {
        return undefined;
    } else {
        return result;
    }
}


function isIsogram(text) {
    // An isogram is a word where there are no repeating letters.
    // The function should disregard text casing before doing anything else.
    // If the function finds a repeating letter, return false. Otherwise, return true.
    // Should be able handle phrases or sentences rather than just single words.
    let newText = text.toLowerCase();
    let newTextArr = newText.split('');
    let isIsogram = true;
    newTextArr.map((char) => {
        if(char != ' '){
            let find = newTextArr.filter((el) => el === char);
            if(find.length > 1) {
                isIsogram = false;
            }
        }
    })
    return isIsogram;
    
}

function purchase(age, price) {
    let discount = 0;
    // Return undefined for people aged below 13.
    if(age < 13) {
        return undefined
    }
    // Return the discounted price (rounded off) for students aged 13 to 21 and senior citizens. (20% discount)
    if((age > 13 && age < 21) || age > 64) {
        discount = price * 0.20;
        return (price - discount).toFixed(2);
    } else {
        return price.toFixed(2)
    }
    // Return the rounded off price for people aged 22 to 64.
    // The returned value should be a string.
    
}

function findHotCategories(items) {
    // Find categories that has no more stocks.
    // The hot categories must be unique; no repeating categories.

    // The passed items array from the test are the following:
    // { id: 'tltry001', name: 'soap', stocks: 14, category: 'toiletries' }
    // { id: 'tltry002', name: 'shampoo', stocks: 8, category: 'toiletries' }
    // { id: 'tltry003', name: 'tissues', stocks: 0, category: 'toiletries' }
    // { id: 'gdgt001', name: 'phone', stocks: 0, category: 'gadgets' }
    // { id: 'gdgt002', name: 'monitor', stocks: 0, category: 'gadgets' }

    let hotCategories = [];

    items.map(item => {
        if(!(hotCategories.includes(item.category))){
            if(item.stocks == 0) {
                hotCategories.push(item.category);
            }
        }
    })
    return hotCategories;

    // The expected output after processing the items array is ['toiletries', 'gadgets'].
    // Only putting return ['toiletries', 'gadgets'] will not be counted as a passing test during manual checking of codes.

}

function findFlyingVoters(candidateA, candidateB) {
    // Find voters who voted for both candidate A and candidate B.
    let commonVoters = [];
    // Validate the voter entries:
    // Handle cases where one or both candidate arrays are empty or contain no common voters.
    // Return a message if one or both candidate arrays are empty: "Candidate array must not be empty."
    if(candidateA == undefined || candidateB == undefined) {
        return "Invalid Values";
    }
    if(candidateA.length == null || candidateB.length == null) {
        return "Invalid Values";
    }
    if(candidateA.length === 0 || candidateB.length === 0) {
        return "Candidate array must not be empty.";
    }
    // Return a message if the arrays has no common voters: "No common voters."
    // Consider scenarios where the inputs might be null, undefined, or of different lengths, and handle such cases gracefully.
    //Return a message if the input is null or undefined: "Invalid Values",
    //Return a message if the inputs are not the same length: "Invalid Entry"

    for(let i = 0; i <= candidateA.length-1; i++) {
        if(candidateA[i] == null || candidateA[i] == undefined) {
            return "Invalid Values";
        }
    }

    for(let i = 0; i <= candidateB.length-1; i++) {
        if(candidateB[i] == null || candidateB[i] == undefined) {
            return "Invalid Values";
        }
    }

    if(candidateA.length != candidateB.length) {
        return "Invalid Entry";
    }

    candidateA.map(voter => {
        if(candidateB.includes(voter)) {
            commonVoters.push(voter);
        }
    })

    if(commonVoters.length == 0) {
        return "No common voters.";
    } else {
        return commonVoters;
    }

    // The passed values from the test are the following:
    // candidateA: ['LIWf1l', 'V2hjZH', 'rDmZns', 'PvaRBI', 'i7Xw6C', 'NPhm2m']
    // candidateB: ['kcUtuu', 'LLeUTl', 'r04Zsl', '84EqYo', 'V2hjZH', 'LIWf1l']

    // The expected output after processing the candidates array is ['LIWf1l', 'V2hjZH'].
    // Only putting return ['LIWf1l', 'V2hjZH'] will not be counted as a passing test during manual checking of codes.
    
}
let candidateA;
let candidateB;
findFlyingVoters(candidateA, candidateB);

module.exports = {
    countLetter,
    isIsogram,
    purchase,
    findHotCategories,
    findFlyingVoters
};