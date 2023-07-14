import { query } from "../../lib/db"

export default async function handler(req, res) {
  try {
    const querySql = `SELECT product_id, name, src, photoOne, photoTwo, photoThree,  starsprops, price, count, alt, descr, fulldescr FROM products`;
   
    const data = await query({ query: querySql});

    const generateImageFromBuffer = buffer => {
        if(buffer !== null && buffer !== undefined){
        let _buffer = new Buffer.from(buffer, 'base64');;
        const encodedBase64 = `${_buffer.toString('base64')}`;
        const src = `data:image/png;base64,${encodedBase64}`;
        return src}
      }
      
    const products = data
     let productTable  = []
     for (let i = 0 ; i < products.length ; i++) {
        productTable.push({
        id: products[i].product_id,
        src: generateImageFromBuffer(products[i].src),
        photoOne: generateImageFromBuffer(products[i].photoOne),
        photoTwo: generateImageFromBuffer(products[i].photoTwo),
        photoThree: generateImageFromBuffer(products[i].photoThree),
        starsprops: products[i].starsprops,
        name: products[i].name,
        price: products[i].price,
        count: products[i].count,
        alt: products[i].alt,
        descr: products[i].descr,
        fulldescr: products[i].fulldescr
      })
    }
    res.status(200).json({products:productTable});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}