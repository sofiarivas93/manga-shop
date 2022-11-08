import React from 'react';
import {render, screen} from '@testing-library/react'
import Banner from './Banner'

const renderBanner = () => {
    render(
        <Banner></Banner>
    )
}
describe("Banner", () => {
    it("show welcome message", () => {
        renderBanner();
        const title = screen.getByRole('heading', {
            name: /welcome to the manga shop!/i
        });
        expect(title).toBeVisible();
    })
})