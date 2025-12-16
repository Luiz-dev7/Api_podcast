import { IncomingMessage, ServerResponse } from 'http' 
import { serviceListEpisodes } from '../services/listEpisodes'
import { serviceFilterEpisodes } from '../services/filterEpisodes'
import { ContentType } from '../utils/content-type';
import { FilterModel } from '../models/filter-model';
import { FavoriteModel } from '../models/favorite-model';
import { serviceAddFavorite } from '../services/favorite-ep';
import { serviceListFavorites} from '../services/List-favorites'
import { serviceRemoveFavorite} from '../services/delete-favorite'

    //Lista todos episodios
    export const getListEpisodes = async(
        req : IncomingMessage, 
        res: ServerResponse
        ) => {

        const content :FilterModel = await serviceListEpisodes();

        res.writeHead(content.StatusCode, {'content-type': ContentType.JSON})
        res.write(JSON.stringify(content.Body))

        res.end()
        
    };

    //filtra todos os episodios
    export const getFilterEpisodes = async(
        req: IncomingMessage,
        res: ServerResponse

    ) =>{

        const content :FilterModel = await serviceFilterEpisodes(req.url!);

        res.writeHead(content.StatusCode, {'content-type': ContentType.JSON}) 
        res.write(JSON.stringify(content.Body))

        res.end() 

    };

    // adicionar favorito
    export const addFavorite = async(
    req: IncomingMessage, 
    res: ServerResponse
    ) => {

    let body = "";
    
    req.on("data", chunk => (body += chunk));
    req.on("end", async () => {
        try {
      if (!body) {
        res.writeHead(400, { "content-type": ContentType.JSON });
        res.write(JSON.stringify({ message: "Body vazio. Envie usuarioId e videoId." }));
        return res.end();
      }

      const { usuarioId, videoId } = JSON.parse(body);
      const content: FavoriteModel = await serviceAddFavorite(usuarioId, videoId);

      res.writeHead(content.StatusCode, { "content-type": ContentType.JSON });
      res.write(JSON.stringify(content.Body));
      res.end();
    } catch (err) {
      res.writeHead(400, { "content-type": ContentType.JSON });
      res.write(JSON.stringify({ message: "JSON inválido no body." }));
      res.end();
    }
    });
    };

    export const listFavorites = async (
        req: IncomingMessage, 
        res: ServerResponse
    ) => {
    const url = new URL(req.url!, "http://localhost");
    const usuarioId = Number(url.searchParams.get("usuarioId"));
    const content: FavoriteModel = await serviceListFavorites(usuarioId);
    
    res.writeHead(content.StatusCode, { "content-type": ContentType.JSON });
    res.write(JSON.stringify(content.Body));
  
    res.end();
    };

    export const removeFavorite = async (
        req: IncomingMessage, 
        res: ServerResponse) => {
    const url = new URL(req.url!, "http://localhost");
    const usuarioId = Number(url.searchParams.get("usuarioId"));
    const videoId = url.searchParams.get("videoId")!;
    const content: FavoriteModel = await serviceRemoveFavorite(usuarioId, videoId);
    
    res.writeHead(content.StatusCode, { "content-type": ContentType.JSON });
    res.write(JSON.stringify(content.Body));
    
    res.end();
};



