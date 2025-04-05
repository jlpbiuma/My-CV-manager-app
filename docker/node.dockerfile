FROM node:20.19.0

WORKDIR /var/www/html

RUN apt-get update && apt-get install -y \
    git \
    curl && \
    rm -rf /var/lib/apt/lists/*

RUN npm install -g npm@latest

# First copy only package files
COPY package*.json ./

# Verify the files were copied
RUN ls -la

RUN npm install

# Copy the rest of the files
COPY . .

EXPOSE 5173

# CMD ["npm", "run", "dev"]
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]