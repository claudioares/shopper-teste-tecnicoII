# Usando imagem oficial do Node.js
FROM node:20

# Definir diretório de trabalho
WORKDIR /usr/src/app

# Copiar package.json e package-lock.json (ou yarn.lock)
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar todos os arquivos do frontend
COPY . .

# Rodar a build do Vite
RUN npm run build

# Expor a porta 80 para o frontend
EXPOSE 80

# Definir o comando para rodar o servidor de produção do Vite
CMD ["npm", "run", "preview"]
