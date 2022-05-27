function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate()
  .setTitle('ระบบติดตาม Vaccine Passport')
  .addMetaTag('viewport', 'width=device-width, inital-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
 
 
/* PROCESS FORM */
function processForm(formObject){  
  var result = "";
  if(formObject.searchtext){//Execute if form passes search text
      result = search(formObject.searchtext);
  }
  return result;
}
 
//SEARCH FOR MATCHED CONTENTS 
function search(searchtext){
  var spreadsheetId   = 'xxxxxx'; //** CHANGE !!!
  var dataRange        = 'Data!A2:C';                                    //** CHANGE !!!
  var data = Sheets.Spreadsheets.Values.get(spreadsheetId, dataRange).values;
  var ar = [];
  
  data.forEach(function(f) {
    if (~[ f[1].toString().toLowerCase() ].indexOf(searchtext.toString().toLowerCase())) {
      ar.push(f);
    }
  });
  return ar;
}
