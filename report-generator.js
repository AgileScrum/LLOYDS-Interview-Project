const report = require('multiple-cucumber-html-reporter');
const path = require('path');
const projectName = path.basename(__dirname);
const projectVersion = "2.0"
const reporter = "Ajit Thakkar"
const reportGenerationTime = new Date().toLocaleString();

report.generate({
  reportName: 'LLOYDS Testing Report',
  jsonDir: 'cucumber-json-reports',
  reportPath: 'cucumber-json-reports/html',
  openReportInBrowser: true,
  disableLog: true,
  displayDuration: true,
  displayReportTime: true,
  durationInMS: true,
  
  customData: {
    title: 'LLOYDS - Testing Info',
    data: [
      { label: 'Project', value: `${projectName}` },
      { label: 'Release', value: `${projectVersion}` },
      { label: 'Report Generation Time', value: `${reportGenerationTime}` },
      { label: 'Reporter', value: `${reporter}` },
      { label: 'Test Environment', value: 'Prod' },
      { label: 'Browser', value: 'Chrome 127.0' },
      { label: 'Operating System', value: 'Windows 11 Home' },
    ],
  },
 
});