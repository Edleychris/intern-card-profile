import React from 'react';

function InternCard ({internData}){

    return internData.map((item, key) => 
            (
                <div className='card' key={key}>
                    <img src={item.image} alt = {`${item.name}s profile pic`} width = '90px' height='80px' />
                    <div className = 'info'>
                    <h2 className='intern-name'><span>Name</span> : {item.name}</h2>
                    <p><span>Track : </span>{item.info}</p>
                    {/* <h5>{item.}</h5> */}
                    <p>Average Score : {Math.floor(item.scores.reduce((sum, score) => sum + score, 0)/item.scores.length)}</p>
                    <p>{item.details}</p>
                    <>
                    <details >
                        <summary>Information</summary>
                        <p className='d-p'>Proficient in {item.skills}</p>
                    </details>
                    </>
                    </div>
                </div>
            )
            )

}

export default InternCard;