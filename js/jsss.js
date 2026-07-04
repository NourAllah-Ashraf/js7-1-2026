let customers = [];

function addUser() {
    let name = prompt("Enter a name:");
    let id = prompt("Enter an id:");
    let balance = parseFloat(prompt("Enter a balance:"));
    let user = customers.find((customer) => customer.id === id);
    if (user) {
        alert("User already exists");
    } else {
        return { name, id, balance };
    }
}
for (let i = 0; i < 3; i++) {
    customers.push(addUser());
}
console.table(customers);


function withdraw(id, newBalance) {
    let user = customers.find((customer) => customer.id === id);
    if (user) {
        if (user.balance >= newBalance) {
            user.balance -= newBalance;
            console.log("Your balance now: " + user.balance);
        } else {
            console.log("Insufficient funds");
        }
    } else {
        console.log("User not found");
    }
}
let id = prompt("Enter your ID:");
let amount = parseFloat(prompt("Enter amount:"));
withdraw(id, amount);
console.table(customers);


function transfer() {
    let fromId = prompt("Enter sender's ID:"); 
    let fromUser = customers.find((customer) => customer.id === fromId);
    if (fromUser) {
        let toId = prompt("Enter the ID to transfer to:");
        let toUser = customers.find(customer => customer.id === toId); 
        if (toUser) {
            let transferAmount = parseFloat(prompt("Enter the amount to transfer:"));
            if (transferAmount <= fromUser.balance) { 
                fromUser.balance -= transferAmount;
                toUser.balance += transferAmount;
                console.log("Transfer successful!");
            } else {
                console.log("Insufficient funds");
            }
            console.table(customers); 
        } else {
            console.log("Recipient not found");
        }
    } else {
        console.log("Sender not found");
    }
}
transfer();

function deleteUser() {
    let idToDelete = prompt("Enter the ID to delete:");
    customers = customers.filter(customer => customer.id !== idToDelete);
    console.log("Done!");
    console.table(customers);
}
deleteUser();



    
