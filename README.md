# World Weather - Node Console App

## Description

This is a console application made in Node, which allows to obtain the weather of any city around the world.

Internally it uses the following apis:

* Geocode to get the coordinates: https://geocode.xyz/
* Open Weather Map to get the weather: https://openweathermap.org/

For both apis we must create an account and obtain an api key, which will be used in the application later.

## How to use?

First, download or clone the repository and run in console the following command to download the associated dependencies:

```
npm install
```

Before running the application we must modify the files 'place/place.js' (variable 'auth_key') and 'weather/weather.js' (variable 'appId'), changing in them the values of the previously generated api keys for 'Geocode' and 'Open Weather Map¿ recpectively.

To run the application we must open a console, locate ourserlves in the path of our project and execute the following sentence:

```
node app --direction "MI_CITY"
```

Where "MY_CITY" is the city name to which we want to find the weather.

Nota: It is also possible to use short forms for the parameter '--direction' (-d)