const { queryByDataBaseId } = require('./notion');

exports.handler = async (event, context) => {
  try {
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
    return {
      statusCode: 200,
      body: JSON.stringify(dbData)
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
