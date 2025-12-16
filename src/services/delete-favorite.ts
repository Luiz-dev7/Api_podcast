import fs from 'fs'
import path from "path";
import { FavoriteModel } from "../models/favorite-model";
import { StatusCode } from "../utils/status-code";


    //caminho do JSON de favoritos
    const FAVORITOS_PATH = path.join(__dirname, '../repositories/favoritos.json');
    let favoritos = require(FAVORITOS_PATH);


    // Remover favorito
    export const serviceRemoveFavorite = async (
    usuarioId: number,
    videoId: string
    ): Promise<FavoriteModel> => {
    let responseFormat: FavoriteModel = {
        StatusCode: 0,
        Body: { message: "" }
    };

    const antes = favoritos.favoritos.length;
    favoritos.favoritos = favoritos.favoritos.filter(
        (f: any) => !(f.usuarioId === usuarioId && f.videoId === videoId)
    );

    if (favoritos.favoritos.length < antes) {
        fs.writeFileSync(FAVORITOS_PATH, JSON.stringify(favoritos, null, 2));
        responseFormat = {
        StatusCode: StatusCode.OK,
        Body: { message: "Vídeo removido dos favoritos!" }
        };
    } else {
        responseFormat = {
        StatusCode: StatusCode.NoContent,
        Body: { message: "Esse vídeo não estava nos favoritos." }
        };
    }

    return responseFormat;
    };
