# 🎯 Challenge Easy Stage 10-03: Weather API Dashboard (Stage 10 - Fetch API and JSON)

## 📝 Description

Create a simple weather dashboard that fetches current weather data using a free weather API. Practice making API calls, handling JSON responses, and displaying data in an attractive interface.

## 🎯 Objectives

- Make API calls with API keys and query parameters
- Handle HTTP status codes and error responses
- Parse and display complex JSON data structures
- Create dynamic content based on API responses
- Practice promise chaining with `.then()` and `.catch()`

## 📋 Requirements

1. API Setup (using OpenWeatherMap free tier):

   ```javascript
   const API_KEY = 'your-api-key-here'; // Get free key from openweathermap.org
   const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
   
   // Example API call
   const url = `${BASE_URL}?q=London&appid=${API_KEY}&units=metric`;
   ```

2. Implement these functions:
   - Search weather by city name
   - Display current weather conditions
   - Show temperature, humidity, wind speed
   - Display weather icons and descriptions
   - Handle invalid city names gracefully

3. Weather data to display:
   - City name and country
   - Current temperature (Celsius/Fahrenheit toggle)
   - Weather description and icon
   - Feels like temperature
   - Humidity and wind speed
   - Sunrise and sunset times

## 💡 Example Implementation

```javascript
// Weather API functions
class WeatherApp {
  constructor() {
    this.apiKey = 'YOUR_API_KEY'; // Replace with actual API key
    this.baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    this.units = 'metric'; // metric for Celsius, imperial for Fahrenheit
  }
  
  async fetchWeather(city) {
    try {
      const url = `${this.baseUrl}?q=${city}&appid=${this.apiKey}&units=${this.units}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('City not found. Please check the spelling.');
        } else if (response.status === 401) {
          throw new Error('Invalid API key. Please check your configuration.');
        } else {
          throw new Error(`Weather service error: ${response.status}`);
        }
      }
      
      const data = await response.json();
      return data;
      
    } catch (error) {
      if (error.name === 'TypeError') {
        throw new Error('Network error. Please check your internet connection.');
      }
      throw error;
    }
  }
  
  displayWeather(weatherData) {
    const {
      name,
      sys: { country, sunrise, sunset },
      main: { temp, feels_like, humidity },
      weather: [{ main, description, icon }],
      wind: { speed }
    } = weatherData;
    
    // Update DOM elements
    document.getElementById('city-name').textContent = `${name}, ${country}`;
    document.getElementById('temperature').textContent = Math.round(temp);
    document.getElementById('description').textContent = description;
    document.getElementById('feels-like').textContent = Math.round(feels_like);
    document.getElementById('humidity').textContent = humidity;
    document.getElementById('wind-speed').textContent = speed;
    
    // Update weather icon
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    document.getElementById('weather-icon').src = iconUrl;
    document.getElementById('weather-icon').alt = description;
    
    // Format and display sunrise/sunset
    document.getElementById('sunrise').textContent = this.formatTime(sunrise);
    document.getElementById('sunset').textContent = this.formatTime(sunset);
    
    // Show weather container
    document.getElementById('weather-container').style.display = 'block';
    document.getElementById('error-message').style.display = 'none';
  }
  
  formatTime(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
  
  showError(message) {
    document.getElementById('error-message').textContent = message;
    document.getElementById('error-message').style.display = 'block';
    document.getElementById('weather-container').style.display = 'none';
  }
  
  showLoading() {
    document.getElementById('loading').style.display = 'block';
    document.getElementById('weather-container').style.display = 'none';
    document.getElementById('error-message').style.display = 'none';
  }
  
  hideLoading() {
    document.getElementById('loading').style.display = 'none';
  }
  
  async handleSearch() {
    const cityInput = document.getElementById('city-input');
    const city = cityInput.value.trim();
    
    if (!city) {
      this.showError('Please enter a city name');
      return;
    }
    
    try {
      this.showLoading();
      const weatherData = await this.fetchWeather(city);
      this.displayWeather(weatherData);
    } catch (error) {
      this.showError(error.message);
    } finally {
      this.hideLoading();
    }
  }
  
  toggleUnits() {
    this.units = this.units === 'metric' ? 'imperial' : 'metric';
    const unitButton = document.getElementById('unit-toggle');
    unitButton.textContent = this.units === 'metric' ? '°F' : '°C';
    
    // Re-fetch weather for current city if displayed
    const cityName = document.getElementById('city-name').textContent;
    if (cityName) {
      const city = cityName.split(',')[0];
      this.handleSearch();
    }
  }
}

// Initialize app
const weatherApp = new WeatherApp();

// Event listeners
document.getElementById('search-btn').addEventListener('click', () => {
  weatherApp.handleSearch();
});

document.getElementById('city-input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    weatherApp.handleSearch();
  }
});

document.getElementById('unit-toggle').addEventListener('click', () => {
  weatherApp.toggleUnits();
});

// Load default city on page load
window.addEventListener('load', () => {
  document.getElementById('city-input').value = 'London';
  weatherApp.handleSearch();
});
```

## 🚀 Expected Features

1. **Search Interface**:
   - City name input field
   - Search button and Enter key support
   - Loading indicator during API calls

2. **Weather Display**:
   - Clean, card-based layout
   - Weather icons from API
   - Temperature with unit toggle (°C/°F)
   - Additional weather metrics

3. **Error Handling**:
   - Network error messages
   - Invalid city handling
   - API key validation
   - User-friendly error display

## 🎨 Suggested HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather Dashboard</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>🌤️ Weather Dashboard</h1>
        </header>
        
        <div class="search-section">
            <div class="search-box">
                <input type="text" id="city-input" placeholder="Enter city name...">
                <button id="search-btn">Search</button>
                <button id="unit-toggle">°F</button>
            </div>
        </div>
        
        <div id="loading" class="loading">🔄 Loading weather data...</div>
        <div id="error-message" class="error"></div>
        
        <div id="weather-container" class="weather-card">
            <div class="weather-header">
                <h2 id="city-name"></h2>
                <img id="weather-icon" src="" alt="">
            </div>
            
            <div class="weather-main">
                <div class="temperature">
                    <span id="temperature"></span>°
                    <span class="unit" id="temp-unit">C</span>
                </div>
                <p id="description"></p>
            </div>
            
            <div class="weather-details">
                <div class="detail-item">
                    <span class="label">Feels like:</span>
                    <span id="feels-like"></span>°
                </div>
                <div class="detail-item">
                    <span class="label">Humidity:</span>
                    <span id="humidity"></span>%
                </div>
                <div class="detail-item">
                    <span class="label">Wind:</span>
                    <span id="wind-speed"></span> m/s
                </div>
                <div class="detail-item">
                    <span class="label">Sunrise:</span>
                    <span id="sunrise"></span>
                </div>
                <div class="detail-item">
                    <span class="label">Sunset:</span>
                    <span id="sunset"></span>
                </div>
            </div>
        </div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>
```

## 💡 Helpful Tips

- Sign up for a free API key at [OpenWeatherMap](https://openweathermap.org/api)
- API key should be kept secure (not exposed in production)
- Test API calls in browser console first
- Handle different HTTP status codes appropriately
- Use destructuring to extract data from complex JSON responses

## 🔧 Bonus Features

- 5-day weather forecast
- Weather maps integration
- Geolocation to get current location weather
- Favorite cities list with local storage
- Weather alerts and notifications
- Background changes based on weather conditions

## 📚 Learning Resources

- [OpenWeatherMap API Documentation](https://openweathermap.org/api)
- [Fetch API with Parameters](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Working with Weather APIs](https://blog.openweathermap.org/)
