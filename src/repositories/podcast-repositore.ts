import fs from 'fs';
import path from 'path';
import { Podcast } from '../models/podcast-model';


const pathData = path.join(__dirname, "../repositories/podcast.json");

export const repoPodcast = async(podcastName?: string): Promise<Podcast[]> =>{
    
    const language = "utf-8"
    
    const data = fs.readFileSync(pathData, language)

    let jsonFile = JSON.parse(data)

    if(podcastName){
        jsonFile = jsonFile.filter(
            (podcast: Podcast) => podcast.podcastName === podcastName

        )
    }

    return jsonFile

}
