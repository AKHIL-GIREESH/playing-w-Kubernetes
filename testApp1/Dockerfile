FROM ubuntu

RUN apt update

RUN apt install -y nodejs npm

WORKDIR /app

RUN npm init -y

RUN npm i express dotenv

COPY expressApp .

ENTRYPOINT ["node", "index.js"]