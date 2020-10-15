import React from 'react';

const Product = (props) => {
    return (
        <article>
            <h1>@Nazwa produktu:</h1>
            <h3>6{props.productName}</h3>
            <p>-Lorem dolor sit amet consectetur adipisicing elit. Sint, repellendus explicabo ad at hic ut adipisci ratione magnam culpa fugiat ipsa iusto eligendi temporibus repellat veniam quisquam illum fugit maiores.</p>
            <p>{props.productName}ipsum jeździ.</p>
        </article>

    );
}

export default Product;