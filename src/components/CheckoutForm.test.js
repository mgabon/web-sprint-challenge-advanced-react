import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />)
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    const firstName = screen.getByLabelText(/First Name:/i)
    userEvent.type(firstName, 'Mark')

    const lastName = screen.getByLabelText(/Last Name:/i)
    userEvent.type(lastName, "Gabon")

    const address = screen.getByLabelText(/Address:/i)
    userEvent.type(address, '4321 Playground Street')

    const city = screen.getByLabelText(/City:/i)
    userEvent.type(city, 'Atlantis')

    const state = screen.getByLabelText(/State:/i)
    userEvent.type(state, 'Florida')

    const zip = screen.getByLabelText(/Zip:/i)
    userEvent.type(zip, "12345")

    expect(screen.getByText('You have ordered some plants! Woo-hoo!')).toBeInTheDocument();
});
