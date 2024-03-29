

##Hacemos uso de la librer�a e1071
library(e1071)

##Leemos los datos 
students<-read.table(file.choose(),header=TRUE,sep=',')

##Obtenemos las probabilidades
probability<-naiveBayes(CompraPC ~.,data=students[-1])

probability

##Leemos los nuevos datos
newsData<-read.table(file.choose(),header=TRUE,sep=',')

newsData

##Obtenemos la Predicci�n
prediction<-predict(probability,newsData)
newsData$prediction<-prediction

newsData