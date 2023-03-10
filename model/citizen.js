class Citizen
{
    constructor(id, name, surname, address)
    {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.address = address;
    }

    getId()
    {
        return this.id;
    }

    getName()
    {
        return this.name;
    }

    getSurname()
    {
        return this.surname;
    }

    getAddress()
    {
        return this.address;
    }

    setId(id)
    {
        this.id = id;
    }

    setName(name)
    {
        this.name = name;
    }

    setSurname(surname)
    {
        this.surname = surname;
    }

    setAddress(address)
    {
        this.address = address;
    }

    toString()
    {
        return `id-> ${this.id} - name-> ${this.name} - surname-> ${this.surname} - address -> ${this.address}`;
    }

}

module.exports = Citizen;
