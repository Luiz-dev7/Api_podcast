import { IncomingMessage, ServerResponse } from 'http' 
import { serviceListEpisodes } from '../services/listEpisodes'
import { serviceFilterEpisodes } from '../services/filterEpisodes'
import { ContentType } from '../utils/content-type';
import { FilterModel } from '../models/filter-model';

export const getListEpisodes = async(
    req : IncomingMessage, 
    res: ServerResponse
    ) => {

    const content :FilterModel = await serviceListEpisodes();

    res.writeHead(content.StatusCode, {'content-type': ContentType.JSON})
    res.write(JSON.stringify(content.Body))

    res.end()
    
};

export const getFilterEpisodes = async(
    req: IncomingMessage,
    res: ServerResponse

) =>{

    const content :FilterModel = await serviceFilterEpisodes(req.url!);

    res.writeHead(content.StatusCode, {'content-type': ContentType.JSON}) 
    res.write(JSON.stringify(content.Body))

    res.end() 

};
