# A simple calculator App

This project is a simple calculator app which allows user to basic mathematical operations and store them in the memory. This uses rest call to http://www.randomnumberapi.com/api/v1.0/random to generate the random numbers to perform operation and [Material UI](https://material-ui.com/) framework for the UI. 

## Pre requisites to run this project

1. Node + NPM
2. React
3. Docker
4. Docker-compose
5. Nginx

## To start the dev servers run the following command 

To start application in log mode
```
docker-compose up
```

To start application in daemon mode
```
docker-compose start
```

To stop the application
```
docker-compose stop
```

To get the trace
```
docker-compose log
```

## To start the application in dev mode, run the following commands

Fetch and install all the dependencies
```
npm install
```

If needed fix the issues using audits
``` 
npm audit fic
```

Then start dev server
```
npm start
```
