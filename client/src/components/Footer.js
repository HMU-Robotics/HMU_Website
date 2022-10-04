import "./Footer.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Map from "./Map";
import Icons from "./Icons"

function Footer(){
    return(
        <div className="main-footer">
            <Container>
                <div className="row">
                    {/* column 1 nav*/}
                    <div className="col-md-3 col-sm-6">
                        <h4>Navigation</h4>
                        <ul className="list-unstyled navigation">
                            <li><Nav.Link href="/">Home</Nav.Link></li>
                            <li><Nav.Link href="/Gallery">Gallery</Nav.Link></li>
                            <li><Nav.Link href="/Members">Members</Nav.Link></li>
                            <li><Nav.Link href="/Projects">Projects</Nav.Link></li>
                        </ul>
                    </div>
                        {/* column 2 Contact */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Contact Info</h4>
                        <ul className="list-unstyled">
                            <li>
                                <Icons img={"/Logos/CSRL_Logo.png"} title={"CSRL"} link={"https://csrl.hmu.gr/"}/>
                                <Icons img={"/Logos/HMULogo.png"} title={"HMU"} link={"https://hmu.gr//"}/>
                            </li>
                            <br/>
                            <li>📧 roboticsclub@hmu.gr</li>
                        </ul>
                    </div>
                        {/* column 3 Social media */}
                        <div className="col-md-3 col-sm-6">
                        <h4>Social Media</h4>
                        <ul className="list-unstyled">
                            <li className="social">
                                <Icons img={"/social/facebook.png"} title={"facebook"} link={"https://www.facebook.com/profile.php?id=100075598827639"}/>
                                <Icons img={"/social/instagram.png"} title={"instagram"} link={"https://www.instagram.com/hmuroboticsclub/"}/>
                                <Icons img={"/social/linkedin.png"} title={"linkedin"} link={"https://www.linkedin.com/in/robotics-club-330165227/"}/>
                                <Icons img={"/social/youtube.png"} title={"youtube"} link={"https://www.youtube.com/channel/UChI8Sm95Zt7CYUcYc63ac-w"}/>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Map</h4>
                        <ul className="list-unstyled">
                            <Map />
                        </ul>
                    </div>
                </div>
                <hr/>
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} HMU Robotics Club - All Rights Reserved
                    </p>
                </div>
            </Container>
        </div>
    )
}

export default Footer