const puppeteer = require('puppeteer');
const $=require('cheerio');
const prompt = require('prompt-sync')();

(async ()=>{
    const name = prompt('Enter The Song name or author name --> ');
    const browser= await puppeteer.launch({ headless: false });
    const page= await browser.newPage();
    await page.setViewport({
        width: 1920,
        height: 720,
        deviceScaleFactor: 1,
    });
    await page.goto(`https://www.google.com/search?q=${name}`);
    let search=await page.$('.SALvLe.farUxc.mJ2Mod');
    console.log(1);
    if(search===null){
    console.log(2);
        const search2=await page.click('#wp-tabs-container g-text-expander');
        const res=await page.$('#wp-tabs-container')
        const title=await res.$$eval('.ujudUb span',options => options.map(option => option.textContent))
        console.log("link",title.join('\n'));
        // console.log(search2);
        return;
    }

    const title=await search.$$eval('.ujudUb span',options => options.map(option => option.textContent))
    console.log("link",title.join('\n'));
})()