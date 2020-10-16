import React, { useState } from 'react';
import FavoriteIcon from './FavoriteIcon';
import { MdEdit, MdAdd } from "react-icons/md";
import './HomeScreen.css';

const HomeScreen = () => {
    const [patientList, setPatientList] = useState([{"productName": "Sour Diesel", "favorite": true}, {"productName": "Sour Diesel", "favorite": true}, {"productName": "Sour Diesel", "favorite": true}, {"productName": "Sour Diesel", "favorite": true}, {"productName": "Sour Diesel", "favorite": true}, {"productName": "Sour Diesel", "favorite": true}, {"productName": "Sour Diesel", "favorite": true}, {"productName": "Sour Diesel", "favorite": true}, {"productName": "Sour Diesel", "favorite": true}, {"productName": "Sour Diesel", "favorite": true}, {"productName": "Sour Diesel", "favorite": true}]);

    return(
        <main>
            {patientList.map((s, index) => (
                <div className="product-list-item" key={index}>
                    <h2 className="product-name leaf" aria-label={`Product name: ${s.productName}`}>
                        {s.productName}
                    </h2>
                    <span className="add-to-category-icon" aria-label="Categorize this item"><MdAdd stroke="#017C6B" id="add-icon" fill="#017C6B" title="Add this item to a category" aria-labelledby="add-icon" desc="plus symbol" /></span>
                    <span className="edit-product-info-icon" aria-label="Edit this item's information and or notes"><MdEdit title="Edit this item's information and or notes"/></span>
                    <span className="favorite-icon" aria-label="Add this item to your favorites"><FavoriteIcon favorite={s.favorite} title="Favorite this item" desc="heart symbol"/></span>
                </div>
            ))}
            <button className="add-product-button"><MdAdd fontSize="2rem"/></button>
        </main>
    );
};

export default HomeScreen;