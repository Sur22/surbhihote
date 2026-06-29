import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.goto('http://localhost:5173/work/fjord2')
        h2s = await page.query_selector_all('h2')
        for h2 in h2s:
            text = await h2.inner_text()
            print(f"H2: {text}")
        
        ps = await page.query_selector_all('p')
        for p_elem in ps:
            text = await p_elem.inner_text()
            if "1 Weeks" in text:
                print(f"P: {text}")
        
        await browser.close()

asyncio.run(run())
