const path = require("path");
const express = require("express");
const fs = require("fs");
const http = require("http");
const https = require("https");

// express app
const app = express();

try {
    //certificate
    const privateKey = fs.readFileSync(
        "/etc/letsencrypt/live/qjmtech.me/privkey.pem",
        "utf8"
    );
    const certificate = fs.readFileSync(
        "/etc/letsencrypt/live/qjmtech.me/cert.pem",
        "utf8"
    );
    const ca = fs.readFileSync(
        "/etc/letsencrypt/live/qjmtech.me/fullchain.pem",
        "utf8"
    );

    const credentials = {
        key: privateKey,
        cert: certificate,
        ca: ca,
    };

    // add middlewares
    app.use(express.static(path.join(__dirname, "..", "build")));
    app.use(express.static("public"));
    app.use(express.static(__dirname, { dotfiles: "allow" }));

    // Starting both http & https servers
    const httpServer = http.createServer(app);
    const httpsServer = https.createServer(credentials, app);
    
    httpServer.listen(80, () => {
        console.log("HTTP Server running on port 80");
        
    });

    httpsServer.listen(443, () => {
        console.log("HTTPS Server running on port 443");
    });
} catch (e) {
    //error
    console.log("Error", e.stack);
    console.log("Error", e.name);
    console.log("Error", e.message);
    // custom error
    console.log("Launching development server");
    // add middlewares
    app.use(express.static(path.join(__dirname, "..", "build")));
    app.use(express.static("public"));

    // start express server on port 5000
    app.listen(5000, () => {
        console.log("server started on port 5000");
    });
}
