import { AddressModel } from "@/models/AddressModel";

describe("AddressModel - getAddress", () => {
    let addressModel: AddressModel;

    beforeEach(() => {
        addressModel = new AddressModel();
    });

    it("Should return all address types", async () => {
        const response = await addressModel.getAddress(1);
        console.log(response.message);
    });
});
