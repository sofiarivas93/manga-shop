import './App.css';
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import ProductList from "./components/products/ProductList";
import {useState} from "react";

const DUMMY_PRODUCTS = [
    {
        id: 'p1',
        title: 'Manga 1',
        description: 'Follows the adventures of an extraordinarily strong young boy named Goku as he searches for the seven dragon balls. These balls, when combined, can grant the owner any one wish he desires. Along the way he makes many new friends, and enemies, and he trains to become the strongest fighter in the world.',
        price: '20',
        image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/03/dragon-ball-super-portada-tomo-12-vegeta-yadrat-1906501.jpg?itok=GG0Ylgi5'
    },
    {
        id: 'p2',
        title: 'Manga 2',
        description: 'A boy raised by boars, who wears a boar\'s head, boards the Infinity Train on a new mission with the Flame Pillar along with another boy who reveals his true power when he sleeps. Their mission is to defeat a demon who has been tormenting people and killing the demon slayers who oppose it.',
        price: '25',
        image: 'https://m.media-amazon.com/images/I/61Pi8jqIO4L._SY346_.jpg'
    },
    {
        id: 'p3',
        title: 'Manga 3',
        description: 'Lucy, a wizard, encounters Eclair, a village priestess who possesses a Phoenix Stone that she must protect. With the evil Carbuncle guild on their pursuit, Lucy and her friends must protect Eclair.',
        price: '10',
        image: 'https://m.media-amazon.com/images/I/61ZbpcZckAL._SY346_.jpg'
    },
    {
        id: 'p4',
        title: 'Manga 4',
        description: 'Agent Twilight, the greatest spy for the nation of Westalis, has to infiltrate an elite private school. In order to do so he assumes the identity of psychiatrist Loid Forger, adopts an orphan girl, and marries a city hall employee.',
        price: '15',
        image: 'https://m.media-amazon.com/images/I/41WcpST5nHL._SY346_.jpg'
    }
]
//const DUMMY_PRODUCTS_BLACK = []

const App = () => {
    const [products, setProducts] = useState(DUMMY_PRODUCTS);
    return (
        <div className="App">
            <Header title={"Manga Shop"}></Header>
            <Banner></Banner>
            <ProductList productList={products}></ProductList>
        </div>
    );
}

export default App;
