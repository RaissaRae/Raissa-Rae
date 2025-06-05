async function requestPDF() {
    const password = prompt("Enter password to access the file:");
    if (!password) return;

    const response = await fetch("/.netlify/functions/verify", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
    });

    if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        window.open(url, "_blank");
    } else {
        alert("Incorrect password.");
    }
}
