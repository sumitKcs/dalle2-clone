import { surpriseMePrompts } from "@/constants";

function getRandomPrompt(prompt: string): string {
    console.log("prompt generator called with prompt:", prompt)
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
    const randomPrompt = surpriseMePrompts[randomIndex]

    if(randomPrompt === prompt) return getRandomPrompt(prompt)
    return randomPrompt
}

export default getRandomPrompt