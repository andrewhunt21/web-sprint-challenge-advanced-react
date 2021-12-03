import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);
});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm />);

    const firstName = screen.getByLabelText(/first name:/i);
    userEvent.type(firstName, "Dexter");

    const lastName = screen.getByLabelText(/last name:/i);
    userEvent.type(lastName, "Morgan");

    const address = screen.getByLabelText(/address:/i);
    userEvent.type(address, "123 Passenger St.");

    const city = screen.getByLabelText(/city:/i);
    userEvent.type(city, "Miami");

    const state = screen.getByLabelText(/state:/i);
    userEvent.type(state, "Florida");

    const zip = screen.getByLabelText(/zip:/i);
    userEvent.type(zip, "33133");

    const button = screen.getByRole("button");
    userEvent.click(button);

    const successMessage = await screen.findByTestId("successMessage");
    // expect(successMessage).toHaveTextContent(/you have not ordered plants dummy/i); (failing test on purpose)
    expect(successMessage).toHaveTextContent(/You have ordered some plants! Woo-hoo!/i);

});
