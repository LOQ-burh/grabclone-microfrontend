const cheerio = require('cheerio'); 

const request = require('request-promise-native'); 

const fs = require('node:fs');

require('dotenv').config();
const job123Url = process.env.URL_JOB123;

request.get(job123Url, (error, response, html) => {
  if(!error && response.statusCode == 200) {
    const $ = cheerio.load(html); // load HTML

    let data = [];
    $('.job__list-item').each((index, el) => { // lặp từng phần tử có class là job__list-item
      const job = $(el).find('.job__list-item-title a').text(); // lấy tên job, được nằm trong thẻ a < .job__list-item-title
      const company = $(el).find('.job__list-item-company span').text(); // lấy tên công ty
      const address = $(el).find('.job__list-item-info').find('.address').text(); // lấy địa chỉ
      const salary = $(el).find('.job__list-item-info').find('.salary').text(); // lấy lương

      console.log(job, company, address, salary);

      data.push({ job, company, address, salary })
    });

    

    fs.writeFileSync('data.json', JSON.stringify(data));
  }
  else {
    console.log(error);
  }
});