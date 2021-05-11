import Brewery from './Brewery.css'

const BreweryHeader = () => {

    return (
        <div className="brewery-header-container">
            <div className="brewery-header-row">
                <div className="brewery">
                    <h1>Brewery</h1>
                </div>
                <div className="brewery-data">
                    {/* <p className="brewery-phoneNumber">{props.phoneNumber}</p> */}

                    <p className="brewery-status">Status</p>
                    <p className="brewery-rating">Rating</p>
                    <p className="brewery-address">Address</p>
                    <p className="brewery-website">Website</p>
                    <p className="social-media-icons">
                        Social Media
                    </p>

                    {/* <p>{breweryClosed ? Open : Closed}</p> */}
                </div>
            </div>

        </div >
    )
}

export default BreweryHeader