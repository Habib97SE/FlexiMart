import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { AddressModel, AddressRequest } from "@/models/AddressModel";

describe("AddressModel - getAddress", () => {
    let addressModel: AddressModel;

    beforeEach(() => {
        addressModel = new AddressModel();
    });

    it("Should return 2 addresses when called with user id: 1", async () => {
        const response = addressModel.getAddressesByUserId(1);
        expect(response).resolves.toHaveLength(3);
    });
});
