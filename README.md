# Ghana Estates — Web Application

A responsive, static Ghana-focused real estate discovery website built with HTML, CSS and vanilla JavaScript. It includes sample property cards, client-side filters, a responsive navigation menu and an enquiry form that prepares an email draft.

## Project structure

```text
s13gyan-ghana-webapp/
├── index.html
├── assets/
│   ├── styles.css
│   └── app.js
├── Dockerfile
├── .dockerignore
└── README.md
```

## Run locally

No build tools or package installation are required.

From this folder, start a simple local web server with Python:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000` in your browser. Stop the server with `Ctrl+C`.

## Build and run with Docker

Build the image:

```bash
docker build -t ghana-estates:1.0 .
```

Run the container:

```bash
docker run -d --name ghana-estates -p 8080:80 ghana-estates:1.0
```

Open `http://localhost:8080`.

Check the container:

```bash
docker ps
docker logs ghana-estates
```

Stop and remove it:

```bash
docker stop ghana-estates
docker rm ghana-estates
```

## Important notes

- The property listings and prices are fictional demonstration content. Replace them with verified listings before public/business use.
- The property photos and Google Fonts are loaded from external services, so those visual assets require an internet connection.
- The enquiry form opens the visitor's email application. It does not store or send enquiries to a server.
- This is a front-end demonstration. It does not include a database, authentication, property management dashboard or backend API.
