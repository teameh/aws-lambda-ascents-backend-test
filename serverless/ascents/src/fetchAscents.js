const fetch = require('node-fetch');
const xml2js = require("xml2js");

const fetchAscents = async (userId, ascentTypeShortHand) => {
  const url = `https://www.8a.nu/scorecard/xml/${userId}_${ascentTypeShortHand}.xml`;
  console.log('fetchAscents url', url);
  
  const response = await fetch(url);
  text = await response.text();

  return await promiseParseXml(text)
}

const promiseParseXml = text =>
  new Promise((resolve, reject) =>
    new xml2js.Parser({ normalizeTags: true, explicitArray: false })
      .parseString(text, (err, json) => {
        if(err){
          return reject(err)
        }
        
        if(!json.ascentlist.ascent) {
          return reject(new Error("Loading ascents failed..."));
        }

        // console.log('parsed JSON', json)
        return resolve(json.ascentlist.ascent)
      })
  );

module.exports = fetchAscents