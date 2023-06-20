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
    const response = entry.countWords();
    const ptag = document.createElement('p');
    ptag.append(response);
    document.querySelector('#entries').append(ptag);
    // entries.push(entry);
    // titleInput.value = '';
    // bodyInput.value = '';
    // displayEntries();
}

window.addEventListener("load", function() {
    document.querySelector("#entry-form").addEventListener("submit", handleSubmit);
});

