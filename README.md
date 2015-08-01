# Aurelia-loopback-sample
This repository goes together with a blog post on blog.opinionatedapps.com where the sample is created in a step-by-step manner based on yeoman for both aurelia and loopback.

You can also simply clone this repository and you get immediately the end result presented in the blog article.

## Installation instructions
```
git clone https://github.com/paulvanbladel/aurelia-loopback-sample.git
cd aurelia-loopback-sample
npm install
cd client
npm install
jspm install
```

##how to run the sample
You need to open two command prompts. One in the client folder and one in the server folder.
In the server folder type:
```
node server.js
```
This should give following output:
```
λ node server.js
Browse your REST API at http://localhost:3000/explorer
Web server listening at: http://localhost:3000/
```
In the client folder type:
```
gulp watch
```
