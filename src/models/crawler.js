const request = require('request-promise');
const cheerio = require('cheerio');

const scrapping = async (product) => 
    
    await request(`https://lista.mercadolivre.com.br/${product.search}`).then(function (body){
        let n = 0;
        const data = [];
        let $ = cheerio.load(body);

        $('#searchResults li.results-item').each(function () {
            let name = $(this).find('.main-title').text();
            let link = $(this).find('.item__info-link').attr('href');
            let fraction = $(this).find('.price__fraction').text();
            let decimals = $(this).find('.price__decimals').text();
            let price = (parseFloat(fraction+'.'+decimals)).toFixed(2);
            let store = $(this).find('.item__brand-title-tos').text().trim().split('por ')[1];
            let state = $(this).find('.item__status div.item__condition').text().trim();
            
            if(n < product.limit){
                data.push({
                    name: name,
                    link: link,
                    price: price,
                    store: store ? store : null,
                    state: state ? store : null
                })
            }else{
                return false;
            }
            n += 1;
        });
        return data;
    }).catch(function(err){
        return err
    })


module.exports = scrapping;