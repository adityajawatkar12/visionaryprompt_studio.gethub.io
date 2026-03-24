// Prompt Generator Application

const promptTemplateDB = {
    "creative-writing": [
        "Write a short story about a robot that learns to love.",
        "Describe a day in the life of a dragon disguised as a human."
    ],
    "art-design": [
        "Create a logo for a fictional planet.",
        "Design a poster for a local music festival."
    ],
    "marketing": [
        "Develop a tagline for an eco-friendly product.",
        "Outline a social media strategy for a new restaurant."
    ],
    "business": [
        "Draft a business plan for a startup app.",
        "Create a marketing pitch for a tech conference."
    ],
    "technical": [
        "Explain the concept of blockchain in simple terms.",
        "Write a function in Python to calculate Fibonacci sequence."
    ]
};

const toneModifiers = [
    "conversational",
    "formal",
    "humorous",
    "inspirational",
    "technical"
];

function copyToClipboard(content) {
    navigator.clipboard.writeText(content).then(() => {
        console.log('Copied to clipboard: ' + content);
    });
}

function trackHistory(prompt) {
    let history = JSON.parse(localStorage.getItem('promptHistory')) || [];
    history.push(prompt);
    localStorage.setItem('promptHistory', JSON.stringify(history));
}

// Event listeners for form
const form = document.getElementById('promptForm');
form.addEventListener('submit', function (event) {
    event.preventDefault();  
    const selectedCategory = document.getElementById('categorySelector').value;
    const selectedTone = document.getElementById('toneSelector').value;
    const prompt = retrievePrompt(selectedCategory);
    const modifiedPrompt = `${selectedTone} tone: ${prompt}`;
    copyToClipboard(modifiedPrompt);
    trackHistory(modifiedPrompt);
});

function retrievePrompt(category) {
    const prompts = promptTemplateDB[category];
    const randomIndex = Math.floor(Math.random() * prompts.length);
    return prompts[randomIndex];
}

// Utility functions can be added here...