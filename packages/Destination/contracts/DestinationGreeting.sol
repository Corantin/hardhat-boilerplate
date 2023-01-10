// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.15;

import {IXReceiver} from "@connext/nxtp-contracts/contracts/core/connext/interfaces/IXReceiver.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract DestinationGreeting is IXReceiver {
    string public greeting;

    // Hardcoded cost to update the greeting, in wei units
    uint256 public cost = 1e18;

    // The TEST Token on Mumbai
    IERC20 public token = IERC20(0x68Db1c8d85C09d546097C65ec7DCBFF4D6497CbF); // Test Token address on optimism-goerli

    /** @notice The receiver function as required by the IXReceiver interface.
     * @dev The Connext bridge contract will call this function.
     */
    function xReceive(
        bytes32 _transferId,
        uint256 _amount,
        address _asset,
        address _originSender,
        uint32 _origin,
        bytes memory _callData
    ) external returns (bytes memory) {
        // Enforce the cost to update the greeting
        require(
            _asset == address(token) && _amount >= cost,
            "Must pay at least 1 TEST"
        );

        // Unpack the _callData
        string memory newGreeting = abi.decode(_callData, (string));

        _updateGreeting(newGreeting);
    }

    /** @notice Internal function to update the greeting.
     * @param newGreeting The new greeting.
     */
    function _updateGreeting(string memory newGreeting) internal {
        greeting = newGreeting;
    }
}
