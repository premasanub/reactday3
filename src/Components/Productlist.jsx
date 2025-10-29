import React from 'react';

const Productlist = ({Arrobj}) => {
    return (
        <div>
           {
            Arrobj.map((ele,index)=>{
                return(
                    <div key={index} className='card'>
                        <img src={ele.image} alt="iphone"  />
                        <h1>{ele.name}</h1>
                        <p>{ele.price}</p>
                        <p>{ele.desc}</p>
           
                    </div>
                )

            })
           } 
        </div>
    );
};

export default Productlist;