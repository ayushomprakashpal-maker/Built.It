
/*
  FIXED.IT — Google Sheets Form Receiver
  1. Create a Google Sheet.
  2. Create a sheet/tab named "Submissions".
  3. Put these headers in row 1:
     Timestamp | Form Type | Name | Email | Phone | Item Type | Service | Age Group | Interest | Rating | Topic | Message
  4. Extensions → Apps Script.
  5. Paste this code and save.
  6. Deploy → New deployment → Web app.
     Execute as: Me
     Who has access: Anyone
  7. Copy the Web App URL into script.js:
     const APPS_SCRIPT_URL = "YOUR_URL_HERE";
*/

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Submissions");
  if (!sheet) {
    return ContentService
      .createTextOutput(JSON.stringify({ok:false, error:"Create a sheet named Submissions"}))
      .setMimeType(ContentService.MimeType.JSON);
  }

  const p = e.parameter || {};
  sheet.appendRow([
    new Date(),
    p.formType || "",
    p.name || "",
    p.email || "",
    p.phone || "",
    p.itemType || "",
    p.service || "",
    p.ageGroup || "",
    p.interest || "",
    p.rating || "",
    p.topic || "",
    p.message || ""
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ok:true}))
    .setMimeType(ContentService.MimeType.JSON);
}
