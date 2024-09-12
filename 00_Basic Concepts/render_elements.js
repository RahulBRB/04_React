import { createRoot } from 'react-dom/client';
import './style.css';

// Function component definition
function Card({ key, title, image, brand, price }) {
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
        const container2 = data.products.map((product) => {
            // Map product data to Card component
            return Card({
                key: product.id,
                title: product.title,
                image: product.thumbnail,
                brand: product.brand,
                price: product.price
            });
        });

        console.log(container2);
        // Render the container with the cards
        root.render(<div className="container">{container2}</div>);

    });
