import React from 'react';
import Card from './Card';

function PeopleList(props) {

    let results = props.list;
    const listHtml = results
        .filter(result => {
            if (props.citySelected.length === 0) {
                return true;
            } else {
                return props.citySelected.includes(result.location.city)
            }
        })
        .filter(result => { return props.sexSelected.length === 0 ? true : props.sexSelected.includes(result.gender) })
        .map((result, index) =>
            <Card info={result} key={index} />
        )



    return (
        <div className='App__list'>
            {listHtml}
        </div>

    )

}

export default PeopleList;
