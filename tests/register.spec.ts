import {test,expect} from "@playwright/test"



test("should be able to login",async({page})=>{
    
        await page.goto("/login")
        await page.locator('span.submit-login-text').click();
        await page.locator("#username").fill("admin")
        await page.locator("#password").fill("Emma@20192")
        await page.locator("#kc-login").click();
        await page.waitForTimeout(4000)

     const expected=page.locator("#input-error")
     await expect(expected).not.toBeVisible()

   
  

})