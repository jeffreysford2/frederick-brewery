
import './Brewery.css'
const Brewery = (props) => {

    const isOpen = () => {
        if (props.open_now) {
            return props.open_now.open_now
        }
        return null
    }

    return (
        <div className="brewery-container">
            <div className="brewery-row">
                <div className="brewery">
                    <h1>{props.name}</h1>
                </div>
                <div className="brewery-data">
                    {/* <p className="brewery-phoneNumber">{props.phoneNumber}</p> */}
                    <p className="brewery-address">{props.address}</p>
                    <p className="brewery-rating">{props.rating}</p>

                    {isOpen() === true ? (
                        <p className="brewery-open">open</p>
                    ) : (
                        <p className="brewery-closed">closed</p>
                    )}

                    <a href={props.website} className="brewery-website">Visit website</a>
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