import { test, Selector } from "testcafe";
import homePage from "../pages/homePage.js";
import { baseUrl } from "../helper/configuration.js";

fixture`Home Page Tests`
.page(baseUrl)
test
    .meta({ e2e: "regression " })
    ("TC_HP_001 , Verifying the homepage title",
    async (t) => {
    await homePage.verifyingHomePageTitle();
  }
);

test
    .meta({ e2e: "regression " })
    ("TC_HP_002, Verifying all the links from home page are working and not broken, also Printing and counting the links",
    async (t) => {
        const allLinks = await homePage.getAllTheLinks()     
      console.log('All the Links on HomePage :', allLinks);
      await homePage.checkLinksNotBroken(allLinks); 
       
  }
);

test
    .meta({ e2e: "regression " })
    ("TC_HP_003, Verifying all the headings from main menu",
    async (t) => {
    await homePage.verifyingAllHeading();
  }
);

test
    .meta({ e2e: "regression " })
    ("TC_HP_004, Verifying all the sub headings from main menu",
    async (t) => {
    await homePage.verifyingAllSubHeading();
  }
);

test
    .meta({ e2e: "regression " })
    ("TC_HP_005, Verifying all the headers are visible",
    async (t) => {
    await homePage.verifyingAllHeadersAreVisible();
  }
);

test
    .meta({ e2e: "regression " })
    ("TC_HP_006, Verifying all the progressive navigations texts are visible",
    async (t) => {
    await homePage.verifyingAllProgressiveNavigationOptionsAreVisible();
  }
);

test
    .meta({ e2e: "regression " })
    ("TC_HP_007, Verifying all the quick links working and not broken also printing and counting",
    async (t) => {
        const quickLinks = await homePage.getAllQuickLinks();      
        console.log('Quick Links:', quickLinks); //printing all quick links
        await homePage.checkLinksNotBroken(quickLinks); // Verifying quick links are not broken
  }
);

test
    .meta({ e2e: "regression " })
    ("TC_HP_008, Verifying Our Products heading and all the products name",
    async (t) => {
      await homePage.verifyingAllProducts();
  }
);

test
    .meta({ e2e: "regression " })
    ("TC_HP_009, Verifying main home page logo is exists and visible",
    async (t) => {
      await homePage.verifyingLogoExistsAndVisible();
  }
);