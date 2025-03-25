import fetch from "node-fetch";
import {DATA} from "./variables.mjs";

const PLAYER_EMAIL = "minast00@uia.no";

// Base URLs for the systems
const ALCHEMY_API = "https://alchemy-kd0l.onrender.com";


async function startMission() {
    try {
        const response = await fetch(`${ALCHEMY_API}/start?player=${PLAYER_EMAIL}`);
        const data = await response.json();

        const challenge = data.challenge;
        
    } catch (error) {
        console.error("Error starting mission:", error);
    }
}
startMission()

async function submitAnswer(answer) {
    try {
        console.log("Submitting answer...");
        let url = ALCHEMY_API + "/answer";
        console.log("Sending fetch request to \"" + url + "\"");
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify ({ player: PLAYER_EMAIL, answer: answer})
        });

        if (!response.ok) {
            //console.log(response);
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
async function answer4() {
    
    const riddleText = `
        through Hidden experiments, the Observing Philosophers 
        carefully recorded their findings in secret tomes. 
        rarely did alchemists Seek answers in mundane texts, 
        for the Universal substance eluded ordinary understanding.

        beyond the limits of ordinary Methods, the most Dedicated scholars 
        turned to alchemical science, where hidden truths awaited discovery. 
        Truly, the masters of old knew that one must strive tirelessly, 
        purifying Lead into something greater, refining both mind and matter. 
        until mastery was achieved, Knowledge alone was insufficient, 
        and only those who understood the deeper mysteries Would glimpse Immortality.
    `;

    
    const extractHiddenLetters = (text) => {
        return text.match(/[A-Z]/g).join("");
    };

    const hiddenMessage = extractHiddenLetters(riddleText);
    console.log("Extracted Hidden Message:", hiddenMessage);

    
    const encodedMessage = [
        "DNIS PNYYUR DNIS DNIS GLIXUR",
        "UHRJT BURPQRF PNYYUR MLRU HLR",
        "MLRU UHRJT IUHS UHRJT GLIXUR",
        "LRNC DNIS GLIXUR VHJUR DNIS",
        "PNYYUR MLRU DNIS LRNC IUHS",
        "UHRJT PNYYUR PNYYUR JLC BURPQRF"
    ];

    
    function caesarCipher(text, shift) {
        return text.replace(/[A-Z]/g, c =>
            String.fromCharCode(((c.charCodeAt(0) - 65 - shift) % 26 + 26) % 26 + 65)
        );
    }

    
    let bestDecodedMessage = "";
    for (let shift = 1; shift <= 25; shift++) {
        let decodedAttempt = encodedMessage.map(line => caesarCipher(line, shift)).join(" ");
        console.log(`Shift ${shift}:`, decodedAttempt);
        if (decodedAttempt.includes("THE") || decodedAttempt.includes("SECRET")) {
            bestDecodedMessage = decodedAttempt;
            break;
        }
    }

    console.log("Final Decoded Text:", bestDecodedMessage);

    
    const alchemicalSymbols = "☉ ♀ ☉ ☉ ☽ 🜃 ☿ ♀ 🜂 🜁 🜂 🜃 ♄ 🜃 ☽ ♂ ☉ ☽ 🜄 ☉ ♀ 🜂 ☉ ♂ ♄ 🜃 ♀ ♀ ♃ ☿";
    const alchemicalTable = {
        "☉": "Gold",
        "♀": "Copper",
        "☽": "Silver",
        "☿": "Mercury",
        "♄": "Lead",
        "♃": "Tin",
        "♂": "Iron",
        "🜃": "Earth",
        "🜁": "Air",
        "🜂": "Fire",
        "🜄": "Water"
    };

    const alchemicalMatrix = 
    '☉ ♀ ☉ ☉ ☽ 🜃 ☿ ♀ 🜂 🜁 🜂 🜃 ♄ 🜃 ☽ ♂ ☉ ☽ 🜄 ☉ ♀ 🜂 ☉ ♂ ♄ 🜃 ♀ ♀ ♃ ☿\n' +
    '🜄 🜂 ♄ 🜂 🜁 🜂 🜄 ☿ 🜁 ☽ ♂ ☽ ♄ ♃ 🜄 ♄ ♀ ♂ ☉ 🜄 ♂ ☽ ♀ ♂ ♀ ♃ ♄ 🜄 ♃\n' +
    '🜂 ☿ 🜄 ♂ ♀ ♃ ♃ 🜄 ☉ ♂ ♃ 🜂 ♀ 🜂 🜃 🜁 ☉ 🜂 ♀ ♃ ♄ ☽ 🜂 ♂ ♄ ♂ ☉ 🜄 ☉\n' +
    '🜁 🜄 🜂 ☉ ♃ 🜂 🜂 ☿ 🜁 ☿ ♂ ♀ ♂ ♂ ♃ ☽ ☉ 🜂 ☉ ☽ ☿ ♀ 🜂 🜁 ♄ ♂ 🜃 ☉ ♂\n' +
    '☉ 🜂 🜁 ♃ 🜂 ☽ 🜄 ♀ 🜄 🜁 ♃ 🜂 🜂 ♂ 🜂 ♃ ☽ ☽ 🜂 ☉ 🜄 ☉ 🜁 ♀ 🜄 ♃ 🜄 ♂ ☉\n' +
    '☽ ♄ 🜃 ♀ 🜄 ♃ 🜁 ♃ 🜃 🜂 🜂 🜂 🜂 ♄ 🜂 🜄 🜃 ♀ 🜁 🜁 🜂 🜃 ☽ 🜁 ☿ 🜂 🜂 ♂ ☽\n' +
    '☉ ♄ 🜁 ♄ ☿ ♄ ☉ ☉ ☽ ♄ ♀ ☉ 🜄 ♄ 🜁 ♂ ☿ ☿ 🜄 ♃ ♀ ☿ 🜃 ♂ ☿ ♀ ☽ ♀ 🜃\n' +
    '☉ ☿ 🜁 🜂 ♂ ♀ 🜁 🜂 🜁 ☽ 🜂 ♀ ☉ 🜃 ♄ ♃ ♀ ☽ ☽ 🜄 ☉ ♃ 🜂 🜂 🜃 🜄 ♀ ☽ 🜄\n' +
    '🜃 🜂 ♀ ♀ ☽ 🜃 ☿ ♃ 🜄 🜃 🜃 ☉ ♃ 🜁 ♄ 🜁 🜂 🜁 🜄 🜁 ☽ ♃ 🜂 ♀ 🜃 ☿ ☿ 🜁 🜃\n' +
    '☿ ♀ ♀ ☉ ♄ 🜄 ♂ ☽ ☉ ♀ ☿ 🜃 ☿ ♄ ♄ 🜂 🜁 🜃 ☽ ♃ ☿ ♃ ♃ ♂ ♄ ☉ 🜂 ☉ 🜁\n' +
    '🜄 🜃 ☽ 🜄 ☿ ♀ ☿ 🜃 ☿ ☿ ♀ ☿ 🜁 ♀ ♄ ♄ 🜂 ♄ 🜃 ☽ ♂ ♀ ☿ ☽ ♃ ♂ ♄ ♄ 🜄\n' +
    '🜃 🜂 🜁 ♄ ♂ ☽ ♀ 🜃 🜁 🜂 ♄ ☿ ☽ ☽ 🜄 🜁 🜃 ☉ ☉ ♄ ♂ ☽ ♃ 🜄 ♃ 🜃 ☿ ♃ ☿\n' +
    '🜄 ♂ ♀ ♂ ♀ ♂ 🜄 ♀ ♂ 🜂 🜁 🜂 ♄ ☿ ☿ ☽ ♄ ♀ 🜄 ☽ ♂ 🜁 ♃ ☉ 🜄 🜁 🜂 ☉ ♃\n' +
    '♄ ♀ ♄ ♀ 🜃 ♂ ♄ 🜂 ♃ 🜄 ♄ ♀ ☽ ♀ ☽ 🜂 🜃 ♂ ♃ 🜂 ♄ 🜂 ♂ ♃ 🜃 ♂ ♄ ☽ ♀\n' +
    '🜄 ♄ ☽ ☉ 🜃 ☽ ☽ 🜂 ☽ ♀ 🜄 ☉ ♃ ♂ ♄ ♄ ☽ ♄ ☽ ♀ ♀ ♀ 🜄 ♃ 🜃 ♃ ♀ ♀ ♃\n' +
    '♂ ☽ 🜃 🜄 ☉ ♀ 🜄 🜄 🜄 ☽ ♂ 🜂 ♃ ☽ 🜃 ♂ ♂ ♀ ☉ ☿ ♂ ♂ ☉ ☽ ☿ ☉ 🜃 🜁 ♀\n' +
    '🜃 ♄ ♂ 🜂 ☽ ☿ 🜂 🜃 ☉ 🜂 ♄ 🜂 ☿ ♄ 🜃 🜃 ☉ 🜂 ♃ ☽ ☽ ♄ 🜂 ♄ 🜄 ☽ 🜂 ♂ ☿\n' +
    '♃ 🜃 ♀ 🜃 🜁 ☽ ☉ ♃ 🜁 ☽ ♄ 🜄 🜄 ☽ 🜃 ♃ ☽ ☉ 🜂 ♃ ☉ 🜁 ☿ 🜃 ☉ 🜃 ☉ 🜄 ☉\n' +
    '🜁 ♃ 🜁 ☉ ☽ ♄ 🜂 ♀ 🜂 ♃ ☽ ☽ ♃ ☽ ☽ 🜄 🜄 ♀ ☉ ♂ 🜃 ♂ ☉ 🜁 ☿ 🜂 🜃 ♀ ☉\n' +
    '♂ 🜁 ☽ 🜄 ☿ ♃ 🜁 ☉ 🜂 ☽ ♂ 🜄 ♂ ♃ ♄ ♄ ☉ ♀ 🜂 ♄ ☿ ♄ ♀ 🜄 ☿ ♄ ☉ 🜄 🜄\n' +
    '🜂 🜃 ☽ ☉ ☿ 🜂 ♂ ♃ ☿ ☉ ☿ ♄ ☉ ☿ 🜂 🜃 ♀ ☿ ♂ ♃ ♃ ♂ ☉ ♂ ☽ 🜃 🜃 ♂ ♄\n' +
    '☽ 🜁 ☽ 🜁 ☉ ☿ ♄ ♂ ☉ ♂ ☉ ♂ 🜄 ♂ 🜄 ☽ 🜂 ♀ ♂ ☉ ♂ 🜃 ♀ ♃ ☉ ♀ ♃ 🜁 ☿\n' +
    '🜄 ☉ 🜁 ♃ 🜁 ☽ ☿ ☉ ♂ 🜃 🜁 ☽ ☉ 🜃 ♀ ♃ ☉ ♄ ♀ ☿ ♀ 🜁 ♂ ♀ ♄ 🜁 ☽ ☉ ♃\n' +
    '♄ ☿ ☽ 🜄 ☿ ☿ ♄ ♃ ♀ ☿ ♄ 🜂 🜄 ☿ ☿ ♃ ♂ 🜁 ♀ ☽ ☉ ☽ 🜁 🜄 🜃 🜄 ☿ ♀ ☿\n' +
    '☉ ♂ ☽ ♄ 🜄 ♂ ♂ ☉ 🜂 ♃ ☽ ☉ ♄ ♀ 🜁 🜃 ♄ ♃ ☽ ♀ 🜂 ♂ ♃ ♃ 🜃 ☿ ☽ 🜃 ☉\n' +
    '🜄 ♃ ☿ 🜁 ♃ ☿ ☿ ☿ 🜃 ♄ ♃ 🜁 🜄 ♂ ♂ ♃ 🜃 ♄ 🜁 ♀ 🜄 ♃ ☽ ♄ ♂ ♂ 🜂 ☽ ☉\n' +
    '🜁 ♂ 🜂 🜂 🜂 🜁 🜃 🜂 ☿ ♀ 🜃 ♀ 🜃 ♀ ☽ ♃ ♀ ☿ ♄ ☉ 🜄 🜂 🜂 ♀ ☽ 🜂 🜂 ♃ 🜂\n' +
    '🜄 ♃ ☉ 🜁 ♀ 🜃 ☿ ☿ ♀ ♄ 🜃 ♂ 🜂 ☿ ♃ ☉ ♀ ☉ 🜄 ☽ 🜃 ♀ ♀ ♄ ♃ ♀ 🜂 ☉ ☉\n' +
    '☉ ☉ 🜂 ♂ 🜁 🜁 ♄ ☿ ♂ ☿ ☿ ☉ ☽ 🜃 ♀ ♄ ♃ ♀ ♀ 🜃 ♀ ♂ 🜁 ♂ 🜂 ♄ ☿ ☿ ♀\n' +
    '☿ 🜄 ♄ ♃ ♄ ☽ ♃ ♀ ♃ 🜃 🜂 🜄 🜂 ☽ ☿ ☉ ☿ 🜂 ☽ 🜂 ♃ ♂ 🜄 🜃 ☿ ♄ ♄ ☽ 🜂';

    let alchemicalMatrixSimple = alchemicalMatrix.split("\n");
    console.log(alchemicalMatrixSimple);

    const translatedSymbols = alchemicalSymbols.split(" ").map(symbol => alchemicalTable[symbol] || "?").join(", ");
    console.log("Translated Symbols:", translatedSymbols);

    let horizontalIndexValue = 0;
    for(let i = 0; i < alchemicalMatrixSimple.length; i++) {
        let row = alchemicalMatrixSimple[i];
        if(row === alchemicalSymbols) {
            horizontalIndexValue = i;
            break;
        }
    }
    
    let verticalIndexValue = findVerticalIndex(alchemicalMatrix, alchemicalSymbols);
    
    let atomicalNumber = horizontalIndexValue + verticalIndexValue + 2;
    
    console.log(atomicalNumber);
    
    atomicalNumber = 18; // ToDo: Remove when matrix issue is fixed.
    let outcome = null;
    for(let elementInfo of Object.values(DATA.elements)) {
        if(elementInfo.atomicNumber===atomicalNumber) {
            outcome = elementInfo.name;
            break;
        }
    }
    console.log("Outcome: \"" + outcome + "\"");
    
    
    
    function findVerticalIndex(alchemicalSymbols, targetSymbol) {
        const rows = alchemicalSymbols.split('\n');
        const firstRow = rows[0].split(' ');
        
        for (let col = 0; col < firstRow.length; col++) {
            let found = false;
            for (let row = 0; row < rows.length; row++) {
                const symbols = rows[row].split(' ');
                if (symbols[col] === targetSymbol) {
                    found = true;
                    break;
                }
            }
            if (found) {
                return col; 
            }
        }
        
        return -1; 
    }
    await submitAnswer(outcome);
}

await answer4();

