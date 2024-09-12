import { createRoot } from 'react-dom/client';
import './style.css';
import React from 'react';

// Function component definition
function Card(props) {

    const { key, title, image, brand, price } = props
    return (
        <div className="card" key={key}>
            <img src={image} alt={title} />
            <div className="card-content">
                <h2>{title}</h2>
                <p>{brand}</p>
                <p><b>${price}</b></p>
            </div>
        </div>
    );
}

// const container = [card,card,card,card,card]
// const container = [Card(1), Card(2), Card(3), Card(4), Card(5)];

// Create root element
const root = createRoot(document.querySelector("#root"));

// Fetch data from API
fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data) => {
        root.render(
            <div className="container">
                {data.products.map((product) => {
                    return <Card
                        title={product.title}
                        image={product.thumbnail}
                        brand={product.brand}
                        price={product.price}
                        key={product.key} />
                })}
            </div>
        )
    })


// root.render(React.createElement(Card, {
//     title: "Product Title",
//     image: "https://via.placeholder.com/150",
//     brand: "Product Brand",
//     price: 100,
//     key: 12,
// }))



root.render(<Card title="Iphone13" image="https://media.wired.com/photos/6500ad57fe61eb702d721b58/4:3/w_1913,h_1435,c_limit/Apple-iPhone-15-Pro-Hero-Gear.jpg" brand="Apple" price="999" />);
