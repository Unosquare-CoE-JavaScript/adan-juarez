import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import {create, act} from 'react-test-renderer';

import Pagination from '../Pagination';

jest.mock("../Pagination", () => {
    return  function PaginationComponent(props) {
        const { onLeftClick, onRightClick, page, totalPages } = props;

        return(
            <div>
            <button data-testid="left-click" onClick={onLeftClick}>

            </button>
            <div>
              <span data-testid="page">{page}</span>{" "} de {" "} <span data-testid="pageTotal">{totalPages}</span>
            </div>
            <button data-testid="right-click" onClick={onRightClick}>
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

 it("should render title", () => {
     const page =  1 ;
     const totalPages = 255;
     act(() => {
        render(
            <Pagination
                page={page}
                totalPages={totalPages}
            />, container
        )
     });

     expect(
         container.querySelector('[data-testid="page"]').textContent
     ).toEqual("1")

     expect(
        container.querySelector('[data-testid="pageTotal"]').textContent
    ).toEqual("255")
 })