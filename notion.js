const { Client } = require('@notionhq/client');

// 与notion建立连接
// const notion = new Client({ auth: process.env.NOTION_API_KEY });

async function createBlock(blockId, children) {
  const response = await notion.blocks.children.append({
    block_id: blockId,
    children,
  });
  console.log(response);
}

// 根据databaseId查找database
async function queryByDataBaseId(database_id) {
  return await notion.databases.query({
    database_id,
  });
} 

module.exports = {
  createBlock,
  queryByDataBaseId
}
