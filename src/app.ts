import {  addFavorite, getFilterEpisodes, getListEpisodes, listFavorites, removeFavorite  } from "./controllers/podcasts-controller"
import { routes } from "./routes/routes";
import { HttpMethod } from "./utils/httpMethods";
import * as http from "http";

export const app = async (request: http.IncomingMessage, response: http.ServerResponse)=>{


    // query string 
    // http://localhost:3333/api/episode?p=flow
    const baseUrl= request.url?.split("?") [0];

    // listar episodios
    if( request.method === HttpMethod.GET && baseUrl === routes.LIST){
        await getListEpisodes(request, response);
    }

    // filtrar episodeo
    if (request.method === HttpMethod.GET && baseUrl === routes.episode){
        await getFilterEpisodes(request, response);
    }

     // adicionar favorito
     if (request.method === HttpMethod.POST && baseUrl === routes.favorite) {
        await addFavorite(request, response);
    }

    // lista no episodio favorito
    if(request.method === HttpMethod.GET && baseUrl === routes.favorite){
        await listFavorites(request, response)
    }

    
    if(request.method === HttpMethod.DELETE && baseUrl === routes.favorite){
        await removeFavorite(request, response)
    }

}

