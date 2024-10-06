import {test,expect} from "@playwright/test"

test.describe("all testCases login",()=>{
    test.beforeEach("setup",async({page})=>{
        await page.goto("/login")
        await page.locator('span.submit-login-text').click();
        await page.locator("#username").fill("admin")
        await page.locator("#password").fill("Emma@20192")
        await page.locator("#kc-login").click();

    })
    test("test title",async({page})=>{
        const title=await page.title()
        expect(title).toBe("Sign in to Emma")

    })
    test("should be able to login",async({page})=>{
    
        
        await page.waitForTimeout(4000)

     const expected=page.locator("#input-error")
     await expect(expected).toBeVisible()

})
test("forgot password", async ({page})=>{
    const forgotPasswordLink = await page.locator('//a[contains(text(), "Forgot Password?")]');
  
    // تنفيذ أي إجراء على الرابط
    await forgotPasswordLink.click();
    await page.locator("#username").fill("mohammed199761@yahoo.com")
    const submitButton = await page.locator('input.pf-c-button.pf-m-primary.pf-m-block.btn-lg');

  // تنفيذ إجراء للنقر على الزر
  await submitButton.click();

    await page.waitForTimeout(3000)
    const expected=page.locator("#header-login")
    await expect(expected).toBeVisible()

})
})

