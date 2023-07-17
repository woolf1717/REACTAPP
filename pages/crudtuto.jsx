import { useEffect, useState, useRef } from "react";

import Head from "next/head";

import "../src/app/globals.css";

export default function Home() {
  const productNameRef = useRef();
  const productIdToDeleteRef = useRef();
  const productIdToUpdateRef = useRef();
  const productNameToUpdateRef = useRef();
  const [products, setProducts] = useState([]);
  const [updated, setUpdated] = useState(false);
  const [updatedError, setUpdatesError] = useState(false);
  const [created, setCreated] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [deletedError, setDeletedError] = useState(false);

  async function getProducts() {
    const postData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await fetch(`http://localhost:3000/api/crud`, postData);
    const response = await res.json();
    // console.log("test")
    // console.log(response.products)
    setProducts(response.products);
  }

  async function addProduct() {
    const productName = productNameRef.current.value.trim();
    if (productName.length < 3) return;
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_name: productName,
      }),
    };
    console.log("works");
    const res = await fetch(`http://localhost:3000/api/crud`, postData);
    const response = await res.json();
    if (response.response.message !== "success") return;
    const newproduct = response.response.product;

    console.log(newproduct);
    setCreated(true);

    setProducts([
      ...products,
      {
        idcrud: newproduct.idcrud,
        text: newproduct.text,
      },
    ]);
  }
  async function updateProduct() {
    const productIdToUpdate = productIdToUpdateRef.current.value.trim();
    const productNameToUpdate = productNameToUpdateRef.current.value.trim();
    if (!productIdToUpdate) return;
    const postData = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_id: productIdToUpdate,
        product_name: productNameToUpdate,
      }),
    };
    const res = await fetch(`http://localhost:3000/api/crud`, postData);
    const response = await res.json();
    if (response.response.message === "error") return setUpdatedError(true);
    // if (response.response.message !== "success") return;

    const productIdUpdated = parseFloat(response.response.product.idcrud);

    const productUpdatedName = response.response.product.text;
    //updating state
    const productsStateAfterUpdate = products.map((product) => {
      if (product.idcrud === productIdUpdated) {
        const productUpdated = {
          ...product,
          text: productUpdatedName,
        };
        return productUpdated;
      } else {
        return {
          ...product,
        };
      }
    });

    console.log(productsStateAfterUpdate);
    setUpdated(true);
    setProducts(productsStateAfterUpdate);
  }

  async function deleteProduct(id) {
    if (!id) return;
    const postData = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_id: id,
      }),
    };
    const res = await fetch(`http://localhost:3000/api/crud`, postData);
    const response = await res.json();
    if (response.response.message !== "success") return;
    setDeleted(true);
    const idToRemove = parseFloat(response.response.product_id);
    console.log(idToRemove);
    setProducts(products.filter((a) => a.idcrud !== idToRemove));
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Head>
        <title>CRUD With Next.Js & MySQL Demo</title>
      </Head>
      <div className="">
        <section className="">
          <h1>CRUD With Next.Js & MySQL Demo</h1>
          {/* <p>
              Create, Read, Update, Delete database data in React, Node, Next.js
              and MySQL by Omar Elbaga{" "}
              <a
                href="https://github.com/oelbaga/nextjs-mysql"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </p> */}
          <div className="">
            <a href="/api/products" target="_blank" rel="noreferrer">
              Database API data
            </a>
          </div>
        </section>
        <section>
          <div className="">
            <h2>Read</h2>
            <div className="">
              <p>{`${products}`}</p>
              {products.map((item, index) => {
                return (
                  <div key={item.idcrud} className="">
                    <span>Id number</span>: {item.idcrud} <br />{" "}
                    <span>Product name</span>: {item.text}{" "}
                    <button onClick={() => deleteProduct(item.idcrud)}>
                      TRASH BUTTON
                    </button>
                  </div>
                );
              })}
              {!products.length ? <>No products found</> : null}
            </div>
          </div>
        </section>
        <section>
          <div className="">
            <h2>Create</h2>
            <div className="">
              <div className="">Product Name</div>
              <input type="text" ref={productNameRef} />
            </div>
            {created ? <div className="">Success!</div> : null}
            <div className="">
              <input
                className=""
                value="Save"
                type="button"
                onClick={addProduct}
              />
            </div>
          </div>
        </section>
        <section>
          <div className="">
            <h2>Update</h2>
            <div className="">
              <div className="">Product Id</div>
              <input type="text" ref={productIdToUpdateRef} />
            </div>
            <div className="">
              <div className="">Product Name</div>
              <input type="text" ref={productNameToUpdateRef} />
            </div>
            {updated ? <div className="">Success!</div> : null}
            {updatedError ? <div className="">Error!</div> : null}
            <div className="">
              <input
                className=""
                value="Update"
                type="button"
                onClick={updateProduct}
              />
            </div>
          </div>
        </section>
        <section>
          <div className="">
            <h2>Delete</h2>
            <div className="">
              <div className="">Product Id</div>
              <input type="text" ref={productIdToDeleteRef} />
            </div>
            {deleted ? <div className="">Success!</div> : null}
            {deletedError ? <div className="">Error!</div> : null}
            <div className="">
              <input
                className=""
                value="Delete"
                type="button"
                onClick={() =>
                  deleteProduct(productIdToDeleteRef.current.value)
                }
              />
            </div>
          </div>
        </section>
        <footer>
          <p>
            Create, Read, Update, Delete database data in React, Node and
            Next.JS by Omar Elbaga{" "}
            <a
              href="https://github.com/oelbaga/nextjs-mysql"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}
