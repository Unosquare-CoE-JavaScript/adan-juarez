let students = [
    { name: "Mary", score: 90, school: "East" },
    { name: "James", score: 100, school: "East" },
    { name: "Steve", score: 40, school: "East" },
    { name: "Gabe", score: 90, school: "West" },
    { name: "Rachel", score: 85, school: "East" },
    { name: "Rochelle", score: 95, school: "West" },
    { name: "Lynette", score: 75, school: "East" }
];

let processStudents = function (data, callback) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].school.toLowerCase() === "east") {
            if (typeof callback === "function") {
                // callback, miliseconds, argument
                //Incorrect: setTimeout(callback, 0, data[i]);
                callback(data[i])
            }
        }
    }
}


console.log("Before determineTotal");

let determineTotal = function () {
    let total = 0,
        count = 0;

    processStudents(students, function (obj) {
        total = total + obj.score;
        count++;
    });

    console.log("Total Score: " + total + " - Total Count: " + count);
}
//is not asynchronous
//setTimeout(determineTotal(), 0)

//is asynchronous
setTimeout(determineTotal, 0)

console.log("End of code")