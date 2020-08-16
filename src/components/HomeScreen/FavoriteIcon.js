import React from 'react';
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
const FavoriteIcon = (props) => {

    return (
<span className="favorite-icon">
{props.favorite ? (<MdFavorite className="full-heart-icon"/>) : (<MdFavoriteBorder className="empty-heart-icon"/>) }
</span>
    )
}

export default FavoriteIcon;