
import './Brewery.css'
const Brewery = (props) => {

    const isOpen = () => {
        if (props.open_now) {
            return props.open_now.open_now
        }
        return null
    }

    console.log(props.places_id)

    return (
        <div className="brewery-container">
            <div className="brewery-row">
                <div className="brewery">
                    <h1>{props.name}</h1>
                </div>
                <div className="brewery-data">
                    {/* <p className="brewery-phoneNumber">{props.phoneNumber}</p> */}
                    {isOpen() === true ? (
                        <p className="brewery-open">open</p>
                    ) : (
                        <p className="brewery-closed">closed</p>
                    )}
                    <p className="brewery-rating">{props.rating}/5.0</p>
                    <p className="brewery-address">{props.address}</p>
                    <a href={props.website} className="brewery-website">Visit website</a>
                    <p className="social-media-icons">
                        {props.facebook !== undefined ? (
                            <a href={props.facebook} target="_blank" rel="noreferrer" className="fa fa-facebook"></a>
                        ) : (
                            <a></a>
                        )}
                        {props.instagram !== undefined ? (
                            <a href={props.instagram} target="_blank" rel="noreferrer" className="fa fa-instagram"></a>
                        ) : (
                            <a></a>
                        )}
                    </p>
                </div>
            </div>

        </div >
    )
}

export default Brewery