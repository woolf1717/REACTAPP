import "../../src/app/globals.css";
import { useEffect, useState } from "react";


export default function FindProduct() {

    const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const api = "http://localhost:3000/api/getdata";
      const postData = {
        method: "Post",
        headers: { "Content-Type": "application/json" }
      }
      const response = await fetch(api, postData);
      const res = await response.json();
      // console.log('działa')
      setData(res.products);
    }
    fetchData();
  }, []);

  const generateImageFromBuffer = buffer => {
    if(buffer !== null && buffer !== undefined){
    let _buffer = new Buffer.from(buffer, 'base64');;
    const encodedBase64 = `${_buffer.toString('base64')}`;
    const src = `data:image/png;base64,${encodedBase64}`;
    return src}
    // else return null
  }


console.table(data)
   data.forEach((product) => {
    data[product.product_id - 1] = {
    id: product.product_id,
    src: generateImageFromBuffer(product.src),
    photoOne: generateImageFromBuffer(product.photoOne),
    photoTwo: generateImageFromBuffer(product.photoTwo),
    photoThree: generateImageFromBuffer(product.photoThree),
    starsprops: product.starsprops,
    name: product.name,
    price: product.price,
    count: product.count,
    alt: product.alt,
    descr: product.descr,
    fulldescr: product.fulldescr
  }})
  
  console.table(data)
  const dataExport = data
  return (<>{JSON.stringify(dataExport)}</>)
}
  