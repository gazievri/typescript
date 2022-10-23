// юнионы
type Status = "ok" | "loading" | "error";

// X может быть только один из трех значений определнных в Status
const stat: Status = "loading"

// Если у нас идут юнионы, то мы должны уточнять как мы с ними будем работать
function welcome(person: [string, string] | string): number | string {
    if (Array.isArray(person)) {
        console.log("Hello", person.join(' '));
        return 1;
    } else {
        console.log("Hello", person);
        return "1";
    }
}

// Практика

type Level = "junior" | "middle" | "senior";

interface Developer {
    login: string;
    skills: string[];
    level: Level;
}

const ivan: Developer = {
    login: "ivan",
    skills: ["js", "css"],
    level: "junior",
}

function gradeDeveloper( user: {level: Level}, nextLevel: Level) {
    user.level = nextLevel;
    return user;
}

gradeDeveloper(ivan, "middle")

