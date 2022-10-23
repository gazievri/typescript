"use strict";
// X может быть только один из трех значений определнных в Status
const stat = "loading";
// Если у нас идут юнионы, то мы должны уточнять как мы с ними будем работать
function welcome(person) {
    if (Array.isArray(person)) {
        console.log("Hello", person.join(' '));
        return 1;
    }
    else {
        console.log("Hello", person);
        return "1";
    }
}
const ivan = {
    login: "ivan",
    skills: ["js", "css"],
    level: "junior",
};
function gradeDeveloper(user, nextLevel) {
    user.level = nextLevel;
    return user;
}
gradeDeveloper(ivan, "middle");
