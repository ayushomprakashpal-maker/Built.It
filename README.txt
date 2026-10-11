# FIXED.IT — Gen-Z Repair & Restoration Website

## Included pages
- index.html — Home
- about.html — About Us
- services.html — Services / Products
- gallery.html — Gallery
- contact.html — Contact + Registration + Product Enquiry + Feedback forms
- style.css — responsive Gen-Z styling
- script.js — navigation, animations and Google Sheets form submission
- google_apps_script.gs — Google Apps Script receiver
- assets/ — local SVG visual artwork

## Google Sheets connection
1. Create a Google Sheet.
2. Create a tab named `Submissions`.
3. Add this header row:
   Timestamp | Form Type | Name | Email | Phone | Item Type | Service | Age Group | Interest | Rating | Topic | Message
4. Open Extensions → Apps Script.
5. Paste the code from `google_apps_script.gs`.
6. Save.
7. Deploy → New deployment → Web app.
8. Execute as: Me.
9. Who has access: Anyone.
10. Copy the Web App URL.
11. Open `script.js` and replace:
   PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE
   with your URL.
12. Open the website and submit a test form.

## Important
The forms intentionally work in "Demo mode" until the Apps Script URL is added. Once connected, the JavaScript sends form data to the Apps Script Web App and the Apps Script appends it to the `Submissions` sheet.

## Run locally
You can simply open `index.html` in a browser. For a smoother local experience, use VS Code + Live Server.

## Submission
Submit the whole `FIXED_IT_GenZ_Website` folder. Also submit/share the Google Sheet used as the data store according to your college's instructions.