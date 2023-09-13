// Interns interface with the attributes that were required
interface Interns{
    name: string;
    age: number;
    skills: ["React", "HTML", "Js", "TypeScript", ".Net", "PHP", "Java"];
}

// Juniors interface with the attributes that were required,
// could have inherited the Interns interface for the 3 attributes in this case..decides to write them anyways :)
interface Juniors{
    name: string;
    age: number;
    skills: ["React", "HTML", "Js", "TypeScript", ".Net", "PHP", "Java"];
    date_of_promotion: string;
    domain: Domain;
}

// Declaring the enum.. then using it in the Juniors interface
declare enum Domain{
    Web = "Web",
    Connect = "Connect",
    Backend = "Backend"
}

// Company interface with the attributes that were required
interface Company{
    Interns: Interns[];
    Juniors: Juniors[];
    country: string;
}

// Exporting the Company interface so it can be used
export default Company;