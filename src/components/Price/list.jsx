import React from 'react';
import '../../styles/price.css';

const List = (props) =>  {
    return (
            <li>{props.item}<p></p>{props.price}</li>
    );
};

export default List;
