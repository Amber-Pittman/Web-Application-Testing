import React from "react";
import Display from "./Display";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup);

test("Show the hits text", () => {
    const wrapper = rtl.render(<Display />);

    const element = wrapper.getByText(/Number of hits:/i);
    expect(element).toBeVisible();
})

test("Show the hits text", (props) => {
    const wrapper = rtl.render(<Display hits={props.hits} />);

    const element = wrapper.getByText(/hits/i)
    expect(element).toHaveValue(0);
})