import axios from "axios";

export default class AddressModel {
    constructor() {
        this.endpoint = "http://localhost:8080/api/v1/addresses";
    }

    async getAddresses() {
        const response = await axios.get(this.endpoint);
        return response.data;
    }

    async getAddressById(id) {
        const response = await axios.get(this.endpoint + "/" + id);
        return response.data;
    }

    async getAddressTypes() {
        const response = await axios.get(this.endpoint + "/types");
        return response.data;
    }

    async getAddressByUserId(userId) {
        const response = await axios.get(this.endpoint + "/user/" + userId);
        return response.data;
    }

    async createAddress(address) {
        console.log(address);
        const response = await axios.post(this.endpoint, address);
        return response.data;
    }

    async deleteAddress(id) {
        const response = await axios.delete(this.endpoint + "/" + id);
        return response.data;
    }
}
