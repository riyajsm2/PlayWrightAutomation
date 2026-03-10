const {test, expect} = require('@playwright/test');


test.only('First PlayWright Login Test' , async ({browser, page})=>
{
    //chrome - plugins - cookies 
   //  const context = await browser.newContext();
   //  const page = await context.newPage();
   await  page.goto("https://rahulshettyacademy.com/loginpagePractise/");

   console.log(await page.title());
   await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");

   //css - type or fill method
   await page.locator('#username').fill("rahulshettyacademy");
   await page.locator("[name='password']").fill("Learning@830$3mK2");
   await page.locator("[name='terms']").click();
   await page.locator('#signInBtn').click();
   
   await expect(page).toHaveTitle("ProtoCommerce");
   console.log(await page.title());

   await page.pause(); 

   


},

test.only('Second Test' , async ({browser, page})=>
{
    //chrome - plugins - cookies 
   //  const context = await browser.newContext();
   //  const page = await context.newPage();
   await  page.goto("https://www.google.com/");

   console.log(await page.title());
   await expect(page).toHaveTitle("Google");

   


})

);