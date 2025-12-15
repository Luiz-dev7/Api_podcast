import { repoPodcast } from "../repositories/podcast-repositore"
import {FilterModel} from "../models/filter-model"
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (podcastName: string | null): Promise<FilterModel> =>{

    //Define  a interface de retorno
    let responseFormat:FilterModel= {
        StatusCode : 0 ,
        Body: [],
    };

    //buscando os dados 
    const queryString = podcastName?.split('?p=')[1] ?? ''; 
    const data = await repoPodcast(queryString);
    
    //vericifica sem tem o conteúdo 
     responseFormat = {
        StatusCode: data.length !== 0 ?  StatusCode.OK : StatusCode.NoContent ,
        Body : data
    }

    return responseFormat

}





