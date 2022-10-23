import "./hero.css"


function Hero(){
    return(
            <div className="video-wrapper">
                    <video autoPlay={true} muted={true} loop>
                        <source src="/Media/Site_teliko.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>

                    <div className="hero-header">
                        <h1 className='hero-title'>Hellenic Mediterranean University Robotics Club</h1>
                        <h3>Be Curious, Be Creative, Be developed</h3>

                    </div>
                </div>
    )
}

export default Hero