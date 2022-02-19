const express = require('express');
const { queryByDataBaseId } = require('./notion');

const app = express();
app.use(express.static('public'));

app.get('/timer', async (request, response) => {
  let dbData = await queryByDataBaseId('536c591e307245228c64d8352f581bd0');
  dbData = dbData.results.map(i => i.properties);
  dbData = dbData.map(item => {
    return {
      id: item.id.title[0].plain_text,
      seconds: item.seconds.number,
      h: item.colorH.number,
      l: item.colorL.number,
      s: item.colorS.number,
    }
  });
  response.json(dbData);
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`server run at: http://localhost:${process.env.PORT || 3000}`);
});