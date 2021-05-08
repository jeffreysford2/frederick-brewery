
import './Brewery.css'
const Brewery = (props) => {
    console.log('props', props.name)


    return (
        <div className="brewery-container">
            <div className="brewery-row">
                <div className="brewery">
                    <h1>{props.name}</h1>
                </div>
                <div className="brewery-data">
                    <p className="brewery-phoneNumber">{props.phoneNumber}</p>
                    <p className="brewery-address">{props.address}</p>
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