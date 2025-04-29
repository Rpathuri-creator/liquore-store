// Function to handle form submission and save data to Google Sheets
function doPost(e) {
    // Retrieve the submitted form data
    const name = e.parameter.name;
    const email = e.parameter.email;
    const content = e.parameter.content;

    // Get the active spreadsheet and the "Form Responses" sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Form Responses");

    // Get the current timestamp
    const timestamp = new Date();

    // Append the form data to the sheet
    sheet.appendRow([timestamp, name, email, content]);

    // Return a success message
    return ContentService.createTextOutput("Form submitted successfully!");
}
