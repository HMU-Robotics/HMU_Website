import "./hero.css"


function Hero(){
    return(
            <div className="video-wrapper">
                    <video autoPlay={true} muted={true} loop>
                        <source src="/Media/teaser.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>

                    <div className="hero-header">
                        <h1 className='hero-title'>HMU Robotics Club</h1>
                        <div className='hero-box'>
                            <h3 className='hero-box-title'>Lorem ipsom</h3>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                            <div className='btn-holder'>
                                <button className='hero-btn'>Projects</button>
                                <button className='hero-btn'>About us</button>
                            <div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Hero