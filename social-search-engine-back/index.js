const express = require('express')
const se_scraper = require('se-scraper');
const axios = require('axios');

const app = express()
const port = 3000

const rede = {
    instagram : 'www.instagram.com'
}

app.get('/', async (req, res) => {
    let query = req.query.q
    let social = req.query.s

    if (!query || !social) {
        res.json({error : "Query e/ou Rede faltando"})
        return
    }
        
    let kw = `${query} site:${rede[social]} -explore` // instagram keyword
    let scrape_job = {
        search_engine: 'google',
        keywords: [kw],
        num_pages: 1,
        google_settings: {
            num:10
        }
        // add some cool google search settings
        // google_settings: {
        //     gl: 'us', // The gl parameter determines the Google country to use for the query.
        //     hl: 'en', // The hl parameter determines the Google UI language to return results.
        //     start: 0, // Determines the results offset to use, defaults to 0.
        //     num: 100, // Determines the number of results to show, defaults to 10. Maximum is 100.
        // },
    };

    // let scraper = new se_scraper.ScrapeManager(browser_config);
    let scraper = new se_scraper.ScrapeManager({});
    await scraper.start();

    let results = await scraper.scrape(scrape_job);


    if(results.results[kw]["1"].no_results) {
        res.json({error : "Nenhum resultado encontrado hehej"})
        return
    }

    let retorno = results.results[kw]["1"].results.map(value => {
        let dados = value.snippet.match(/[0-9]+(\.[0-9]+)?[a-zçõ\s]+/g) || []
        
        return {
            nome : value.title.substring(0, value.title.indexOf("(")).trim(),
            arroba : value.title.substring(value.title.indexOf("(") + 1, value.title.indexOf(")")).trim(),
            link : value.link,
            seguidores : dados.find(v => v && v.includes("seguidores")) || "",
            seguindo :  dados.find(v => v && v.includes("seguindo")) || "",
            posts : dados.find(v => v && v.includes("publicações")) || ""
        }
    })

    for(let profile of retorno) {
        let res = await axios({
            method : 'get',
            url : profile.link,
            responseType : 'text'
        }).catch(err => {
            profile.avatar = ""
            // console.log("Error em: " + profile.link)
        })

        if (!res)
            continue

        let match = res.data.match(/\"og:image\" content=\".*\/>/)
        if (match) {
            profile.avatar = match[0].substring( match[0].indexOf("https"), match[0].indexOf("/>")).replace('/>', "").trim()
            profile.avatar = profile.avatar.substring(0, profile.avatar.length - 1) // A ASPAS NO FINAL SE RECUSA A SAIR
        }
    }
    
    // console.dir(results, {depth: null, colors: true});
    await scraper.quit();
    res.json(retorno)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
/*
{
    results : {
        keywordN:{
            results:[
                "link": "https://www.instagram.com/maquiagem.br_/?hl=pt-br",
                "title": "Maquiagem BR (@maquiagem.br_) • Fotos e vídeos do ...",
                "snippet": "476.3 mil seguidores, 123 seguindo, 1057 publicações - Veja as fotos e vídeos do Instagram de Maquiagem BR (@maquiagem.br_)",
                "visible_link": "www.instagram.com › maquiagem",
                "date": "",
                "rank": 1
            ]
        },
        metadata:{}
    }
}
*/

/*
   "1": {
        "num_results": "",
        "no_results": true,
        "effective_query": "",
        "right_info": {},
        "results": [],
        "top_products": [],
        "right_products": [],
        "top_ads": [],
        "bottom_ads": [],
        "places": [],
        "time": "Fri, 01 May 2020 22:37:12 GMT"
      }
*/