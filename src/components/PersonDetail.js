import React from 'react';
import Chart from 'react-google-charts';
import MapContainer from './Map';


function PersonDetail(props) {
    let moreInfoPerson =
        props.list.find(user => user.login.uuid === props.match.params.id)

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
                        ['Lunes', 5],
                        ['Martes', 7],
                        ['Miércoles', 8],
                        ['Jueves', 5],
                        ['Viernes', 6],
                        ['Sábado', 10],
                        ['Domingo', 8],
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