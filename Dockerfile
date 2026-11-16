FROM nginx:1.27-alpine

# Remove Nginx's default website.
RUN rm -rf /usr/share/nginx/html/*

# Copy our static website into Nginx's web directory.
COPY index.html /usr/share/nginx/html/index.html
COPY assets/ /usr/share/nginx/html/assets/

# Nginx listens on port 80 inside the container.
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
