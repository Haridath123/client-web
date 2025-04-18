// API URL to fetch the daily quote
const quoteUrl = "https://api.quotable.io/random";

// Get DOM elements
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const notesTextArea = document.getElementById('notes');
const saveNotesButton = document.getElementById('save-notes');
const savedNotesContent = document.getElementById('saved-notes-content');

// Fetch daily quote
async function fetchQuote() {
    try {
        const response = await fetch(quoteUrl);
        const data = await response.json();
        quoteElement.textContent = `"${data.content}"`;
        authorElement.textContent = `- ${data.author}`;
    } catch (error) {
        quoteElement.textContent = "Failed to fetch quote.";
        authorElement.textContent = "";
    }
}

// Save notes to localStorage
function saveNotes() {
    const notes = notesTextArea.value;
    if (notes) {
        localStorage.setItem("userNotes", notes);
        displaySavedNotes();
    } else {
        alert("Please enter some notes.");
    }
}

// Display saved notes from localStorage
function displaySavedNotes() {
    const savedNotes = localStorage.getItem("userNotes");
    if (savedNotes) {
        savedNotesContent.textContent = savedNotes;
    } else {
        savedNotesContent.textContent = "No saved notes yet.";
    }
}

// Event listeners
saveNotesButton.addEventListener('click', saveNotes);

// Initial setup
fetchQuote();
displaySavedNotes();
