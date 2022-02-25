import React from 'react'
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (

    <div className="container">
        <div className="row">
            <div className="col-md-3 col-sm-6 col-xsx-6">
                <div className="serviceBox">
                    <div className="service-icon">
                        <span><i className="fa fa-id-card-o"></i></span>
                    </div>
                    <div className="service-content">
                        <Link to='/quiz/apsc'><h3 className="title" >Andhra Pradesh Public Service Commission</h3></Link>
                        <p className="description">We design beautifull responsive websites that works on every device. </p>
                        <a href="WebDesigning.html" className="read-more fa fa-plus" data-toggle="tooltip" title="Read More"></a>
                    </div>
                </div>
            </div>
    
            <div className="col-md-3 col-sm-6 col-xsx-6">
                <div className="serviceBox green">
                    <div className="service-icon">
                        <span><i className="fa fa-desktop"></i></span>
                    </div>
                    <div className="service-content">
                        <Link to='/quiz/appsc'><h3 className="title">Arunachal Pradesh Public Service Commission</h3></Link>
                        <p className="description">We develop web app with modern technologies to ensure secure webiste. </p>
                        <a href="WebDevelopment.html" className="read-more fa fa-plus" data-toggle="tooltip" title="Read More"></a>
                    </div>
                </div>
            </div>

            <div className="col-md-3 col-sm-6 col-xsx-6">
                <div className="serviceBox orange">
                    <div className="service-icon">
                        <span><i className="fa fa-tablet"></i></span>
                    </div>
                    <div className="service-content">
                        <Link to='/quiz/assampsc'><h3 className="title">Assam Public Service Commission</h3></Link>
                        <p className="description">We develop customised Invoice / Billing Softwares as per client requirements.</p>
                        <a href="MobileAppDevelopment.html" className="read-more fa fa-plus" data-toggle="tooltip" title="Read More"></a>
                    </div>
                </div>
            </div>

            <div className="col-md-3 col-sm-6 col-xsx-6">
                <div className="serviceBox blue">
                    <div className="service-icon">
                        <span><i className="fa fa-shopping-cart"></i></span>
                    </div>
                    <div className="service-content">
                        <Link to='/quiz/bpsc'><h3 className="title">Bihar Public Service Commission</h3></Link>
                        <p className="description">Our powerful ecommerce software gives you all the features you need to build an online store</p>
                        <a href="ECommarce.html" className="read-more fa fa-plus" data-toggle="tooltip" title="Read More"></a>
                    </div>
                </div>
            </div>

            <div className="col-md-3 col-sm-6 col-xsx-6">
                <div className="serviceBox">
                    <div className="service-icon">
                        <span><i className="fa fa-id-card-o"></i></span>
                    </div>
                    <div className="service-content">
                        <Link to='/quiz/cgpsc'><h3 className="title">Chhattisgarh Public Service Commission</h3></Link>
                        <p className="description">We design beautifull responsive websites that works on every device. </p>
                        <a href="WebDesigning.html" className="read-more fa fa-plus" data-toggle="tooltip" title="Read More"></a>
                    </div>
                </div>
            </div>
    
            <div className="col-md-3 col-sm-6 col-xsx-6">
                <div className="serviceBox green">
                    <div className="service-icon">
                        <span><i className="fa fa-desktop"></i></span>
                    </div>
                    <div className="service-content">
                        <Link to='/quiz/gpsc'><h3 className="title">Goa Public Service Commission</h3></Link>
                        <p className="description">We develop web app with modern technologies to ensure secure webiste. </p>
                        <a href="WebDevelopment.html" className="read-more fa fa-plus" data-toggle="tooltip" title="Read More"></a>
                    </div>
                </div>
            </div>

            <div className="col-md-3 col-sm-6 col-xsx-6">
                <div className="serviceBox orange">
                    <div className="service-icon">
                        <span><i className="fa fa-tablet"></i></span>
                    </div>
                    <div className="service-content">
                        <Link to='/quiz/gujaratpsc'><h3 className="title">Gujarat Public Service Commission</h3></Link>
                        <p className="description">We develop customised Invoice / Billing Softwares as per client requirements.</p>
                        <a href="MobileAppDevelopment.html" className="read-more fa fa-plus" data-toggle="tooltip" title="Read More"></a>
                    </div>
                </div>
            </div>

            <div className="col-md-3 col-sm-6 col-xsx-6">
                <div className="serviceBox blue">
                    <div className="service-icon">
                        <span><i className="fa fa-shopping-cart"></i></span>
                    </div>
                    <div className="service-content">
                        <Link to='/quiz/hpsc'><h3 className="title">Haryana Public Service Commission</h3></Link>
                        <p className="description">Our powerful ecommerce software gives you all the features you need to build an online store</p>
                        <a href="ECommarce.html" className="read-more fa fa-plus" data-toggle="tooltip" title="Read More"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage