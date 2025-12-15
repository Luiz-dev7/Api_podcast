export enum ContentType {
  // Dados estruturados
  JSON = "application/json",
  XML = "application/xml",
  FORM_URLENCODED = "application/x-www-form-urlencoded",
  MULTIPART_FORM_DATA = "multipart/form-data",

  // Texto
  TEXT_PLAIN = "text/plain",
  TEXT_HTML = "text/html",
  TEXT_CSS = "text/css",
  TEXT_JAVASCRIPT = "text/javascript",

  // Scripts / dados
  JAVASCRIPT = "application/javascript",
  PDF = "application/pdf",

  // Imagens
  PNG = "image/png",
  JPEG = "image/jpeg",
  GIF = "image/gif",
  SVG = "image/svg+xml",
  WEBP = "image/webp",

  // Áudio
  MP3 = "audio/mpeg",
  WAV = "audio/wav",
  OGG_AUDIO = "audio/ogg",

  // Vídeo
  MP4 = "video/mp4",
  WEBM = "video/webm",
  OGG_VIDEO = "video/ogg",

  // Arquivos
  OCTET_STREAM = "application/octet-stream"
}
