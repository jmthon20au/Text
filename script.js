// Function to show/hide sections based on button click
document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', function() {
        // Hide all tool cards
        document.querySelectorAll('.tool-card').forEach(card => {
            card.classList.remove('visible');
        });

        // Show the selected tool card
        const targetId = this.getAttribute('data-target');
        document.getElementById(targetId).classList.add('visible');
    });
});

// Function to repeat a sentence
function repeatSentence() {
    const sentence = document.getElementById('sentenceInput').value;
    const count = document.getElementById('sentenceCount').value;
    let result = '';

    if (sentence.trim() === '' || count < 1) {
        document.getElementById('repeatedSentenceOutput').value = "الرجاء إدخال جملة وعدد صحيح.";
        return;
    }

    for (let i = 0; i < count; i++) {
        result += sentence + (i < count - 1 ? ' ' : '');
    }

    document.getElementById('repeatedSentenceOutput').value = result;
}

// Function to repeat a word
function repeatWord() {
    const word = document.getElementById('wordInput').value;
    const count = document.getElementById('wordCount').value;
    let result = '';

    if (word.trim() === '' || count < 1) {
        document.getElementById('repeatedWordOutput').value = "الرجاء إدخال كلمة وعدد صحيح.";
        return;
    }

    for (let i = 0; i < count; i++) {
        result += word + (i < count - 1 ? ' ' : '');
    }

    document.getElementById('repeatedWordOutput').value = result;
}

// Function to analyze the text in real-time
document.getElementById('textAnalyzerInput').addEventListener('input', function() {
    const text = this.value;

    // Word count (Arabic & English)
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    document.getElementById('wordCounter').textContent = words.length;

    // Character count (excluding spaces)
    const charsWithoutSpaces = text.replace(/\s/g, '');
    document.getElementById('charCounter').textContent = charsWithoutSpaces.length;

    // Number count
    const numbers = text.match(/\d/g);
    document.getElementById('numberCounter').textContent = numbers ? numbers.length : 0;

    // Paragraph count
    const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim() !== '');
    document.getElementById('paragraphCounter').textContent = paragraphs.length;
});

// Function to copy text from an element
function copyText(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    element.select();
    element.setSelectionRange(0, 99999);

    try {
        navigator.clipboard.writeText(element.value);
        const button = element.nextElementSibling;
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> تم النسخ!';
        button.classList.add('copied');

        setTimeout(() => {
            button.innerHTML = originalText;
            button.classList.remove('copied');
        }, 2000);
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
}
