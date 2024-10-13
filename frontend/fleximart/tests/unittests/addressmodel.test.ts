import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { AddressModel } from "@/models/AddressModel";

describe("AddressModel - getAddress", () => {
    let addressModel: AddressModel;
    let mock: MockAdapter;

    beforeEach(() => {
        addressModel = new AddressModel();
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        mock.restore();
    });

    // Test case: Invalid ID (NaN or less than 1)
    it("should return error for invalid ID", async () => {
        const result = await addressModel.getAddress(NaN);
        expect(result).toEqual({
            error: true,
            message: "Invalid ID",
            statusCode: 400,
        });

        const resultNegativeId = await addressModel.getAddress(-5);
        expect(resultNegativeId).toEqual({
            error: true,
            message: "Invalid ID",
            statusCode: 400,
        });
    });

    // Test case: Successful response
    it("should return address data when the server responds successfully", async () => {
        // Mock a successful server response
        mock.onGet("http://localhost:8080/api/v1/addresses/1").reply(200, {
            status: 200,
            data: {
                id: 1,
                street: "Main St",
                streetNumber: "123",
                postalCode: "12345",
                city: "Cityville",
                state: "State",
                country: "Country",
            },
        });

        const result = await addressModel.getAddress(1);
        expect(result).toEqual({
            id: 1,
            street: "Main St",
            streetNumber: "123",
            postalCode: "12345",
            city: "Cityville",
            state: "State",
            country: "Country",
        });
    });

    // Test case: Server returns an error response
    it("should return error if the server responds with an error", async () => {
        // Mock an error response from the server
        mock.onGet("http://localhost:8080/api/v1/addresses/1").reply(404, {
            status: 404,
            error: true,
            message: "Address not found",
        });

        const result = await addressModel.getAddress(1);
        expect(result).toEqual({
            error: true,
            message: "Address not found",
            statusCode: 404,
        });
    });

    // Test case: Server returns a non-200 status but no specific error
    it("should return error with generic message for non-200 status", async () => {
        mock.onGet("http://localhost:8080/api/v1/addresses/1").reply(500, {
            status: 500,
            error: true,
            message: "Internal server error",
        });

        const result = await addressModel.getAddress(1);
        expect(result).toEqual({
            error: true,
            message: "Internal server error",
            statusCode: 500,
        });
    });

    // Test case: Catch block (simulating network or server failure)
    it("should return error for network or unexpected server failure", async () => {
        // Mock a network error
        mock.onGet("http://localhost:8080/api/v1/addresses/1").networkError();

        const result = await addressModel.getAddress(1);
        expect(result).toEqual({
            error: true,
            message: "Something went wrong",
            statusCode: 500,
        });
    });
});
