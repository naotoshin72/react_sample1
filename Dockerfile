FROM node:latest

ENV LANG C.UTF-8

RUN npm init -y
RUN npm install -g create-react-app

RUN mkdir /react_sample1
