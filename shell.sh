# #!/bin/bash

read -p "ketik 1 untuk run - 2 untuk build :" pointing
if [ "$pointing" = 1 ]
then
  cd ./android && ./gradlew clean
  cd ../ && react-native run-android
else 
  cd ./android && ./gradlew clean && ./gradlew assembleRelease
fi