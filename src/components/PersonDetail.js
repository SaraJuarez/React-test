import React, { useState, useEffect } from 'react';
import Chart from 'react-google-charts';
import MapContainer from './Map';


function PersonDetail(props) {

    let moreInfoPerson =
        props.list.find(user => user.login.uuid === props.match.params.id)

    if (moreInfoPerson === undefined) {
        let getInfoUser = localStorage.getItem('person')
        let getInfoUserObject = JSON.parse(getInfoUser)
        moreInfoPerson = getInfoUserObject;
    }
    else if (moreInfoPerson != undefined) {
        localStorage.setItem('person', JSON.stringify(moreInfoPerson))
    }





    console.log(moreInfoPerson)

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    return (

        <div className='person-detail'>
            <div className='person-detail__person-info'>
                <div className='person-detail__person-info--image'>
                    <img src={moreInfoPerson.picture.medium}></img>
                </div>
                <div className='person-detail__person-info--text'>
                    <p>{moreInfoPerson.name.first}</p>
                    <p>{moreInfoPerson.location.city}</p>
                    <p>{moreInfoPerson.dob.age}</p>
                </div>
            </div>
            <div className='person-detail__graphics'>
                <div><Chart
                    width={800}
                    height={500}
                    chartType="ColumnChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Día', 'Horas de sueño'],
                        ['Lunes', getRandomInt(1, 15)],
                        ['Martes', getRandomInt(1, 15)],
                        ['Miércoles', getRandomInt(1, 15)],
                        ['Jueves', getRandomInt(1, 15)],
                        ['Viernes', getRandomInt(1, 15)],
                        ['Sábado', getRandomInt(1, 15)],
                        ['Domingo', getRandomInt(1, 15)],
                    ]}
                    options={{
                        title: 'Horas de sueño a la semana',
                        chartArea: { width: '30%' },
                        hAxis: {
                            title: 'Días de la semana',
                            minValue: 0,
                        },
                        vAxis: {
                            title: 'Horas de sueño',
                        },
                    }}
                    legendToggle
                /></div>
                {/* <MapContainer /> */}
                <Chart
                    width={800}
                    height={500}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Lugar', 'Horas al día'],
                        ['Trabajo', 8],
                        ['Casa', 12],
                        ['Iglesia', 2],
                        ['Tiendas', 2],

                    ]}
                    options={{
                        title: 'Lugares frecuentados',
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />

            </div>
        </div >
    )
}


export default PersonDetail;