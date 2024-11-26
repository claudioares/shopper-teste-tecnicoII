# Usando imagem oficial do Node.js
FROM node:20

# Definir diretório de trabalho
WORKDIR /usr/src/app

# Copiar package.json e package-lock.json (ou yarn.lock)
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar todos os arquivos do backend
COPY . .

# Compilar o código TypeScript
RUN npm run build

# Expor a porta 8080
EXPOSE 8080

# Definir o comando para rodar a aplicação compilada
CMD ["npm", "run", "start:prod"]
