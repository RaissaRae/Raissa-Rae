export async function handler(event) {
    const correctPassword = process.env.PDF_PASSWORD;

    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: "Method Not Allowed",
        };
    }

    const { password } = JSON.parse(event.body || "{}");

    if (password === correctPassword) {
        // Serve the PDF file
        const fs = require("fs");
        const path = require("path");

        const filePath = path.join(__dirname, "..", "..", "protected", "protected/agfa_project_plan");
        const fileData = fs.readFileSync(filePath);

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": 'inline; filename="protected/agfa_project_plan.pdf"',
            },
            body: fileData.toString("base64"),
            isBase64Encoded: true,
        };
    }

    return {
        statusCode: 401,
        body: "Unauthorized: Incorrect password.",
    };
}
