import _ from 'lodash';
import React, { useState, useEffect } from 'react'
import Network from '../network/index';
import '../Styles/Demographics.css';

const { Paths, API } = Network;

function Demographics(props) {
    const [options,setOptions] =  useState([]);
    const [value, selectValue] = useState([]);
    const [error, setError] = useState('');
    const [optionsWithAge, setOptionsWithAge] = useState([]);

    const fetchDropdownOptions = async () => {
        const getItemsUrl = Paths.getItems();
        try {
            const {data} = await API.get(getItemsUrl);
            setOptions(data);
            setError('');
        } catch(error) {
            setError('something went wrong while fetching age data')
        }
    }

    const getAgeWithSelection = async (item) => {
        const itemLookupPathUrl = Paths.getItemLookupPath();
        try {
            const  { data } = await API.post(itemLookupPathUrl, { item });
            let ageWithCount = [];
            for(let age in data){
                let count = data[age];
                ageWithCount.push({ age, count});
            }
            setOptionsWithAge(ageWithCount);
            setError('');
        } catch(error) {
            setError('something went wrong')
        }
    }

    useEffect(() => {
        fetchDropdownOptions();
    }, []);

    const handleOptionsChange = (event) => {
        const { value } = event.target;

        getAgeWithSelection(value);
        selectValue(value);
    }
    return (
        <div className="container">
            <div className="headerContainer">
                <div className="title">All Demographic of users with</div>
                <select className="dropDown" value={value} onChange={handleOptionsChange}>
                    { options.map(item => {
                        return <option value={item} key={item}>{item}</option>
                    })}
                </select>
            </div>
            { optionsWithAge.length > 0 &&  (<div className="bodyContainer">
                <div className="tHeader">
                    <div className="tCol tTitle">Age</div>
                    <div className="tCol tTitle">Count</div>
                </div>
                {
                    optionsWithAge.map(item => {
                        return (
                            <div className="tBody">
                                <div className="tCol tbTitle">{item.age}</div>
                                <div className="tCol tbTitle">{item.count}</div>
                            </div>
                        )
                    })
                }
            </div>) }
            {
                !_.isEmpty(error) && <div className="error">{error}</div>
            }
        </div>
    )
}

export default Demographics
