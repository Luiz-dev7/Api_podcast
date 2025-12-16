import fs from 'fs';
import path from 'path';
import { StatusCode } from "../utils/status-code";
import { FavoriteModel } from '../models/favorite-model';

// caminho do JSON de favoritos
 const FAVORITOS_PATH = path.join(__dirname, '../repositories/favoritos.json');
  let favoritos = require(FAVORITOS_PATH);

  // Adicionar favorito
  export const serviceAddFavorite = async (
    usuarioId: number,
    videoId: string
  ): Promise<FavoriteModel> => {
    
    let responseFormat: FavoriteModel = {
      StatusCode: 0,
      Body: { message: "" }
    };

    const jaFavorito = favoritos.favoritos.find(
      (f: any) => f.usuarioId === usuarioId && f.videoId === videoId
    );

    if (!jaFavorito) {
      favoritos.favoritos.push({ usuarioId, videoId });
      fs.writeFileSync(FAVORITOS_PATH, JSON.stringify(favoritos, null, 2));
      responseFormat = {
        StatusCode: StatusCode.Created,
        Body: { message: "Vídeo favoritado com sucesso!" }
      };
    } else {
      responseFormat = {
        StatusCode: StatusCode.OK,
        Body: { message: "Vídeo já estava nos favoritos." }
      };
    }

    return responseFormat;
  };



