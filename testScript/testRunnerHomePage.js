import { test, Selector } from "testcafe";
import homePage from "../pages/homePage.js";

fixture`Home Page Tests`.page`https://www.lloydsbank.com`;

test
    .meta({ e2e: "regression " })
    ("Test001 , Verifying the homepage title",
    async (t) => {
    await homePage.verifyingHomePageTitle();
  }
);

test
    .meta({ e2e: "regression " })
    ("Test002, Print and count all the links from home page",
    async (t) => {
        const allLinks = await homePage.getAllTheLinks()     
        console.log('All the Links on HomePage :', allLinks); //printing all links
       
  }
);

test
    .meta({ e2e: "regression " })
    ("Test003, Verifying all the headings from main menu",
    async (t) => {
    await homePage.verifyingAllHeading();
  }
);

test
    .meta({ e2e: "regression " })
    ("Test004, Verifying all the sub headings from main menu",
    async (t) => {
    await homePage.verifyingAllSubHeading();
  }
);

test
    .meta({ e2e: "regression " })
    ("Test005, Verifying all the span headers are visible",
    async (t) => {
    await homePage.verifyingAllSpanHeadersAreVisible();
  }
);

test
    .meta({ e2e: "regression " })
    ("Test006, Verifying all the progressive navigations texts are visible",
    async (t) => {
    await homePage.verifyingAllProgressiveNavigationOptionsAreVisible();
  }
);

test
    .meta({ e2e: "regression " })
    ("Test007, Print count and verify all the quick links working and not broken",
    async (t) => {
        const quickLinks = await homePage.getAllQuickLinks();      
        console.log('Quick Links:', quickLinks); //printing all quick links
        await homePage.checkLinksNotBroken(quickLinks); // Verifying quick links are not broken
  }
);

test
    .meta({ e2e: "regression " })
    ("Test008, Verifying Our Products heading and all the products name",
    async (t) => {
      await homePage.verifyingAllProducts();
  }
);

test.only
    .meta({ e2e: "regression " })
    ("Test009, Verifying main logo is exists and visible",
    async (t) => {
      await homePage.verifyingLogoExistsAndVisible();
  }
);