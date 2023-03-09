class World
{
    constructor(sky, land, sea, wind, temperature, humidity, size, pressure)
    {
        this.sky = sky;
        this.land = land;
        this.sea = sea;
        this.wind = wind;
        this.temperature = temperature;
        this.humidity = humidity;
        this.size = size;
        this.pressure = pressure;
    }

    getSky()
    {
        return this.sky;
    }

    getLand()
    {
        return this.land;
    }

    getSea()
    {
        return this.sea;
    }

    getWind()
    {
        return this.wind;
    }

    getTemperature()
    {
        return this.temperature;
    }

    getHumidity()
    {
        return this.humidity;
    }

    getSize()
    {
        return this.size;
    }

    getPressure()
    {
        return this.pressure;
    }

    setSky(sky)
    {
        this.sky = sky;
    }

    setLand(land)
    {
        this.land = land;
    }

    setSea(sea)
    {
        this.sea = sea;
    }

    setWind(wind)
    {
        this.wind = wind;
    }

    setTemperature(temperature)
    {
        this.temperature = temperature;
    }

    setHumidity(humidity)
    {
        this.humidity = humidity;
    }

    setSize(size)
    {
        this.size = size;
    }

    setPressure(pressure)
    {
        this.pressure = pressure;
    }

    toString()
    {
        return `sky-> ${this.sky} - land-> ${this.land} - sea-> ${this.sea} - wind-> ${this.wind} - temperature-> ${this.temperature} - humidity-> ${this.humidity} - size-> ${this.size} - pressure-> ${this.pressure}`;
    }

    calculateSize(a, b)
    {
        return (a*b);
    }
}

module.exports = World;
