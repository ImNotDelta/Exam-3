import fetch from "node-fetch";

const PLAYER_EMAIL = "minast@uia.no";

// Base URLs for the systems
const ALCHEMY_API = "https://alchemy-kd0l.onrender.com";


async function startMission() {
    try {
        const response = await fetch(`${ALCHEMY_API}/start?player=${PLAYER_EMAIL}`);
        const data = await response.json();
        console.log(data);

        const challenge = data.challenge;
        
    } catch (error) {
        console.error("Error starting mission:", error);
    }
}
startMission()

async function submitAnswer(answer) {
    try {
        console.log("Submitting answer...");
        const response = await fetch(`${ALCHEMY_API}/answer`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify ({ player: PLAYER_EMAIL, answer: answer})
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error submit answer:", error);
    }
}
// challenge 1
async function answer1() {
const symbols = "☉☿☽♂☉"

const alchemical = {
    "☉": "Gold",
    "☿": "Quicksilver",
    "☽": "Silver",
    "♂": "Iron"
}
 const decode = [];

 for (let i = 0; i < symbols.length; i++) {
    const symbol = symbols[i];
    const elements = alchemical[symbol];
    decode.push(elements);
 }

 await submitAnswer(decode);
};
console.log(await answer1());

// Challenge 2
async function answer2() {
    const text = `Your work was examplary, unfortunatlyt it turnes out we where not as close as first belived. The code only gave us access to a note with a poem, the evil bastard had dusted it with Berulium powder so several of our alcylots are nolonger among us. We must be more carefull in the future. Anyways the poem read "Still flows the Icy Lethe, Veiling all 'neath Eldritch Rime.", can you make anything of it?`;

    const extractCapitalsFromPoem = (text) => {
        const startQuote = text.indexOf('"');
        const endQuote = text.indexOf('"', startQuote + 1);
        const poem = text.substring(startQuote + 1, endQuote);

        let capitals = "";

        for (let i = 0; i < poem.length; i++) {
            const char = poem[i];
            if (char >= 'A' && char <= 'Z') {
                capitals += char;
            }
        }

        return capitals;
    };

    const result = extractCapitalsFromPoem(text);
    await submitAnswer(result);
};

await answer2();

// Challenge 3: 

async function answer3() {
    // Riddle
    const riddleText = 
        "to obtain access to the next vault, insert the formula " +
        "for the the fourth element; combine mercury, copper, and " +
        "sulfur over heat, add salt ard water, infuse gold through air";

    // Alchemical symbol mapping
    const elementToSymbol = {
        "gold": "☉",
        "copper": "♀",
        "mercury": "☿",
        "sulfur": "🜍",
        "heat": "🜂",
        "salt": "🜔",
        "water": "🜄",
        "air": "🜁"
    };

    let alchemicalSymbols = "";
    riddleText.split(" ").forEach(word => {
        let cleanWord = word.toLowerCase().replace(/[^a-z]/g, "");
        if (elementToSymbol[cleanWord]) {
            alchemicalSymbols += elementToSymbol[cleanWord] + " ";
        }
    });

    alchemicalSymbols = alchemicalSymbols.trim();

    console.log("Final Alchemical Symbols:", alchemicalSymbols);

    await submitAnswer(alchemicalSymbols);
}

await answer3();

// Challenge 4: 


