import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Modal from '../Modal';

jest.mock("../Modal", () => {
        return function ModalComponent(props) {
            const { children, close, title } = props
            return (
                <div
                    data-testid="close"
                    onClick={() => { close(); }}
                >
                    <div
                        data-testid="clickoutside"
                    >
                        
                    </div>
                    <button data-testid="click" >
                        <span data-testid="title">{title}</span>
                    </button>
                </div>
            ) 
        }
});

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("should render title modal", () => {
    const title = "Cerrar"
    act(() => {
        render(
            <Modal title={title} />
        )
    });


    expect(container.querySelector('[data-testid="title"]')
            .textContent).toEqual("Cerrar");

});