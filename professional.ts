export class Professional {
    public name:string;
    public age:number;
    public genere:string;
    public weight:number;
    public height:number;
    public hairColor:string;
    public eyeColor:string;
    public race:string;
    public isRetired:boolean;
    public nationality:string;
    public oscarsNumber:number;
    public profession:string;

    constructor(name:string, age:number, genere:string, weight:number, height:number, hairColor:string, eyeColor:string, race:string, isRetired:boolean, nationality:string, oscarsNumber:number, profession:string)
    {
        this.name = name;
        this.age = age;
        this.genere = genere;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;

    }

    getName():string
    {
        return this.name;
    }

    setName(name:string)
    {
        this.name = name;
    }

    getAge():number
    {
        return this.age;
    }

    setAge(age:number)
    {
        this.age = age;
    }

    getGenere():string
    {
        return this.genere;
    }

    setGenere(genere:string)
    {
        this.genere = genere;
    }

    getWeight():number
    {
        return this.weight;
    }

    setWeight(weight:number)
    {
        this.weight = weight;
    }

    getHeight():number
    {
        return this.height;
    }

    setHeight(height:number)
    {
        this.height = height;
    }

    getHairColor():string
    {
        return this.hairColor;
    }

    setHairColor(hairColor:string)
    {
        this.hairColor = hairColor;
    }

    getEyeColor():string
    {
        return this.eyeColor;
    }

    setEyeColor(eyeColor:string)
    {
        this.eyeColor = eyeColor;
    }

    getRace():string
    {
        return this.race;
    }

    setRace(race:string)
    {
        this.race = race;
    }

    getIsRetired():boolean
    {
        return this.isRetired;
    }

    setIsRetired(isRetired:boolean)
    {
        this.isRetired = isRetired;
    }

    getNationality():string
    {
        return this.nationality;
    }

    setNationality(nationality:string)
    {
        this.nationality = nationality;
    }

    getOscarsNumber():number
    {
        return this.oscarsNumber;
    }

    setOscarsNumber(oscarsNumber:number)
    {
        this.oscarsNumber = oscarsNumber;
    }

    getProfession():string
    {
        return this.profession;
    }

    setProfession(profession:string)
    {
        this.profession = profession;
    }

    toString():string
    {
        return "Name: " +this.name+
            "\nAge: " +this.age+
            "\nGenere: " +this.genere+
            "\nWeight: " +this.weight+
            "\nHeight: " +this.height+
            "\nHairColor: " +this.hairColor+
            "\nEyeColor: " +this.eyeColor+
            "\nRace: " +this.race+
            "\nIsRetired: " +this.isRetired+
            "\nNationality: " +this.nationality+
            "\nOscarsNumer: " +this.oscarsNumber+
            "\nProfession: " +this.profession+ "\n";
    }



























}