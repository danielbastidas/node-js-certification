var homework = {
    topic: "JS"
};

var otherHomework = Object.create(homework);

console.log(otherHomework.topic);   // "JS"
console.log(homework.topic);   // "JS"
otherHomework.topic = "Math"
console.log(otherHomework.topic);   // "Math"
console.log(homework.topic);   // "JS"