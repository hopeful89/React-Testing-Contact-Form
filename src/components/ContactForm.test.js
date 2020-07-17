import React from "react";
import ContactForm from "./ContactForm";
import { render, fireEvent, act } from "@testing-library/react";


describe("Contact Form",  () => {
//   render(<ContactForm />);
    it('test submit function', async () => {
        const mock = jest.fn();
        const {getByLabelText, getByTestId} = render(<ContactForm onSubmit={mock} />)

        await act(async () => {
            fireEvent.change(getByLabelText("First Name*"), { target: {value: "Brandon" } });
            fireEvent.change(getByLabelText("Last Name*"), { target: {value: "Stine" } });
            fireEvent.change(getByLabelText("Email*"), { target: {value: "test@gmail.com" } });  
        })

        await act(async ()=> {
            
        })

        expect(getByLabelText("First Name*")).toHaveValue("Brandon")
        expect(getByLabelText("Last Name*")).toHaveValue("Stine")
        expect(getByLabelText("Email*")).toHaveValue("test@gmail.com")
        expect(mock).toHaveBeenCalled()
        
    })
    // expect(mock).toHaveBeenCalled()
});
