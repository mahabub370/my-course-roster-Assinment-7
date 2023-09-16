/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Home.css';
import Cart from './Cart';



const Home = () => {

    const [allCourse, setAllCourse] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [remainingPrice, setRemaining] = useState(0);

    useEffect(() => {
        fetch("/src/assets/Cards-Data.json")
        .then((response)=> response.json())
        .then((data) => setAllCourse(data))
        
    },[]);


    const selectCourseHandler = (course) => {
        const isPresent = selectedCourse.find((item) => item.id === course.id);

        let coursePrice = course.value1;

        if(isPresent){
            return alert("This course is already selected!");
        }
        else{

            selectedCourse.forEach((item) => {
                coursePrice = coursePrice + item.value1;
            });

            const totalRemaining = 100 - coursePrice;

            
            if(coursePrice <= 100){
                return alert("You have not access more course!")
            }
            else{
                setTotalPrice(coursePrice);

                setRemaining(totalRemaining);

                setSelectedCourse([...selectedCourse, course]);
            }
        }
        
    }

    return (
        <div className="">
            <div className="cards flex flex-wrap gap-6">
                { allCourse.map((cards) => ( 
                    <div key={cards.id} className="card w-[312px] h-[402px] bg-[#FFF] shadow-xl rounded-lg">
                    <figure className="px-4 pt-4">
                        <img src={cards.image} className="rounded-xl w-[280px] h-[144px]" />
                    </figure>
                    <div className="card-body text-center px-4 pt-4">
                        <h2 className="card-title text-lg font-semibold text-[#1C1B1B] text-left">{cards.title}</h2>
                        <p className=" font-normal text-sm text-[#1C1B1B99] mt-3 pb-[19px] text-left">{cards.paragraph}</p>
                    <div className="flex justify-between pb-6">
                        <div>
                            <img src={cards.icon} className="" alt=""></img>
                            <p className="text-[#1C1B1B99] text-base font-medium">Price : {cards.value1} $</p>
                        </div>
                        <div>
                            <img src={cards.link} className="" alt=""></img>
                            <p className="text-[#1C1B1B99] text-base font-medium">Credit : {cards.value2}</p>
                        </div>
                    </div>
                    <div className="card-actions mb-4">
                        <button onClick={() => selectCourseHandler(cards)} className="btn text-lg font-semibold text-[#FFF] bg-[#2F80ED] w-[280px] h-10 rounded-xl">{cards.label}</button>
                    </div>
                    </div>
                    </div>
                ))
                    
                }
                
            </div>

            <div className="cart">
                <Cart selectedCourses ={selectedCourse} remaining ={remainingPrice} totalPrice ={totalPrice}></Cart>
            </div>
        </div>
    );
};

export default Home;