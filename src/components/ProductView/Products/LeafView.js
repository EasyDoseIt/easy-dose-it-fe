import React from 'react';

const LeafView = ({ handleStrainTypeSelect }) => {

    return (
        <>
            <label for="strain types" >Strain type</label>
            <select name="strain types" id="strain-types" onChange={(e) => handleStrainTypeSelect(e)}>
                <option value="no selection">Select</option>
                <option value="indica">indica</option>
                <option value="sativa">sativa</option>
                <option value="hybrid">hybrid</option>
            </select>
        </>
    );
};

export default LeafView;