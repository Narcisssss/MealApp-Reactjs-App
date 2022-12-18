import React from 'react';
import { Dna } from 'react-loader-spinner';
import '../styles/Loader.scss';

interface Props {}

function Loader(props: Props) {
    const {} = props

    return (
        <div className='loader-container'>
            <Dna height="100" width="100" wrapperStyle={{}} wrapperClass="dna-wrapper"/>
        </div>
    )
}

export default Loader
