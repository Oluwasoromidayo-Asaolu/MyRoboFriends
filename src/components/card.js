import React from 'react';

const Card = ({name, email, id}) => {
    return(
        <div className='tc bg-light-green dib r3 pa3 ma2 grow br4-ns shadow-5'>
            <img src={`https://robohash.org/${id}`} alt='Photo' />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;