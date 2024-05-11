const cheerio = require('cheerio'); 

const request = require('request-promise-native'); 

const fs = require('node:fs');

require('dotenv').config();
const GRAB = process.env.URL_GRABFOOF;

request.get(GRAB, (error, response, html) => {
  if(!error && response.statusCode == 200) {
    const $ = cheerio.load(html); // load HTML

    let data = [];
    /*
    This selector method is the starting point for traversing and manipulating the document. 
    Like jQuery, it's the primary method for selecting elements in the document.
    selector searches within the context scope which searches within the root scope.
    
    @example
    $('.apple', '#fruits').text();
    //=> Apple
    $('ul .pear').attr('class');
    //=> pear
    $('li[class=orange]').html();
    //=> Orange
    */
    $('.ant-col-24 .colInfo___3iLqj .ant-col-md-24 .ant-col-lg-24').attr('class').each((index, el) => { // lặp từng phần tử có class là job__list-item
      const Brand = $(el).find('.name___2epcT p').text(); // lấy tên job, được nằm trong thẻ a < .job__list-item-title
      // const company = $(el).find('.job__list-item-company span').text(); // lấy tên công ty
      // const address = $(el).find('.job__list-item-info').find('.address').text(); // lấy địa chỉ
      // const salary = $(el).find('.job__list-item-info').find('.salary').text(); // lấy lương

      console.log(Brand);

      data.push({ Brand })
    });

    

    fs.writeFileSync('data-Grab.json', JSON.stringify(data));
  }
  else {
    console.log(error);
  }
});