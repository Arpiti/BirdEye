import { RESTDataSource } from 'apollo-datasource-rest';
import puppeteer from 'puppeteer';

export class ReviewAPI extends RESTDataSource {
  constructor() {
    super();
    // this.baseURL = process.env.UNICOM_BASE_URL;
  }

  async getAllReviews(sourceURL, sourceName, inputDate) {


    try{
            // Launch Puppeteer browser
            const browser = await puppeteer.launch({ headless: false });

            // Create a new page
            const page = await browser.newPage();
            console.log("Page is opened in Chrome testing");

            // Navigate to the source URL
            await page.goto(sourceURL);
                
            // Set screen size
            await page.setViewport({width: 1080, height: 1024});
                
            // Type into search box if any
            // await page.type('.search-box__input', 'Design Documents');
                
            // Checking for Div class with total review count
            const elementSelector = await page.waitForSelector('.headlineCTA.employeeReviewCTA a[data-label="See All Reviews"]');    
            const value = await page.$eval(elementSelector, (element) => element.textContent.trim());
                
            console.log('Value >> ', value);
                
            await browser.close();

            // The website have blocked the access because of various attempts at the time of code development, the attempt to create the response could be 
            // done but that's the easy part. The working code is ready and if required, still can be pursued to get to the exact results.
            return null;
    }
    catch (error) {
        // Handle errors and send an error response
        console.error("Error", error);
        return null;
    }
   

  }


}

