package org.fleximart.fleximart.v1.service.user;

import org.fleximart.fleximart.v1.DTO.user.request.AddressRequest;
import org.fleximart.fleximart.v1.DTO.user.response.AddressResponse;
import org.fleximart.fleximart.v1.DTO.user.response.AddressTypeResponse;
import org.fleximart.fleximart.v1.DTO.user.response.UserResponse;
import org.fleximart.fleximart.v1.entity.user.Address;
import org.fleximart.fleximart.v1.entity.user.AddressType;
import org.fleximart.fleximart.v1.entity.user.User;
import org.fleximart.fleximart.v1.repository.user.AddressRepository;
import org.fleximart.fleximart.v1.repository.user.UserRepository;
import org.fleximart.fleximart.v1.utils.ResponseHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import org.fleximart.fleximart.v1.repository.user.AddressTypeRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static org.hibernate.internal.util.collections.CollectionHelper.map;

@Service
public class AddressService {

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private AddressTypeRepository addressTypeRepository;

    @Autowired
    private UserRepository userRepository;

    public AddressService(AddressRepository addressRepository,
                          AddressTypeRepository addressTypeRepository,
                          UserRepository userRepository) {
        this.addressRepository = addressRepository;
        this.addressTypeRepository = addressTypeRepository;
        this.userRepository = userRepository;
    }

    private AddressResponse createAddressResponseObject(Address address) {
        return AddressResponse.builder()
                .id(address.getId())
                .houseNumber(address.getHouseNumber())
                .street(address.getStreet())
                .streetNumber(address.getStreetNumber())
                .postalCode(address.getPostalCode())
                .city(address.getCity())
                .state(address.getState())
                .country(address.getCountry())
                .name(address.getName())
                .phoneNumber(address.getPhoneNumber())
                .addressType(
                        AddressTypeResponse.builder()
                                .id(address.getAddressType().getId())
                                .name(address.getAddressType().getName())
                                .icon(address.getAddressType().getIcon())
                                .description(address.getAddressType().getDescription())
                                .build()
                )
                .build();
    }

    private List<AddressResponse> createAddressResponseObjectList(List<Address> addresses) {
        List<AddressResponse> addressResponseList = new ArrayList<>();

        for (Address address : addresses) {
            addressResponseList.add(createAddressResponseObject(address));
            System.err.println(address);
        }

        return addressResponseList;
    }

    /**
     * Fetch all Address
     *
     * @return ResponseEntity
     */
    public ResponseEntity<Object> findAll() {
        List<AddressResponse> addressResponses = addressRepository.findAll().stream()
        .map(this::createAddressResponseObject)
                .toList();

        return ResponseHandler.generateResponse(
                "All Address fetched successfully.",
                200,
                addressResponses,
                false);
    }

    /**
     * Fetch Address by Id
     *
     * @param id
     * @return ResponseEntity
     */
    public ResponseEntity<Object> findById(Long id) {
        if (id < 0) {
            return ResponseHandler.generateResponse(
                    "Invalid Address Id.",
                    400,
                    null,
                    true);
        }

        Address address = addressRepository.findById(id).orElse(null);

        if (address == null) {
            return ResponseHandler.generateResponse(
                    "Address not found.",
                    404,
                    null,
                    true);
        }

        return ResponseHandler.generateResponse(
                "Address fetched successfully.",
                200,
                address,
                false);
    }

    public ResponseEntity<Object> findByUserId(Long userId) {
        if (userId < 0) {
            return ResponseHandler.generateResponse(
                    "Invalid User Id.",
                    400,
                    null,
                    true);
        }

        List<AddressResponse> addresses = addressRepository.findByUserId(userId).stream()
                .map(this::createAddressResponseObject)
                .toList();

        if (addresses.isEmpty()) {
            return ResponseHandler.generateResponse(
                    "Addresses not found.",
                    404,
                    null,
                    true);
        }

        return ResponseHandler.generateResponse(
                "Addresses fetched successfully.",
                200,
                addresses,
                false);
    }

    /**
     * Fetch all Address Types
     *
     * @return ResponseEntity
     */
    public ResponseEntity<Object> findAllAddressTypes() {
        return ResponseHandler.generateResponse(
                "All Address Types fetched successfully.",
                200,
                addressTypeRepository.findAll(),
                false);
    }

    public ResponseEntity<Object> create(AddressRequest addressRequest) {
        System.err.println(addressRequest);
        try {
            Address address = Address.builder()
                    .houseNumber(addressRequest.getHouseNumber())
                    .street(addressRequest.getStreet())
                    .streetNumber(addressRequest.getStreetNumber())
                    .postalCode(addressRequest.getPostalCode())
                    .city(addressRequest.getCity())
                    .state(addressRequest.getState())
                    .country(addressRequest.getCountry())
                    .name(addressRequest.getName())
                    .phoneNumber(addressRequest.getPhoneNumber())
                    .user(userRepository.findById(addressRequest.getUserId()).orElse(null))
                    .addressType(addressTypeRepository.findById(addressRequest.getAddressTypeId()).orElse(null))
                    .build();

            System.err.println("Address: " + address);

            address = addressRepository.save(address);
            AddressResponse addressResponse = createAddressResponseObject(address);
            return ResponseHandler.generateResponse(
                    "Address created successfully.",
                    201,
                    addressResponse,
                    false);
        } catch (Exception e) {
            System.err.println("Failed to create Address: " + e.getMessage());
            return ResponseHandler.generateResponse(
                    "Failed to create Address.",
                    400,
                    null,
                    true);
        }
    }

    public ResponseEntity<Object> getAddressTypeById(Long id) {
        System.err.println("Address Type ID: " + id);
        if (id < 0) {
            return ResponseHandler.generateResponse(
                    "Invalid Address Type Id.",
                    400,
                    null,
                    true);
        }

        System.err.println("After if block");

        Optional<AddressType> addressType = addressTypeRepository.findById(id);

        System.err.println("After Optional<AddressType> addressType = addressTypeRepository.findById(id);");

        if (addressType.isEmpty()) {
            return ResponseHandler.generateResponse(
                    "Address Type not found.",
                    404,
                    null,
                    true);
        }

        return ResponseHandler.generateResponse(
                "Address Type fetched successfully.",
                200,
                addressType,
                false);
    }

    public ResponseEntity<Object> delete(Long id) {
        if (id < 0) {
            return ResponseHandler.generateResponse(
                    "Invalid Address Id.",
                    400,
                    null,
                    true);
        }

        Address address = addressRepository.findById(id).orElse(null);

        if (address == null) {
            return ResponseHandler.generateResponse(
                    "Address not found.",
                    404,
                    null,
                    true);
        }

        addressRepository.delete(address);

        return ResponseHandler.generateResponse(
                "Address deleted successfully.",
                200,
                null,
                false);
    }
}
