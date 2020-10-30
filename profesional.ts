export class Professional {
    public name:string;
    public age:number;
    public genre:string;
    public weight:number;
    public height:number;
    public hairColor:string;
    public eyeColor:string;
    public race:string;
    public isRetired:boolean;
    public nationality:string;
    public oscarNumbers:number;
    public profession:string;
    
    constructor (name:string, age:number, genre:string, weight:number, height:number, hairColor:string, eyeColor:string, race:string, 
                isRetired:boolean, nationality:string, oscarNumbers:number, profession:string) {
            this.name = name;
            this.age = age;
            this.genre = genre;
            this.weight = weight;
            this.height = height;
            this.hairColor = hairColor;
            this.eyeColor = eyeColor;
            this.race = race;
            this.isRetired = isRetired;
            this.nationality = nationality;
            this.oscarNumbers = oscarNumbers;
            this.profession = profession;                 
            }
            public toString() {   
                var texto = "Name: " + this.name + "\n" + 
                "Age: " + this.age + "\n" + 
                "Gender: " + this.genre + "\n" +
                "Weight: " + this.weight + "\n" + 
                "Height: " + this.height + "\n" +
                "Hair Color: " + this.hairColor + "\n" + 
                "Eye Color: " + this.eyeColor + "\n" + 
                "Race: " + this.race + "\n" + 
                "Is Retired?: " + this.isRetired + "\n";
                "Nationality: " + this.nationality + "\n";
                "Oscar Numbers: " + this.oscarNumbers + "\n";
                "Profession: " + this.profession + "\n";
                console.log(texto); 
            } 
}

