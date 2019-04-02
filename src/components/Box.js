import React from 'react';

const Box = ({PushMe}) => {
    return(
        <div className="box">
            <button onClick={PushMe} className="box-button" aria-label="button"/>     
            

        </div>
    )
}

export default Box;