# Bus Stop Maintenance Reporting System  
**Author:** Jason Dutcher

## Overview  
This project was developed for the **City of Wheat Ridge** to streamline the process of reporting maintenance issues at bus stops. It enables residents, field staff, or contractors to quickly submit concerns such as trash overflow, graffiti, snow buildup, or damaged infrastructure.

The goal was to create a **lightweight, accessible, and replicable tool** that uses **GPS-enabled web forms** and optionally integrates **SMS-based reporting**—all built on widely available platforms like **Google Apps Script and Google Sheets**. This project supports the city’s commitment to responsive public service and infrastructure upkeep.

## Live App
You can access the deployed version of the Bus Stop Maintenance Reporting form here:  
**[Launch the Reporting Tool](https://script.google.com/macros/s/AKfycbyuj4e472X-SSxlLKR1ZkvSM5-j1bBIscWInax_If4SqKq898bQwbOkwX0OnrfsXhkEgQ/exec)**

## Screenshots

### QR Code for Mobile Access  
Scan the QR code below to open the reporting tool on your phone:

<img src="https://drive.google.com/uc?export=view&id=1sVPcvDY9auFN-s2hvRGSMg3-R2qjv3Fh" alt="QR Code" width="300"/>

### Web Form Interface  
A preview of the reporting form as it appears in a mobile browser:

<img src="https://drive.google.com/uc?export=view&id=1WmZBf8Xfbh2l3O4GUX607KGpwz3EvCj5" alt="Web Form Screenshot" width="300"/>


### Submitted Data in Google Sheets
All records are stored on the `WebApp` tab of the Google Sheet linked via the `SPREADSHEET_ID` variable in the `Code.gs` file.

![View Data Sheet](https://drive.google.com/uc?export=view&id=1xj8r0qoCT9wmQg25Hlj-CriaNE6qaMlG)


## Why This Was Built  
While working with the city on a broader effort to optimize public infrastructure and maintenance (including route planning and pavement condition analysis), it became clear that bus stop issues were often underreported or inefficiently managed. This tool was designed to:

- Make it **easy** for anyone to report a problem at a bus stop.
- Collect **geographic coordinates automatically** to reduce guesswork.
- Route data to a central **Google Sheet** for internal tracking and action.
- Provide a **replicable framework** for use in other cities or departments.

## Features  

- **Automatic GPS capture** (if enabled by the user’s device)  
- **Simple form interface** with dropdown options  
- **Confirmation messages** after submission  
- **Data stored in Google Sheets** for easy integration  
- **Web version** using a clean HTML form  

## File Structure  
<pre> ├── Code.gs # Backend script to store reports in Google Sheets
├── Index.html # Web form interface (HTML, CSS, JS)
├── LICENSE # Terms of use for this project
└── README.md # This file </pre>


## How to Use / Deploy  

### Requirements  
- A [Google Account](https://accounts.google.com/signup)  
- A [Google Sheet](https://sheets.new) to collect form submissions  
- Access to [Google Apps Script](https://script.google.com)

### Setup Steps  
1. **Create a Google Sheet** with a tab called `WebApp`.  
2. **Open Google Apps Script**, paste in `Code.gs`, and link it to the Sheet using the ID.  
3. **Create a new HTML file** in the script editor and paste in `Index.html`.  
4. **Deploy as a web app**:  
   - Go to **Deploy > Test deployments** or **Manage deployments**  
   - Set access to “Anyone” or “Anyone with the link”  
5. Share the **link via QR code, printed signage, or the city website**.


## Example Use Cases  

- Resident sees an overflowing trash bin and submits a report in under 30 seconds  
- City contractors use the tool to log damaged signage during routine inspections  
- Future integration with maps and route optimization tools to prioritize responses  


## Intended Audience  
This tool was created for **municipal staff, public works teams, and civic tech collaborators** looking for easy ways to gather public feedback and improve maintenance workflows. It’s designed to be low-cost, easy to deploy, and simple for anyone to use.
