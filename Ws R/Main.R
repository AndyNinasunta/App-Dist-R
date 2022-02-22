

##Hacemos uso de la librería e1071
library(e1071)

##Leemos los datos 
students<-read.table(file.choose(),header=TRUE,sep=',')

##Obtenemos las probabilidades
probability<-naiveBayes(CompraPC ~.,data=students[-1])

probability

##Leemos los nuevos datos
newsData<-read.table(file.choose(),header=TRUE,sep=',')

newsData

##Obtenemos la Predicción
prediction<-predict(probability,newsData)
newsData$prediction<-prediction

newsData