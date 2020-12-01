import React, { useEffect, useState } from 'react';
import LeafView from './Products/LeafView.js';

const ProductView = (props) => {
    // const [ newProduct, setNewProduct ] = useState({});
    const [ productType, setProductType ] = useState();
    const [ strainType, setStrainType ] = useState();

    useEffect(() => {
        
    }, [])

    // const handleNewProduct = () => {

    // }

    const handleProductSelect = (e) => {
        setProductType(e.target.value)
    }

    const handleStrainTypeSelect = (e) => {
        setStrainType(e.target.value)
    }

    return (
        <main>
            <form>
                <label for="product-types" >Product type</label>
                <select name="product types" id="product-types" onChange={handleProductSelect}>
                    <option value="no selection">Select</option>
                    <option value="leaf">leaf</option>
                    <option value="concentrate">concentrate</option>
                    <option value="concentrate">edible</option>
                </select>
                {productType === 'leaf' && <LeafView handleStrainTypeSelect={handleStrainTypeSelect}/>}
            </form>
        </main>
    );
};

export default ProductView;