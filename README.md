# react_sample1


## how to genetate initial react app

```
  $ docker build -t react_sample1:latest ./
  $ docker run -itd -v `pwd`:/react_sample1 --name react_sample1_container react_sample1:latest
  $ docker exec react_sample1_container create-react-app react_sample1/react-front
```


## how to start react-front app

```
  $ docker-conpose build
  $ docker-conpose run react_front npm install
  $ docker-conpose up -d
```
