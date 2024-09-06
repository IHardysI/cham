import React, { useContext } from 'react';
import axios from 'axios';
import { UserContext } from "../App.jsx";
function MainButton() {
    const { walletAddress, setWalletAddress } = useContext(UserContext);

    const handleClick = async () => {
        if (!walletAddress) {
            alert('Wallet address is not available.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/users', {
                walletAddress
            });
            if (response.data.message === 'User already exists') {
                alert('User with this wallet address already exists.');
            } else if (response.data.message === 'User created successfully') {
                alert('User created successfully.');
            }
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error creating user:', error);
            alert('An error occurred while creating the user.');
        }
    };

    return (
        <div className="welcome-btn" onClick={handleClick}>
            <a href="#">Buy coin</a>
        </div>
    );
}

export default MainButton;
