import { Avaliable, Categorie, Categories, Container, Name, Price } from "./style";

// DEFAULT NPUT COMPONENT
const Card = (props: Card) => {
    return (
        <>
            <Container>
                <div>
                    <Avaliable>Av.</Avaliable>
                    {/* <ImgProd /> */}
                </div>
                <Name>{props.name}</Name>
                <Price>{props.price}</Price>
                <aside>
                    <Categories>
                        {/* {props.categories.map(data => <Categorie>{data.name}</Categorie>)} */}
                    </Categories>
                </aside>
            </Container>
        </>
    )
}

export default Card;