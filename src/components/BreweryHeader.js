import Brewery from './Brewery.css'

const BreweryHeader = (props) => {

    const handleClickNameDesc = (e) => {
        e.preventDefault()
        console.log('clicked')
        props.setSort(['name', 'desc'])
    }
    const handleClickNameAsc = (e) => {
        e.preventDefault()
        console.log('clicked')
        props.setSort(['name', 'asc'])
    }
    const handleClickOpen = (e) => {
        e.preventDefault()
        console.log('clicked open')
        props.setSort(['breweryOpen', 'desc'])
    }
    const handleClickRating = (e) => {
        e.preventDefault()
        console.log('clicked')
        props.setSort(['rating', 'desc'])
    }


    return (
        <div className="brewery-container" id="header">
            <div className="brewery-row">
                <div className="brewery">
                    <button onClick={handleClickNameDesc}>&uarr;</button>
                    <button onClick={handleClickNameAsc}>&darr;</button>
                </div>
                <div className="brewery-data">
                    {/* <p className="brewery-phoneNumber">{props.phoneNumber}</p> */}
                    <div className="brewery-open">
                        <button onClick={handleClickOpen}>&darr;</button>
                    </div>
                    <div className="brewery-rating">
                        <button onClick={handleClickRating}>&darr;</button>
                    </div>

                    {/* <div className="brewery-rating">
                        <button onClick={handleClickRating}>&darr;</button>
                    </div> */}

                    <p className="brewery-address"></p>
                    {/* <p className="brewery-website"></p> */}
                    <p className="social-media-icons"></p>

                    {/* <p>{breweryClosed ? Open : Closed}</p> */}
                </div>
            </div>

        </div >
    )
}

export default BreweryHeader