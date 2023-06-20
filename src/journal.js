export default function Entry(title, body) {
    this.title = title;
    this.body = body;
}

Entry.prototype.countWords = function() {
    return this.body.split(' ').length;
};

Entry.prototype.countVowels = function() {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;
    
    for (let i = 0; i < this.body.length; i++) {
        if (vowels.includes(this.body[i].toLowerCase())) {
            vowelCount++;
        }
    }
    return vowelCount;
};

Entry.prototype.countConsonants = function() {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let consCount = 0;
    
    for (let i = 0; i < this.body.length; i++) {
        if (!vowels.includes(this.body[i].toLowerCase()) && this.body[i].match(/[a-z]/i)) {
            consCount++;
        }
    }
    return consCount;
};

Entry.prototype.getTeaser = function() {
    const sentenceArray = this.body.split('.');
    const firstSentence = sentenceArray[0];
    const firstSentenceWords = firstSentence.split(' ');
    const firstEightWords = firstSentenceWords.slice(0, 8);
    const teaser = firstEightWords.join(' ');
    return teaser;
};