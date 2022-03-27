// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ICreditRequest {
    struct CreditRequest {
        bool approved;
        bool unstaking;
        uint256 creditLimit;
    }

    event CreditRequestCreated(
        address network,
        address networkMember,
        address ambassador,
        uint256 creditLimit,
        bool approved
    );

    event CreditRequestUpdated(
        address network,
        address networkMember,
        uint256 creditLimit,
        bool approved
    );

    event CreditRequestRemoved(address network, address networkMember);

    event UnstakeRequestCreated(address network, address networkMember);

    function createRequest(
        address _network,
        address _networkMember,
        uint256 _creditLimit
    ) external;

    function approveRequest(address _network, address _networkMember) external;

    function updateRequestLimit(
        address _network,
        address _networkMember,
        uint256 _creditLimit,
        bool _approved
    ) external;

    function deleteRequest(address _network, address _networkMember) external;

    function getCreditRequest(address _network, address _networkMember)
        external
        view
        returns (CreditRequest memory);

    function verifyCreditLineExpiration(
        address _network,
        address _networkMember,
        uint256 _transactionValue
    ) external;
}
