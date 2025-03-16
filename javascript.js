document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (username === "" || password === "") {
        alert("Please fill in all fields");
        return;
    }

    // Here you can add your login logic, like sending data to a server
    console.log("Username:", username);
    console.log("Password:", password);

    // Redirect or show a success message
    alert("Login successful!");
});