// Google Apps Script File: Code.gs ==========
// This script handles serving the HTML form and recording submissions to a Google Sheet.

/**
 * Serves the HTML page when the web app is accessed via browser.
 * @returns {HtmlOutput} The rendered HTML form for user interaction.
 */

function doGet(e) {
  return HtmlService.createTemplateFromFile('Index')  // Loads the Index.html file
    .evaluate()                                       // Processes the HTML template
    .setTitle('Bus Stop Maintenance Reporting');      // Sets the browser tab title
}

/**
 * Submits the form data to the designated Google Sheet.
 * @param {Object} formObject - The object containing form input values.
 * @returns {string} A status message indicating success or error.
 */
function submitForm(formObject) {
  try {
    // Step 1: Define the target Google Sheet by its ID
    const SPREADSHEET_ID = '.'; // Replace with sheet ID

    // Step 2: Open the spreadsheet and target the correct sheet tab
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName('WebApp'); // Ensure tab name matches

    // Step 3: Append a new row of data with timestamp and form values
    sheet.appendRow([
      new Date(),                 // Automatically records the timestamp
      formObject.stopId || '',    // Bus Stop ID (User input)
      formObject.issue || '',     // Type of issue (User selects)
      formObject.latitude || '',  // Location (latitude from GPS)
      formObject.longitude || '', // Location (longitude from GPS)
      formObject.notes || ''      // Additional details (User input)
    ]);

    // Step 4: Return confirmation message to be displayed in UI
    return 'Report submitted successfully. Thank you!';
  } catch (error) {
    // If something goes wrong, return an error message
    return 'Error: ' + error.message;
  }
}
