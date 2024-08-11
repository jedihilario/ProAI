const { GoogleGenerativeAI } = require("@google/generative-ai");
const { advicePrompt } = require("./basePrompts")

const model = new GoogleGenerativeAI(process.env.API_KEY).getGenerativeModel({ model: "gemini-1.5-flash"});

exports.pedagogicalAdvice = async (props) => {
    let prompt = advicePrompt(props);

    const text = (await model.generateContent(prompt)).response.text();

    return text;
}

exports.vocationalGuidance = async () => {
    const prompt = 'Contame un chiste';

    const text = (await model.generateContent(prompt)).response.text();

    return text;
}