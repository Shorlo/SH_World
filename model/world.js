class World
{
    constructor()
    {
        this.sky;
        this.land;
        this.sea;
        this.wind;
        this.temperature;
        this.humidity;
        this.size;
        this.pressure;
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

    setSize(a, b)
    {
        this.size = this.calculateSize(a, b);
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
