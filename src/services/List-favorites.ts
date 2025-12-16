import { FavoriteModel } from "../models/favorite-model";
import fs from 'fs'
import path from 'path'
import { StatusCode } from "../utils/status-code";



    // caminho do JSON de favoritos
    const FAVORITOS_PATH = path.join(__dirname, '../repositories/favoritos.json');
    let favoritos = require(FAVORITOS_PATH);

    // Listar favoritos de um usuário
    export const serviceListFavorites = async (
    usuarioId: number
    ): Promise<FavoriteModel> => {
    let responseFormat: FavoriteModel = {
        StatusCode: 0,
        Body: { message: "" }
    };

    const lista = favoritos.favoritos.filter((f: any) => f.usuarioId === usuarioId);

    responseFormat = {
        StatusCode: lista.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
        Body: lista.length !== 0 ? lista : { message: "Nenhum favorito encontrado." }
    };

    return responseFormat;
    };