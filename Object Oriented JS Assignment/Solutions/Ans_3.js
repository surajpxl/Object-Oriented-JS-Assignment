class Temperature {
  constructor(celsius = 0) {
    // Initialize temperature with celsius value, default is 0°C
    if (isNaN(celsius)) {
      throw new Error('Initial temperature must be a number.');
    }
    this._celsius = celsius;
    this._fahrenheit = this.convertCelsiusToFahrenheit(celsius);
  }

  // Getter for Celsius
  get celsius() {
    return this._celsius;
  }

  // Setter for Celsius
  set celsius(value) {
    if (isNaN(value)) {
      throw new Error('Temperature must be a number.');
    }
    this._celsius = value;
    this._fahrenheit = this.convertCelsiusToFahrenheit(value);
  }

  // Getter for Fahrenheit
  get fahrenheit() {
    return this._fahrenheit;
  }

  // Setter for Fahrenheit
  set fahrenheit(value) {
    if (isNaN(value)) {
      throw new Error('Temperature must be a number.');
    }
    this._fahrenheit = value;
    this._celsius = this.convertFahrenheitToCelsius(value);
  }

  // Convert Celsius to Fahrenheit
  convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }

  // Convert Fahrenheit to Celsius
  convertFahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }

  // Display both Celsius and Fahrenheit temperatures
  displayTemperature() {
    console.log(`Temperature: ${this._celsius}°C / ${this._fahrenheit}°F`);
  }
}

// Example


try {
  const temp = new Temperature(0);  // Start with 0°C, which is 32°F
  temp.displayTemperature();        // Displays 0°C / 32°F
  
  temp.celsius = 25;               // Set temperature to 25°C
  temp.displayTemperature();       // Displays 25°C / 77°F

  temp.fahrenheit = 100;           // Set temperature to 100°F
  temp.displayTemperature();       // Displays 37.777...°C / 100°F

  temp.celsius = 'invalid';        // Will throw error because input is not a number
} catch (error) {
  console.log(error.message);      // Error: Temperature must be a number.
}
