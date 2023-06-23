import React from 'react'
import { Link } from 'react-router-dom';

export default function Natinfo(props) {
    const indexnum = props.seletindex;
    console.log(props.data);
    let data = props.data;
    console.log(data);
    const onMoveBack = () => {
        props.onserch("");
    }

    return (
        <>
            <Link to="/"><button onClick={onMoveBack}>BACK</button></Link>
            <div className='natinfoBox'>
                <div className="natinfoimg">
                    <img src={data[indexnum].flags.svg} alt={data[indexnum].flags.alt} name={data[indexnum].name.common} />
                </div>
                <div className="netinfolist">
                    {data[indexnum].name.common}
                    <li>{data[indexnum].translations.kor.common}</li>
                    <li>Population : {data[indexnum].population}</li>
                    <li>Region : {data[indexnum].continents}</li>
                    <li>Capital : {data[indexnum].capital}</li>
                    <li>Sub Region : {data[indexnum].subregion}</li>
                    <li>Top Level Domain : {data[indexnum].cca2}</li>
                    <li>Languages : {data[indexnum].languages.ara}</li>
                </div>
            </div>
        </>

    )
}
