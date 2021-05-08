
import './Brewery.css'
const Brewery = (props) => {


    const allHours = props.hours;
    const listHours = allHours.map((hour) => <li key={hour}>{hour}</li>);
    console.log('allhours:', listHours)

    return (
        <div className="brewery-container">
            <div className="brewery-row">
                <div className="brewery">
                    <h1>{props.name}</h1>
                </div>
                <div className="brewery-data">
                    <p className="brewery-phoneNumber">{props.phoneNumber}</p>
                    <p className="brewery-address">{props.address}</p>
                    {/* <div id="brewery-hours">hours
                        <ul className="hours-popup">
                            {listHours}
                        </ul>
                    </div> */}
                    <p className="social-media-icons">
                        <a href="#" className="fa fa-facebook"></a>
                        <a href={props.instagram} className="fa fa-instagram"></a>
                    </p>

                    {/* <p>{breweryClosed ? Open : Closed}</p> */}
                </div>
            </div>

        </div >
    )
}

export default Brewery