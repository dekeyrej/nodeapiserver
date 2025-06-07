# Node.js API-server for Matrix Data

This code/container provides an API to access the latest data gathered by the [matrix microservices](https://github.com/dekeyrej/microservicematrix)

Similar to the [matrixclient](https://github.com/dekeyrej/matrixclient), the API server retrieves inital data for each of the data models (AQI, Moon, Weather, MLB, NFL, a Google Calendar, family events, and Github) from the cluster postgresql database, and subscribes to the cluster redis update topic to read any updated data as soon as it is posted by the microservices. It also implements a POST interface for webcontrol to send mesages to the matrix client via redis.

the currently implemented API hierarchy is as follows:

```
environment/
           /aqi
           /moon
           /weather/current
                   /hourly
                   /forecast
mlb/
   /team/<BOS>
nfl/
   /team/<KC>
webcontrol/<pp>
```

Running for development/testing is as simple as "node index.js"