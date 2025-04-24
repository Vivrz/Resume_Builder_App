
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const genAI = new GoogleGenerativeAI("AIzaSyAIon-k72U3QFIxv1CcT605RTqextFF_t0");

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function getGenerativeResponse(prompt) {
    try {
        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = await response.text();
        return text;
    } catch (error) {
        console.error("Error generating content:", error);
        return "Sorry, I couldn't generate a response at the moment.";
    }
}

module.exports = { getGenerativeResponse };
