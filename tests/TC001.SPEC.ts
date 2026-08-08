import {test} from "@playwright/test"
test('First Tc001',async({page})=>{
    await page.goto("https://google.com");
    await page.waitForTimeout(3000);
    console.log("app opened")
    console.log("Pushed in github")
})