import { query } from "../../lib/db"

export default async function handler(req, res) {
  try {
    const querySql = `SELECT username, email, password, phonenumber, gender, birthyear, birthmonth, birthday FROM users`;

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
        
    }
    res.status(200).json({products:data});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}