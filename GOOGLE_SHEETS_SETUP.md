# Google Sheets Integration Setup

## Step 1: Create Google Apps Script Project

1. Go to [Google Apps Script](https://script.google.com/)
2. Create a new project
3. Copy the code from `google-apps-script.js` file
4. Paste it into the Apps Script editor
5. Save the project

## Step 2: Create Google Sheet

1. Create a new Google Sheet
2. Note down the Sheet ID from the URL
3. In your Apps Script project, you can either:
   - Use `SpreadsheetApp.getActiveSheet()` (if you open the sheet from Apps Script)
   - Or use `SpreadsheetApp.openById('YOUR_SHEET_ID')` to reference a specific sheet

## Step 3: Deploy as Web App

1. In Apps Script, click "Deploy" > "New deployment"
2. Choose "Web app" as the type
3. Set execute permissions to "Anyone"
4. Click "Deploy"
5. Copy the web app URL

## Step 4: Configure Environment Variables

1. Create a `.env.local` file in your project root
2. Add the following line:
```
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```
Replace `YOUR_SCRIPT_ID` with the actual script ID from your web app URL.

## Step 5: Test the Integration

1. Start your Next.js development server
2. Fill out the contact form
3. Check your Google Sheet to see if the data appears

## Google Sheet Headers

The script will automatically create these headers in your sheet:
- Timestamp
- Name
- Email
- Phone
- Company
- Services
- Query
- UTM Source
- UTM Medium
- UTM Campaign
- UTM Term
- UTM Content
- Page URL

## UTM Parameters

The form automatically captures UTM parameters from the URL:
- `utm_source` - Traffic source (e.g., google, facebook)
- `utm_medium` - Marketing medium (e.g., search, social)
- `utm_campaign` - Campaign name
- `utm_term` - Keywords (for paid search)
- `utm_content` - Content identifier (for A/B testing)

Example URL: `https://yoursite.com/?utm_source=google&utm_medium=search&utm_campaign=summer2024`
