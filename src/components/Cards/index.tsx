import Card from "../Card";
import { Container } from "./style";

// DATA MOCK
const mockProducts: Card[] = [
    {
        prodImage: 'cappuccino.jpg',
        name: 'Cappuccino',
        price: 3.99,
        avaliable: 20,
        categories: ['Bebida Quente', 'Café'],
    },
    {
        prodImage: 'espresso.jpg',
        name: 'Espresso',
        price: 2.49,
        avaliable: 15,
        categories: ['Bebida Quente', 'Café'],
    },
    {
        prodImage: 'croissant.jpg',
        name: 'Croissant',
        price: 2.99,
        avaliable: 30,
        categories: ['Pão', 'Lanche'],
    },
    {
        prodImage: 'latte.jpg',
        name: 'Latte',
        price: 4.49,
        avaliable: 18,
        categories: ['Bebida Quente', 'Café'],
    },
    {
        prodImage: 'muffin.jpg',
        name: 'Muffin de Blueberry',
        price: 3.29,
        avaliable: 25,
        categories: ['Bolos', 'Lanche'],
    },
    {
        prodImage: 'chocolate-quente.jpg',
        name: 'Chocolate Quente',
        price: 4.99,
        avaliable: 12,
        categories: ['Bebida Quente', 'Chocolate'],
    },
    {
        prodImage: 'sanduiche.jpg',
        name: 'Sanduíche de Frango',
        price: 5.99,
        avaliable: 10,
        categories: ['Sanduíche', 'Lanche'],
    },
    {
        prodImage: 'cha.jpg',
        name: 'Chá de Camomila',
        price: 2.99,
        avaliable: 22,
        categories: ['Bebida Quente', 'Chá'],
    },
    {
        prodImage: 'bolo-cenoura.jpg',
        name: 'Bolo de Cenoura',
        price: 3.49,
        avaliable: 14,
        categories: ['Bolos', 'Sobremesa'],
    },
    {
        prodImage: 'sanduiche-vegetariano.jpg',
        name: 'Sanduíche Vegetariano',
        price: 6.49,
        avaliable: 8,
        categories: ['Sanduíche', 'Lanche'],
    },
];

// DEFAULT NPUT COMPONENT
const Cards = () => {
    return (
        <>
            <Container>
                {mockProducts.map(
                    data => <Card
                                name={data.name}
                                avaliable={data.avaliable}
                                categories={data.categories}
                                price={data.price}
                                prodImage={data.prodImage}
                                key={data.name} />
                )}
            </Container>
        </>
    )
}

export default Cards;