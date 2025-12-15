import { FilterModel } from "../models/filter-model";
import { repoPodcast } from "../repositories/podcast-repositore"
import { StatusCode } from "../utils/status-code";


export const serviceListEpisodes = async () =>{
    
    //Define  a interface de retorno
        let responseFormat:FilterModel= {
            StatusCode : 0 ,
            Body: [],
        };
    
    //busco o dado
    const data = await repoPodcast()
    
    //verifica a resposta
    responseFormat = {
        StatusCode: data.length !== 0 ?  StatusCode.OK : StatusCode.NoContent ,
        Body : data
    }
  

    return responseFormat;

}   


