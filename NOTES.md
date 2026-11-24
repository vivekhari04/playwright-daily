Day 3 - Playwright Test Failure

I changed the expected page title to an incorrect value, which caused the test to fail.
Playwright showed the expected and received values along with the failure location.
I restored the correct expected title and reran the tests successfully.
day 4
// import { test, expect }  --	Imports Playwright's test and assertion tools.
//test(...) 	Defines a test case.
async ({ page })	Gives the test a browser page to work with.
page.goto(...)	Opens the SauceDemo website.
expect(page).toHaveTitle(...)	Checks whether the page title contains Swag Labs.

