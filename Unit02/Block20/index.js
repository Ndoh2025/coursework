const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
    const rootElement = document.getElementById("root");
    const H1Element = document.createElement("H1");
    H1Element.innerHTML = "FREELANCERS";
    rootElement.appendChild(H1Element);
    const orderedList = document.createElement("ol");
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        const listElement = document.createElement("li");
         listElement.innerHTML = `name: ${user.name} | age: ${user.age} | occupation: ${user.occupation}`;
      // listElement.innerHTML = user.name;
       orderedList.appendChild(listElement);
    }
    rootElement.appendChild(orderedList);
}

//call the main function
main();