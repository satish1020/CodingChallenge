import React, { useState, useEffect } from 'react'
import Network from '../network/index';

const { Paths, API } = Network;

function Demographics(props) {
    const [options,setOptions] =  useState([]);
    const [value, selectValue] = useState([]);
    const [optionsWithAge, setOptionsWithAge] = useState([]);

    const fetchDropdownOptions = async () => {
        const getItemsUrl = Paths.getItems();
        try {
            const {data} = await API.get(getItemsUrl);
            console.log('===> options', data);
            setOptions(data);
        } catch(error) {
            console.log('error while getting all items for dropdown', error);
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
        } catch(error) {
            console.log('error while getting all item value on selection of dropdown ', error);
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
        <div>
            All Demographcis with users Age
            <select value={value} onChange={handleOptionsChange}>
                { options.map(item => {
                    return <option value={item} key={item}>{item}</option>
                })}
            </select>
            {
                optionsWithAge.map(item => {
                    return <div>{`${item.age} ---- ${item.count}`}</div>
                })
            }
        </div>
    )
}

export default Demographics
