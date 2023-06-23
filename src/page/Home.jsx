import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
    console.log(props)
    const data = props.data;

    const [intext, setintext] = useState('');
    

    const ontextHandle = (e) => {
        setintext(e.target.value);
    }
    const onserchClick = () => {
        props.onserch(intext);
    }

    const onInfoClick = (e) => {
        props.onSeletIndex(e.target.name);
    }

    return (
        <>
            <div className='seleteBox'>
                <input type="text" onChange={ontextHandle} placeholder='ex)kor'/>
                <button onClick={onserchClick}>검색</button>
            </div>
            <div className='nationalList' >
                {
                    data ?
                        (data.status == 404) ?
                            <h1>"검색결과가 없습니다."</h1> :
                            data.map((item, i) => {
                                return (
                                    <div className="listBox" key={i}>
                                    <Link to="/natinfo" onClick={onInfoClick} >
                                    <img src={item.flags.svg} alt={item.flags.alt} name={i} />
                                    </Link>
                                        <ul className='listInfo'>
                                            {item.name.common}
                                            <li>{item.translations.kor.common}</li>
                                            <li>Population : {item.population}</li>
                                            <li>Region : {item.continents}</li>
                                            <li>Capital : {item.capital}</li>
                                        </ul>
                                    </div>
                                    
                                )
                            })
                        : null
                }
            </div>
        </>
    )
}
