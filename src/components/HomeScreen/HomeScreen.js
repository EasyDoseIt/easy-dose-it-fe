import React, { useState } from 'react';
import FavoriteIcon from './FavoriteIcon';
import { MdEdit, MdAdd } from "react-icons/md";
import './HomeScreen.css';

const HomeScreen = () => {
    const [patientList, setPatientList] = useState([{"productName": "Sour Diesel", "favorite": true}]);

    return(
        <main>
            {patientList.map((s, index) => (
                <div className="product-list-item" key={index}>
                    <h2 className="product-name leaf" aria-label={`Product name: ${s.productName}`}>
                        {s.productName}
                    </h2>
                    <span className="add-to-list-icon" aria-label="Categorize this item"><MdAdd stroke="#017C6B" id="add-icon" fill="#017C6B" title="Add this item to a category" aria-labelledby="add-icon" desc="plus symbol" /></span>
                    <span className="edit-product-info-icon" aria-label="Edit this item's information and or notes"><MdEdit /></span>
                    <FavoriteIcon favorite={s.favorite} />
                </div>
            ))}
        </main>
    );
};

export default HomeScreen;