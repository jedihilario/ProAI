const { GoogleGenerativeAI } = require("@google/generative-ai");

const model = new GoogleGenerativeAI(process.env.API_KEY).getGenerativeModel({ model: "gemini-1.5-flash"});

exports.pedagogicalAdvice = async () => {
    const prompt = 'Contame un chiste';

    const text = (await model.generateContent(prompt)).response.text();

    return text;
}