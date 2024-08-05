const { test, describe, expect/* , beforeEach */ } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('navigate to ivysaur page and check for chlorophyll', async ({ page }) => {
    await page.goto('/')
    await page.click('text=ivysaur')                            // Click on the link to Ivysaur's page
    await expect(page).toHaveURL(/.*ivysaur/)                   // Ensure the URL contains 'ivysaur'
    await expect(page.getByText('chlorophyll')).toBeVisible()   // Check for the presence of 'chlorophyll'
  })

})