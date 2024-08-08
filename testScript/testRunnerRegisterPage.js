import { test, Selector } from "testcafe";
import registerPage from "../pages/registerPage.js";
import { baseUrl } from "../helper/configuration.js";


fixture`Registrer Page Tests`
.page(baseUrl)
test
    .meta({ e2e: "regression " })
    ("TC_RP_001 , Validate the valid account types require for the registration",
        async (t) => {
                 await registerPage.verifyingAccountTypesRequireForRegistration();  
 }
);
test
    .meta({ e2e: "regression " })
    ("TC_RP_002 , Validate user can not register with an incorrect account",
        async (t) => {
            await registerPage.verifyingUserCanNotRegisterWithIncorrectSavingAccount(); 
 }
);