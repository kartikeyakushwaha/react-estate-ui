import SearchBar from '../components/searchBar/searchBar'
import './homePage.scss'

function HomePage(){
    return (
        <div className='homePage'>

                <div className="textContainer">
                    <div className="wrapper">
                        <h1 className='title'>Find Real Estate & 
                            Get Your Dream Place.
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
                                 molestiae cumque impedit 
                                laboriosam est, cupiditate ex
                                 tenetur molestias amet asperiores expedita quo! Accusantium veritatis consequuntur rem? Doloremque a quis ducimus!
                            </p>
                            <SearchBar/>
                            <div className="boxes">
                                <div className="box">
                                    <h1>16+</h1>
                                    <h2>Years of Experience</h2>
                                </div>
                            </div>
                            <div className="boxes">
                                <div className="box">
                                    <h1>200</h1>
                                    <h2>Award Gained</h2>
                                </div>
                            </div>
                            <div className="boxes">
                                <div className="box">
                                    <h1>1200+</h1>
                                    <h2>Property Ready</h2>
                                </div>
                            </div>
                        </div>
                        </div>
                <div className="imgContainer">
                    <img src="/bg.png" alt=""/>
                </div>
        </div>
    )
}

export default HomePage