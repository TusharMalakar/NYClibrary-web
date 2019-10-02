# stage 1:  to build the "Image" using node 
FROM node:latest as node
#initializing the working directory to work from the image
WORKDIR /app
#coping the files to the "/app" folder of docker image
COPY . .
#installing app from "/app" folder
RUN npm install
#create the dist folder of prpduction
RUN npm run build --prod

# stage 2: to run the docker image
FROM nginx:alpine
COPY --from=node /app/dist/testForm /usr/share/nginx/html