import React from 'react';

const Product = (props) => {
    return (
        <article>
            <h1>Nazwa produktu:</h1>
            <h3><span><h1>Bla bla bla</h1></span></h3>
            <h4>Jakas dziwna tresc</h4>
            <p>{props.productName}ipsum jeździ.</p>
            <p>wiecej informacji</p>
        </article>

    );
}

export default Product;
