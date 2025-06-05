//js code for internship files
async function requestPDF() {
    const password = prompt("Enter password to access the file:");
    if (!password) return;

    const response = await fetch('verify.php', {
        method: 'POST', //post used to send data to the server
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'password=' + encodeURIComponent(password)
    });

    if (response.ok) {
        // Create a blob to download/view the PDF - opens pdf in a new tab
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        window.open(url, '_blank');
    } else {
        alert("Incorrect password.");
    }
}