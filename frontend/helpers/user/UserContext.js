import React, { useState, useEffect, createContext, useMemo } from "react";
import AddressModel from "../../src/models/AddressModel";
import UserModel from "../../src/models/UserModel";
import { set } from "nprogress";

const UserContext = createContext();

const UserProvider = (props) => {
    const [user, setUser] = useState({});
    const [addresses, setAddresses] = useState([]);
    const [addressTypes, setAddressTypes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const userModel = new UserModel();
    const addressModel = new AddressModel();
    const userId = 1;

    useEffect(() => {
        setLoading(true);

        // Fetch the user
        const fetchUser = async () => {
            const user = await userModel.getUser(userId);
            console.log(user);
            if (user.error) {
                console.log("Error fetching user");
            } else {
                console.log(user.data);
                setUser(user.data);
                setUserLoggedIn(true);
            }
        };

        // Fetch the addresses
        const fetchAddresses = async () => {
            const addresses = await addressModel.getAddressByUserId(userId);
            console.log(addresses.data);
            if (addresses.error) {
                console.log("Error fetching addresses");
            } else {
                setAddresses(addresses.data);
            }
        };

        // Fetch the address types
        const fetchAddressTypes = async () => {
            const addressTypes = await addressModel.getAddressTypes();
            console.log(addressTypes);
            if (addressTypes.error) {
                console.log("Error fetching address types");
            } else {
                setAddressTypes(addressTypes.data);
            }
        };

        fetchUser();
        fetchAddresses();
        fetchAddressTypes();

        setLoading(false);
    }, []);

    // Function to update user details
    const updateUserDetails = async (userDetails) => {
        try {
            // check if userDetails contains an id, if not add it
            if (!userDetails.id) {
                userDetails.id = user.id;
            }

            if (!userDetails.middleName) {
                userDetails.middleName = user.middleName;
            }

            userDetails.suffix = userDetails.nameSuffix;

            const response = await userModel.updateUser(userDetails);
            console.log(response);
            if (response.data.error) {
                return { success: false, error: response.data.message };
            } else {
                setUser(response.data);
                return { success: true, data: response.data.message };
            }
        } catch (error) {
            console.error("Unexpected error:", error);
            return { success: false, error: error.message };
        }
    };

    const addNewAddress = async (address) => {
        console.log(address);
        try {
            const response = await addressModel.createAddress(address);
            console.log(response);
            if (response.error) {
                console.error("Error creating address:", response.error);
                return { success: false, error: response.error };
            } else {
                setAddresses([...addresses, response.data]);
                return { success: true, data: response.data };
            }
        } catch (error) {
            console.error("Unexpected error:", error);
            return { success: false, error: error.message };
        }
    };

    const deleteAddress = async (addressId) => {
        console.log("Deleting address with id: " + addressId);
        const response = await addressModel.deleteAddress(addressId);
        if (response.error) {
            return { success: false, error: response.message };
        } else {
            const newAddresses = addresses.filter(
                (address) => address.id !== addressId
            );
            setAddresses(newAddresses);
            return { success: true, data: response.message };
        }
    };

    const loginUser = async (signin) => {
        const response = await userModel.authenticate(signin);
        if (response.error) {
            return { success: false, error: response.message };
        }
        setUser(response.data);
        return { success: true, data: response.data };
    };

    const value = useMemo(
        () => ({
            user,
            addresses,
            addressTypes,
            userLoggedIn,
            deleteAddress,
            setUser,
            setAddresses,
            setAddressTypes,
            updateUserDetails,
            addNewAddress,
            setUserLoggedIn,
            loginUser,
        }),
        [user, addresses, addressTypes, addressModel, userModel]
    );

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
