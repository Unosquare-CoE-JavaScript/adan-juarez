import React from "react";
import { create } from "react-test-renderer";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import App from '../App';


describe("App Component", () => {
    test("Snapshot", () => {
        const app = create(<App />);
        expect(app.toJSON()).toMatchSnapshot();
    })
})