import { test, Selector } from "testcafe";
import homePage from "../pages/homePage.js";
import logOnPage from "../pages/logOnPage.js";


fixture`Log On Page Tests`.page`https://www.lloydsbank.com`;

test
    .meta({ e2e: "regression " })
    ("Test010 , Validate user can not log in without providing user id and password",
        async (t) => {
            await logOnPage.loginWithoutAnyCredentials()
        
        }
).skipJsErrors()
   
test
    .meta({ e2e: "regression " })
    ("Test011 , Validate user can not log in without providing password",
        async (t) => {
            await logOnPage.loginWithoutPassword();
        
        }
).skipJsErrors()
   
test
    .meta({ e2e: "regression " })
    ("Test012 , Validate user can not log in without providing password",
        async (t) => {
            await logOnPage.loginWithoutUserId();
        
        }
   ).skipJsErrors()

   test.only
    .meta({ e2e: "regression " })
    ("Test013 , Validate user can see four options when clicking on forgotten password link",
        async (t) => {
            await logOnPage.VerifyingLogOnHelpOptions();
        
        }
   ).skipJsErrors()