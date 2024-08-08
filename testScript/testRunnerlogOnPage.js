import { test, Selector } from "testcafe";
import logOnPage from "../pages/logOnPage.js";
import { baseUrl } from "../helper/configuration.js";


fixture`Log On Page Tests`
.page(baseUrl)
test
    .meta({ e2e: "regression " })
    ("TC_LP_001 , Validate user can not log in without providing user id and password",
        async (t) => {
            await logOnPage.loginWithoutAnyCredentials()
        
        }
).skipJsErrors()
   
test
    .meta({ e2e: "regression " })
    ("TC_LP_002 , Validate user can not log in without providing password",
        async (t) => {
            await logOnPage.loginWithoutPassword();
        
        }
).skipJsErrors()
   
test
    .meta({ e2e: "regression " })
    ("TC_LP_003, Validate user can not log in without providing user id",
        async (t) => {
            await logOnPage.loginWithoutUserId();
        
        }
   ).skipJsErrors()

test
    .meta({ e2e: "regression " })
    ("TC_LP_004 , Validate user can see four options when clicking on forgotten password link",
        async (t) => {
            await logOnPage.VerifyingLogOnHelpOptions();
        
        }
   ).skipJsErrors()