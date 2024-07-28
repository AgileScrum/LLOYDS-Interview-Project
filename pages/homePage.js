import { Selector, t } from "testcafe";
import axios from "axios";

class homePage {
  constructor() {
    this.lloydsDesktopLogo = Selector('icon').withAttribute('data-svg-path', '/assets/lloyds-desktop-logo.svg').child('svg');
    this.title = Selector("title");
    this.mainMenu = Selector("button").withText("Menu");
    this.allHeading = Selector(".heading-container h2");
    this.allSubHeading = Selector(".heading-container p");
    this.personalHeaderSpan = Selector("header span").withText("Personal");
    this.businessHeaderSpan = Selector("header span").withText("Business");
    this.privateBankingHeaderSpan = Selector("header span").withText("Private Banking");
    this.internationalBankingHeaderSpan = Selector("header span").withText("International Banking");
    this.progressiveNavigationOptions = Selector("#progressive-nav-list a");
    this.allLinks = Selector("a");
    this.quickLinks = Selector('.quick-link a');
    this.allProducts = Selector('[data-id] h3');
    this.ourProductsHeading = Selector('[data-selector="heading-selector"][data-heading="Our Products"]');
    this.tryOurMortgageCalculator = Selector('span').withText('Try our mortgage calculator')
  }

  async verifyingLogoExistsAndVisible() {
    await t.maximizeWindow();
    await t.expect(this.lloydsDesktopLogo.exists).ok('Logo exists')
    await t.expect(this.lloydsDesktopLogo.visible).ok('Logo is visible');
  }



  async verifyingHomePageTitle() {
    await t.maximizeWindow();
    const title = await t.eval(() => document.title);
    await t.expect(title).eql("Lloyds Bank - Personal Banking, Personal Finances & Bank Accounts", "Page title is not as expected");
  }

  async getAllTheLinks() {
    await t.maximizeWindow();
      const linksCount = await this.allLinks.count;
      console.log('Total links are :'+ linksCount)
      const links = [];

      for (let i = 0; i < linksCount; i++) {
          const linkHref = await this.allLinks.nth(i).getAttribute('href');
          links.push(linkHref);
      }

      return links;
  }

  async verifyingAllHeading() {
    await t.maximizeWindow();
    await t.click(this.mainMenu);
    const expectedHeadings = [
      "Everyday banking",
      "Help & security",
      "Current accounts",
      "Borrowing",
      "Mortgages",
      "Savings",
      "Investing",
      "Insurance",
    ];
    const headingsCount = await this.allHeading.count; //8

    // asserting headings matches the number of expected headings
    await t.expect(headingsCount).eql(expectedHeadings.length);

    // Loop through the extracted headings and compare with expected headings
    for (let i = 0; i < headingsCount; i++) {
      const headingText = await this.allHeading.nth(i).innerText;
      await t.expect(headingText).eql(expectedHeadings[i], `Heading at position ${i} does not match`);
    }
  }

  async verifyingAllSubHeading() {
    await t.maximizeWindow();
    await t.click(this.mainMenu);
    const expectedSubHeadings = [
      "Online services & more",
      "We're here for you",
      "Accounts & services",
      "Cards, loans & car finance",
      "Accounts & calculators",
      "Accounts & ISAs",
      "Pensions & investments",
      "Home, life & car",
    ];
    const subHeadingsCount = await this.allSubHeading.count; //8

    // asserting sub headings matches the number of expected sub headings
    await t.expect(subHeadingsCount).eql(expectedSubHeadings.length);

    // Loop through the extracted headings and compare with expected headings
    for (let i = 0; i < subHeadingsCount; i++) {
      const subHeadingText = await this.allSubHeading.nth(i).innerText;
      await t.expect(subHeadingText).eql(expectedSubHeadings[i], `Sub heading at position ${i} does not match`);
    }
  }

  async verifyingAllSpanHeadersAreVisible() {
    await t
      .maximizeWindow()
      .expect(this.personalHeaderSpan.visible).eql(true)
      .expect(this.businessHeaderSpan.visible).eql(true)
      .expect(this.privateBankingHeaderSpan.visible).eql(true)
      .expect(this.internationalBankingHeaderSpan.visible).eql(true);
  }

  async verifyingAllProgressiveNavigationOptionsAreVisible() {
    await t.maximizeWindow();
    const optionsCount = await this.progressiveNavigationOptions.count;
    const allOptions = [];

    // Iterate over all options and retrieve their text
    for (let i = 0; i < optionsCount; i++) {
      const optionText = await this.progressiveNavigationOptions.nth(i).innerText;
      allOptions.push(optionText);
    }

    // assertions to check each elments matches the expected value
    await t
      .expect(allOptions[0]).eql("Mortgage Calculator", "First option text is incorrect")
      .expect(allOptions[1]).eql("Help with money worries", "Second option text is incorrect")
      .expect(allOptions[2]).eql("Protecting yourself from fraud", "Third option text is incorrect")
      .expect(allOptions[3]).eql("Log on", "Fourth option text is incorrect");
    }
    
    async getAllQuickLinks() {
        await t.maximizeWindow();
        const quickLinksCount = await this.quickLinks.count;
        console.log('Total quick links are :'+ quickLinksCount)
        const links = [];

        for (let i = 0; i < quickLinksCount; i++) {
            const linkHref = await this.quickLinks.nth(i).getAttribute('href');
            links.push(linkHref);
        }

        return links;
    }

    async checkLinksNotBroken(links) {
        await t.maximizeWindow();

        for (const link of links) {
            let absoluteLink = link;

            // Ensure the link is absolute
            if (!absoluteLink.startsWith('https')) {
                absoluteLink = new URL(absoluteLink, 'https://www.lloydsbank.com').href; 
            }

            try {
                const response = await axios.get(absoluteLink);
                await t.expect(response.status).eql(200, `Link is broken: ${absoluteLink}`); // asserting response code
            } catch (error) {
                // Log the error details for debugging
                console.log(`Error for link: ${absoluteLink}`, error);

                // If an error occurs, fail the test with a detailed message
                await t.expect(error).notOk(`Link is broken: ${absoluteLink} - Error: ${error.message || error}`);
            }
        }
    }
  
    async verifyingAllProducts() {
      await t
        .maximizeWindow()
        .expect(this.ourProductsHeading.innerText).eql('Our Products')
        const allProductsCount = await this.allProducts.count;    
        const allProducts = [];
      for (let i = 0; i < allProductsCount; i++){
        
        const productName = await this.allProducts.nth(i).innerText;
        allProducts.push(productName);

      }
        // assertions to check all products matches the expected value
    await t
        .expect(allProducts[0]).eql("Credit Cards")
        .expect(allProducts[1]).eql("Silver Current Account")
        .expect(allProducts[2]).eql("Savings")
        .expect(allProducts[3]).eql("Personal Loans")
        .expect(allProducts[4]).eql("Mortgages")
        .expect(allProducts[5]).eql("Car Finance")
        .expect(allProducts[6]).eql("Try our Ready-Made Investments")
        .expect(allProducts[7]).eql("Home Insurance");
      
  }
  


           
  }
export default new homePage();
