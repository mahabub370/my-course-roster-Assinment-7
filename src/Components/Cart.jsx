/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css';

const Cart = ({ selectedCourse, remainingPrice, totalPrice}) => {
    return (
        <div>
            <h2>jjjjjjjjjjjjjjjjjjjjj</h2>
            <h4>Selected Courses : {selectedCourse.length}</h4>
            <h4>Remaining Price : {remainingPrice}</h4>
            <h4>Total Price : {totalPrice}</h4>
            {
                selectedCourse.map((course) => (
                    <li key ={course.id}>{course.title}</li>
                ))
            }
        </div>
    );
};

export default Cart;