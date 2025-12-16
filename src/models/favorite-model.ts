export interface FavoriteModel {
    StatusCode: number , 
    Body : { usuarioId: number; videoId: string }[] | { message: string }
}