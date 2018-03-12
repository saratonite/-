const puppeteer = require('puppeteer');
module.exports = async url => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
    await page.setViewport({ width: 1204, height: 2000 });
    const pdf = await page.pdf({path: 'test.pdf', format: 'A4', printBackground: true});
    await browser.close();
    return pdf;
    // const screenshot = await page.screenshot();
    // await browser.close();
    // return screenshot;
  };