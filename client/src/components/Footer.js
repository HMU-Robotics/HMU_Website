import "./Footer.css"

function Footer(){
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* column 1 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Title</h4>
                        <ul className="list-unstyled">
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                        </ul>
                    </div>
                        {/* column 2 */}
                        <div className="col-md-3 col-sm-6">
                        <h4>Title</h4>
                        <ul className="list-unstyled">
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                        </ul>
                    </div>
                        {/* column 3 */}
                        <div className="col-md-3 col-sm-6">
                        <h4>Title</h4>
                        <ul className="list-unstyled">
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                        </ul>
                    </div>
                        {/* column 4 */}
                        <div className="col-md-3 col-sm-6">
                        <h4>Title</h4>
                        <ul className="list-unstyled">
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} HMU Robotics Club - All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer