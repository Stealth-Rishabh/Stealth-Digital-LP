// Google Apps Script Code for Google Sheets Integration
// Copy this code to your Google Apps Script project

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet (replace with your spreadsheet ID)
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // If this is the first row, add headers
    if (sheet.getLastRow() === 0) {
      const headers = [
        'Timestamp',
        'Name',
        'Email',
        'Phone',
        'Company',
        'Services',
        'Query',
        'UTM Source',
        'UTM Medium',
        'UTM Campaign',
        'UTM Term',
        'UTM Content',
        'Page URL'
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // Format headers
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('white');
    }
    
    // Prepare row data
    const rowData = [
      data.timestamp,
      data.name,
      data.email,
      data.phone,
      data.company,
      data.services,
      data.query,
      data.utm_source,
      data.utm_medium,
      data.utm_campaign,
      data.utm_term,
      data.utm_content,
      data.page_url
    ];
    
    // Add the new row
    sheet.appendRow(rowData);
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, rowData.length);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Data saved successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function to verify the script works
function testDoPost() {
  const testData = {
    timestamp: new Date().toISOString(),
    name: 'Test User',
    email: 'test@example.com',
    phone: '9876543210',
    company: 'Test Company',
    services: 'seo',
    query: 'This is a test query',
    utm_source: 'google',
    utm_medium: 'search',
    utm_campaign: 'test-campaign',
    utm_term: 'test-term',
    utm_content: 'test-content',
    page_url: 'https://example.com'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  console.log('Test result:', result.getContent());
}
