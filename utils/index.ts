import { surpriseMePrompts } from "@/constants";
import FileSaver from 'file-saver'

function getRandomPrompt(prompt: string): string {
    console.log("prompt generator called with prompt:", prompt)
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
    const randomPrompt = surpriseMePrompts[randomIndex]

    if(randomPrompt === prompt) return getRandomPrompt(prompt)
    return randomPrompt
}

export default getRandomPrompt


type Props = {
    _id: number,
    photo: string
}

export async function downloadImage({_id, photo}: Props){
    FileSaver.saveAs(photo, `download-${_id}.jpg`)
}