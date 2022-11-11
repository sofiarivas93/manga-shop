import React from 'react';
import {render, screen} from "@testing-library/react"
import ProductItem from "./ProductItem";

const DUMMY_PRODUCT =
    {
        id: 'p1',
        title: 'Manga 1',
        description: 'Follows the adventures of an extraordinarily strong young boy named Goku as he searches for the seven dragon balls. These balls, when combined, can grant the owner any one wish he desires. Along the way he makes many new friends, and enemies, and he trains to become the strongest fighter in the world.',
        price: '20',
        image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/03/dragon-ball-super-portada-tomo-12-vegeta-yadrat-1906501.jpg?itok=GG0Ylgi5'
    }

const renderProductItem = () => {
    render(
        <ProductItem key={DUMMY_PRODUCT.id}
                     title={DUMMY_PRODUCT.title}
                     description={DUMMY_PRODUCT.description}
                     price={DUMMY_PRODUCT.price}
                     image={DUMMY_PRODUCT.image}></ProductItem>
    )
}
describe("ProductItem", () => {
    it("show the correct title and price", () => {
        renderProductItem();
        const title = screen.getByRole('heading', {
            name: /manga 1/i
        });
        expect(title).toBeVisible();
    })
})