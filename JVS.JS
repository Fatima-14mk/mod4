// Array of names
var names = ["John", "Jane", "Michael", "Alice"];

// Function to determine greeting message
function getGreeting(name) {
    if (name.charAt(0).toUpperCase() === 'J') {
        return "Goodbye " + name;
    } else {
        return "Hello " + name;
    }
}

// Loop over the names and display messages
var outputDiv = document.getElementById("output");
for (var i = 0; i < names.length; i++) {
    var greeting = getGreeting(names[i]);
    console.log(greeting); // Print to console
    outputDiv.innerHTML += "<p>" + greeting + "</p>"; // Display in HTML
}
