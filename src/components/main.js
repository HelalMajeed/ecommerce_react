import React, { useEffect, useState } from "react";

function Main() {
    const [products, setProducts] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("The error is ", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        console.log(products);
    }, [products]);

    return (
        <div className="mainView">
            {products ? (
                <ul className="productList">
                    {products.map(product => (
                        <li key={product.id} className="productItem">
                            <div className="productCategory">
                                {product.category}
                            </div>
                            <div className="productTitle">
                                {product.title}
                            </div>
                            <img className="productImage" src={product.image} alt={product.title}></img>
                            <div className="productDescription">
                                {product.description}
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="loading">
                    Loading...
                </div>
            )}
        </div>
    );
}

export default Main;
