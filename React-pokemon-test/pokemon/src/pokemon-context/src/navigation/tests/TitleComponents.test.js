import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import TitleComponent from '../TitleComponent';

jest.mock("../TitleComponent", () => {
    return  function TitleTestComponent(props) {
        return(
            <div data-testid="title">
                {props.title}
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

 it("should render title", () => {
     const title =  "home" ;
     act(() => {
        render(
            <TitleComponent title={title} />, container
        )
     });

     expect(
         container.querySelector('[data-testid="title"]').textContent
     ).toEqual("home")
 })