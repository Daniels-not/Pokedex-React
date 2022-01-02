import React from 'react';
import Classes from './Spiner.module.css'

const Spiner = () => {
    return (
        <div className={Classes.spiner_container}>
            <div className={Classes.spiner__loader}></div>
        </div>
    )
}

export default Spiner;