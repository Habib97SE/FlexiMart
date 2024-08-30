import React, { useState, useEffect, createContext, useMemo } from "react";
import AddressModel from "../../src/models/AddressModel";
import UserModel from "../../src/models/UserModel";
import { set } from "nprogress";

const UserContext = createContext();

const USER_STORAGE_KEY = "userDetails";

const saveUserToLocalStorage = (userData) => {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userData));
};

const getUserFromLocalStorage = () => {
    const userData = localStorage.getItem(USER_STORAGE_KEY);
    console.log(userData);
    return userData ? JSON.parse(userData) : null;
};

const removeUserFromLocalStorage = () => {
    localStorage.removeItem(USER_STORAGE_KEY);
};

const UserProvider = (props) => {
    const [user, setUser] = useState(getUserFromLocalStorage() || {});
    const [addressTypes, setAddressTypes] = useState([]);

    const userModel = new UserModel();
    const addressModel = new AddressModel();
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const userId = user.id;

    useEffect(() => {
        const fetchUser = async (userId) => {
            const response = await userModel.getUser(userId);
            if (response.error) {
                console.error("Error fetching user:", response.error);
            } else {
                setUser(response.data);
                saveUserToLocalStorage(response.data);
            }
        };

        if (!isNaN(userId)) {
            fetchUser(userId);
            setUserLoggedIn(true);
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

            fetchAddressTypes();
        }
    }, [userId]);

    const addNewAddress = async (address) => {
        console.log(address);
        try {
            const response = await addressModel.createAddress(address);
            console.log(response);
            if (response.error) {
                console.error("Error creating address:", response.error);
                return { success: false, error: response.error };
            } else {
                // update user.addresses with the new address
                const newAddresses = [...user.addresses, response.data];
                setUser({ ...user, addresses: newAddresses });
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
            const newAddresses = user.addresses.filter(
                (address) => address.id !== addressId
            );
            setUser({ ...user, addresses: newAddresses });
            return { success: true, data: response.message };
        }
    };

    const logoutUser = () => {
        setUser({});
        setAddressTypes([]);
        setUserLoggedIn(false);
        removeUserFromLocalStorage();
    };

    /**
     *
     * @param {object} signin obect containing email and password
     * @returns
     */
    const loginUser = async (signin) => {
        const response = await userModel.authenticate(signin);
        if (response.error) {
            return { success: false, error: response.message };
        }
        setUser(response.data);
        setUserLoggedIn(true);
        saveUserToLocalStorage(response.data);
        return { success: true, data: response.data };
    };

    /**
     * Register a new user
     * @param {object} user object containing user details
     * @returns
     */
    const registerUser = async (user) => {
        const response = await userModel.register(user);
        if (response.error) {
            return { success: false, error: response.message };
        }
        setUser(response.data);
        setUserLoggedIn(true);
        saveUserToLocalStorage(response.data);
        return { success: true, data: response.data };
    };

    /**
     * Update user details
     * @param {object} userDetails : object containing user details
     * @returns
     */
    const updateUserDetails = async (userDetails) => {
        try {
            if (!userDetails.id) {
                userDetails.id = user.id;
            }
            const response = await userModel.updateUser(userDetails);
            if (response.error) {
                console.error("Error updating user details:", response.error);
                return { success: false, error: response.error };
            } else {
                setUser(response.data);
                saveUserToLocalStorage(response.data);
                return { success: true, data: response.data };
            }
        } catch (error) {
            console.error("Unexpected error:", error);
            return { success: false, error: error.message };
        }
    };

    const value = useMemo(
        () => ({
            user,
            addressTypes,
            userLoggedIn,
            loginUser,
            registerUser,
            logoutUser,
            updateUserDetails,
            addNewAddress,
            deleteAddress,
        }),
        [user, addressTypes, userLoggedIn]
    );

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
