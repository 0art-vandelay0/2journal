import Entry from "./journal";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function handleSubmit(event) {
    event.preventDefault();
    
    document.querySelector('#entries').innerText = null;

    const titleInput = document.getElementById('title');
    const bodyInput = document.getElementById('body');
    
    const entry = new Entry(titleInput.value, bodyInput.value);
    const wordResponse = entry.countWords();
    const ptag = document.createElement('p');
    const vowelResponse = entry.countVowels();
    const ptag2 = document.createElement('p');
    const consResponse = entry.countConsonants();
    const ptag3 = document.createElement('p');
    // const teaser = entry.getTeaser();
    // const ptag4 = document.createElement('p');

    ptag.append("Word count: " + wordResponse);
    ptag2.append("Vowel count: " + vowelResponse);
    ptag3.append("Consonants count: " + consResponse);
    // ptag4.append("Sentence Teaser: " + teaser);

    document.querySelector('#entries').append(ptag);
    document.querySelector('#entries').append(ptag2);
    document.querySelector('#entries').append(ptag3);
    // document.querySelector('#entries').append(ptag4);
}

window.addEventListener("load", function() {
    document.querySelector("#entry-form").addEventListener("submit", handleSubmit);
});

