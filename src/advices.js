const { GoogleGenerativeAI } = require("@google/generative-ai");
const { advicePrompt, vocGuidancePrompt } = require("./basePrompts")

const model = new GoogleGenerativeAI(process.env.API_KEY).getGenerativeModel({ model: "gemini-1.5-flash"});

exports.pedagogicalAdvice = async props => {
    let prompt = advicePrompt(props);

    const text = (await model.generateContent(prompt)).response.text();

    return text;
}

exports.vocationalGuidance = async props => {
    const prompt = vocGuidancePrompt(props);

    const text = (await model.generateContent(prompt)).response.text();

    return text;
}

exports.chat = async (prompt) => {
    const text = (await model.generateContent(prompt)).response.text();
    return text;
}