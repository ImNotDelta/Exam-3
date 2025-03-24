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

// challenge 2