// This is the file to check whether your answer is correct or wrong.
// Do not change anything in this file.

const assert = require('assert');
const source = require('./index');

describe('[1] Count letters in a sentence.', function() {
    const validLetter = 'o';
    const invalidLetter = 'abc';
    const sentence = 'The quick brown fox jumps over the lazy dog';

    it('Invalid letter returns "Invalid letter input".', function() {
        const result = source.countLetter(invalidLetter, sentence);
        expect(result).toEqual('Invalid letter input');
    });

    it('Valid letter returns number of occurrence.', function() {
        const result = source.countLetter(validLetter, sentence);
        expect(result).toEqual(4);
    });

    it('Validates input for letter being a single character.', function() {
        const singleCharacterLetter = 'x';
        const result = source.countLetter(singleCharacterLetter, sentence);
        expect(result).toEqual(1);
    });

    it('Invalid sentence returns "Invalid sentence input".', function() {
        const singleCharacterSentence = 'A';
        const result = source.countLetter(validLetter, singleCharacterSentence);
        expect(result).toEqual('Invalid sentence input');
    });

    it('Validates input for sentence not being a single character.', function() {
        const emptySentence = '';
        const result = source.countLetter(validLetter, emptySentence);
        expect(result).toEqual('Invalid sentence input');
    });
});

describe('[2] Check isogram.', function() {
    const isogram = 'Machine';
    const notIsogram = 'Hello';
    const isogramSentence = 'I love cats';

    it('Returns true if a word is an isogram.', function() {
        const result = source.isIsogram(isogram);
        expect(result).toEqual(true);
    });

    it('Returns false if a word is not an isogram.', function() {
        const result = source.isIsogram(notIsogram);
        expect(result).toEqual(false);
    });

    it('Returns true if a sentence is an isogram.', function() {
        const result = source.isIsogram(isogramSentence);
        expect(result).toEqual(true);
    });
});

describe('[3] Purchase goods.', function() {
    const price = 109.4356;
    const discountedPrice = price * 0.8;
    const roundedPrice = discountedPrice.toFixed(2);

    it('Returns undefined for students aged below 13.', function() {
        const result = source.purchase(12, price);
        expect(result).toBeUndefined();
    });

    it('Returns discounted price (rounded off) for students aged 13 to 21.', function() {
        const result = source.purchase(15, price);
        expect(result).toEqual(roundedPrice);
    });

    it('Returns discounted price (rounded off) for senior citizens.', function() {
        const result = source.purchase(72, price);
        expect(result).toEqual(roundedPrice);
    });

    it('Returns price (rounded off) for people aged 22 to 64.', function() {
        const result = source.purchase(34, price);
        expect(result).toEqual(price.toFixed(2));
    });
});

describe('[4] Find hot categories.', function() {
    const items = [
        { id: 'tltry001', name: 'soap', stocks: 14, category: 'toiletries' },
        { id: 'tltry002', name: 'shampoo', stocks: 8, category: 'toiletries' },
        { id: 'tltry003', name: 'tissues', stocks: 0, category: 'toiletries' },
        { id: 'gdgt001', name: 'phone', stocks: 0, category: 'gadgets' },
        { id: 'gdgt002', name: 'monitor', stocks: 0, category: 'gadgets' }
    ];

    it('Returns item categories without stocks.', function() {
        const result = source.findHotCategories(items);
        expect(result).toEqual(['toiletries', 'gadgets']);
    });
});

describe('[5] Find flying voters.', function() {
    const candidateA = ['LIWf1l', 'V2hjZH', 'rDmZns', 'PvaRBI', 'i7Xw6C', 'NPhm2m'];
    const candidateB = ['kcUtuu', 'LLeUTl', 'r04Zsl', '84EqYo', 'V2hjZH', 'LIWf1l'];

    it('Returns the array of flying voters.', function() {
        const result = source.findFlyingVoters(candidateA, candidateB);
        expect(result).toEqual(['LIWf1l', 'V2hjZH']);
    });

    it('Handles empty candidate arrays.', function() {
        const emptyArray = [];
        const result = source.findFlyingVoters(emptyArray, emptyArray);
        expect(result).toEqual('Candidate array must not be empty.');
    });

    it('Handles null or undefined inputs.', function() {
        const nullResult = source.findFlyingVoters(null, candidateB);
        const undefinedResult = source.findFlyingVoters(candidateA, undefined);
        expect(nullResult).toEqual('Invalid Values');
        expect(undefinedResult).toEqual('Invalid Values');
    });

    it('Handles arrays of different lengths.', function() {
        const differentLengthA = ['A', 'B', 'C'];
        const differentLengthB = ['A', 'B'];
        const result = source.findFlyingVoters(differentLengthA, differentLengthB);
        expect(result).toEqual('Invalid Entry');
    });

    it('Handles arrays with no common voters.', function() {
        const noCommonVotersA = ['A', 'B', 'C'];
        const noCommonVotersB = ['X', 'Y', 'Z'];
        const result = source.findFlyingVoters(noCommonVotersA, noCommonVotersB);
        expect(result).toEqual('No common voters.');
    });
});