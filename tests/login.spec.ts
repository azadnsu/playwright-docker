import {test, expect, Page, chromium, Browser, BrowserContext} from "@playwright/test"
import {LoginPage} from "../pages/login.page"
import {data} from "../helpers/data";

test.describe("Login Test", async ()=>{
    let page: Page;
    let browser: Browser;
    let context: BrowserContext;
    let login: LoginPage;

    test.beforeAll(async ()=>{
        browser = await chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();
    })

    test.afterAll(async ()=>{
        await context.close();
        await browser.close();
    })


    test("Login to OrangeHRM", async ()=> {
        login = new LoginPage(page);
        await page.goto(data.BASE_URL);
        await expect(page).toHaveURL(/.*login/);
        await page.waitForLoadState("networkidle");
        await login.enterLoginCredentials(data.ADMIN_USER_NAME, data.ADMIN_USER_PASSWORD);
        await login.submitLogin();
        await expect(page).toHaveURL(/.*dashboard/)
    });

    test("Logout from the OrangeHRM", async()=>{
        await page.locator(".oxd-userdropdown-name").click()
        await Promise.all([
            page.waitForNavigation(),
            page.locator("text=Logout").click()

        ])
    });

})

