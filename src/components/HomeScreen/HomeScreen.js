import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FavoriteIcon from './FavoriteIcon';
import { MdEdit, MdAdd } from "react-icons/md";
import './HomeScreen.css';

const HomeScreen = (props) => {
    const [patientList, setPatientList] = useState([]);

    
    useEffect(() => {
        axios.get("https://easydoseit.herokuapp.com/api/stash/", {
            headers: {
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hcnlqYW5lIiwiaWF0IjoxNjAzODU1MzI1LCJleHAiOjE2MDM5NDE3MjV9.CRUoMjqsiRlOjBoedBsvh0zoGoA7JTXDwnhUDxluv3s'
            }
        })
        .then(res => setPatientList(res.data))
    }, [])

    const handleAddNewProduct = (e) => {
        e.preventDefault();
        props.history.push('/newCategory')
    }

    return(
        <main>
            {patientList.map((s, index) => (
                <div className="product-list-item" key={index}>
                    <h2 className="product-name leaf" aria-label={`Product name: ${s.strain_name}`}>
                        {s.strain_name}
                    </h2>
                    <span className="add-to-category-icon" aria-label="Categorize this item"><MdAdd stroke="#017C6B" id="add-icon" fill="#017C6B" title="Add this item to a category" aria-labelledby="add-icon" desc="plus symbol" /></span>
                    <span className="edit-product-info-icon" aria-label="Edit this item's information and or notes"><MdEdit title="Edit this item's information and or notes"/></span>
                    <span className="favorite-icon" aria-label="Add this item to your favorites"><FavoriteIcon favorite={s.favorite} title="Favorite this item" desc="heart symbol"/></span>
                </div>
            ))}
            <button className="add-product-button" onClick={handleAddNewProduct} title="Add new product"><MdAdd fontSize="2rem"/></button>
        </main>
    );
};

export default HomeScreen;