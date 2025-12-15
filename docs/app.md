# nome do aplicativo:

-> Podcast multimanage

### descrição:

-> um aplicativo no estilo netflix, hbo etc, que possa centralizar diferentes estilos de podcast e organizar eles por sessão

### dominio:

-> podscats feitos em videos

### features:

-> listar os podcasts com seções de categorias por ex:
-->[Mentalidade, Humor, Saúde, Tech, Fitsness]
-> filtrar episodios por nome do podcast

### como:

->

### como vou implementar:

->  vou retonar em uma api rest(json) o nome do podcast , o nome do episodio, a imagem de capa do video, e o link

```js 

[
{
    podcastName: "flow",
    episode: "RUBINHOS BARRICHELO -flow #339",
    videoId: "4KDGTdiOV4I" ,
    cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
     link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
     categorie: [ "esporte", "corrida"]
},
{
    podcastName: "flow",
    episode: "CBUM -flow #319",
    videoId:"pQSuQmUfS30" ,
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
     link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
     categorie: ["saúde", "esporte", "bobybuilder"]
},
] 
```

