import React from 'react';

const Product = (props) => {
    return (
        <article>
            <h1>Nazwa produktu</h1>
            <h3>{props.productName}</h3>
            <p>?!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, repellendus explicabo ad at hic ut adipisci ratione magnam culpa fugiat ipsa iusto eligendi temporibus repellat veniam quisquam illum fugit maiores.</p>
            <p>{props.productName} jeździ.</p>
        </article>

    );
}

export default Product;