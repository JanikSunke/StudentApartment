import { useState } from 'react';
import { Button, Card, Container, Image, Stack } from 'react-bootstrap';

export default function FavoritePage() {
    const [list, setList] = useState([
        {name: "Nørregade", price: "10.000 kr", image: "apartment1.jpg"},
        {name: "Roesgårdvej", price: "6.500 kr", image: "apartment2.jpg"},
        {name: "Nordvej", price: "11.500 kr", image: "apartment3.jpg"}
    ])

    return (
        <Container>
            <h1>Favorites</h1>
            {list.map((item) => {
            return <Card className="m-2">
                <Stack direction="horizontal">
                    <Image className="rounded" width={"150rem"} fluid src={item.image} />
                    <div>
                    <p>{item.name}</p>
                    {item.price}
                    </div>
                    <Button onClick={() => setList(list.filter(filt => filt.name !== item.name))} variant="danger">X</Button>
                </Stack>
            </Card>
            })}
        </Container>
    )
}