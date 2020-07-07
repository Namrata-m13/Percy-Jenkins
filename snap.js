const PercyScript = require("@percy/script")

PercyScript.run(async(page, percySnapshot)=>{
    await page.goto("https://www.google.com")
    
    await percySnapshot("Verify Webpage",{widths: [768, 992, 1200]})

    await page.waitFor("[name='q']")
    await page.type("[name='q']","BrowserStack")

    await percySnapshot("Search",{widths: [768, 992, 1200]})


})
