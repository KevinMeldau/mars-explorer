# Mars Explorer

### Description
The site is pulling in two [API's from Nasa](https://api.nasa.gov/), APOD and Insight.

One of the most popular websites at NASA is the [Astronomy Picture of the Day](https://apod.nasa.gov/apod/astropix.html). In fact, this website is one of the most popular websites across all federal agencies.

### The APOD API
**Example image**
![Nasa image if the day example image](img/apod.jpg)

**HTTP Request**
`GET https://api.nasa.gov/planetary/apod`

**Example query**
`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`

### The Insight API
**Example image**
![Nasa insight example image](img/insight_photo.png)

**HTTP Request**
`GET https: //api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0`

**Example query**
`https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0`

