#* @apiTitle Prediciones
#* @apiDescription Esta api hace predicciones de grupos de datos

  
#' @filter cors
cors <- function(req, res) {
  
  res$setHeader("Access-Control-Allow-Origin", "*")
  
  if (req$REQUEST_METHOD == "OPTIONS") {
    res$setHeader("Access-Control-Allow-Methods","*")
    res$setHeader("Access-Control-Allow-Headers", req$HTTP_ACCESS_CONTROL_REQUEST_HEADERS)
    res$status <- 200 
    return(list())
  } else {
    plumber::forward()
  }
  
}


#* Prueba
#* @param msj El mensaje 
#* @get /echo

function(msj=""){
  cors
  list(msj = paste0("El texto dice:", msj))
}

#* ErrorMedio 
#* @param data1 Valores para la visualizacion
#* @param dataex Valores experimientales 
#* @get /errorMedio

function(data1="[]",dataex="[]")
{
  cors
  vr_dx = 0
  data1a <- jsonlite::fromJSON(data1)
  dataexa <-  jsonlite::fromJSON(dataex)
  data1a <-unlist(data1a)
  dataexa <-unlist(dataexa)
  data1a <- as.numeric(data1a)
  dataexa <- as.numeric(dataexa)
  media_data = 0
  media_data = mean(data1a)
  for (variable in length(dataexa)) {
    vr_dx = vr_dx + (dataexa[variable] - media_data)^2
  }
  vrf_dataex  = (vr_dx)/(length(dataexa))
  errorMedio = sqrt(vrf_dataex)/sqrt(length(dataexa))
  print(paste(errorMedio))
}


#* Visualizacion graficos de 2 csv
#* @param data1 valores para la visualizacion
#* @param dataex valores exp
#* @param name titulo para la imagen a retornar
#* @serializer png
#* @get /imagPng
imagmiss2 <-function(data1="[]", dataex="[]", name = "")
{
  cors
  data1 <- jsonlite::fromJSON(data1)
  dataex <-  jsonlite::fromJSON(dataex)
  
  plot(data1, type = 'l', main = name)
  #points(dataex, type='l', col=2)
}

