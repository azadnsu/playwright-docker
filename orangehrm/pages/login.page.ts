
import { Locator, Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameField : Locator;
    readonly passwordField: Locator;
    readonly btnLogin: Locator;


    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.getByPlaceholder("Username");
        this.passwordField = page.getByPlaceholder("Password");
        this.btnLogin = page.locator('button:has-text("Login")');
    }

    async goto(): Promise<void>{
        await this.page.goto('/')
    }

    async enterLoginCredentials(username: string, password: string): Promise<void> {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);

    }

    async submitLogin(): Promise<void> {
        await Promise.all([
            this.page.waitForResponse((response) => response.url().includes("api/v2/dashboard/employees/action-summary") && response.status() === 200),
            this.btnLogin.click()
        ])
    }
}