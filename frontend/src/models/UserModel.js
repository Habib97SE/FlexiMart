import axios from "axios";

export default class UserModel {
    constructor() {
        this.endpoint = "http://localhost:8080/api/v1/users";
    }

    async register(data) {
        data = {
            ...data,
            suffix: "",
            middleName: "",
            profilePicture:
                "https://ui-avatars.com/api/?name=" +
                data.firstName +
                "+" +
                data.lastName +
                "&background=random&color=fff",
        };
        const response = await axios.post(this.endpoint, data);
        console.log(response);
        return response.data;
    }

    async authenticate(data) {
        const authEndpoint = "http://localhost:8080/api/v1/auth/user";
        const response = await axios.post(authEndpoint, data);
        console.log(response);
        return response.data;
    }

    async getUser(id) {
        console.log("Getting user with id: " + id);
        const response = await axios.get(this.endpoint + "/" + id);
        console.log(response);
        return response.data;
    }

    async updateUser(data) {
        const response = await axios.put(this.endpoint + "/" + data.id, data);
        console.log(response);
        return response.data;
    }
}
