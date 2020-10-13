import React from 'react';
import { CLink } from '@coreui/react';

import '../../../scss/home/styles.scss';
import 'swiper/swiper.scss';
import 'font-awesome/css/font-awesome.min.css';

// Assets
import logo from '../../../assets/images/logo.svg';
import headerTeamwork from '../../../assets/images/header-teamwork.svg';
import customerLogo1 from '../../../assets/images/customer-logo-1.png';
import customerLogo2 from '../../../assets/images/customer-logo-2.png';
import customerLogo3 from '../../../assets/images/customer-logo-3.png';
import customerLogo4 from '../../../assets/images/customer-logo-4.png';
import customerLogo5 from '../../../assets/images/customer-logo-5.png';
import customerLogo6 from '../../../assets/images/customer-logo-6.png';

import servicesIcon1 from '../../../assets/images/services-icon-1.svg';
import servicesIcon2 from '../../../assets/images/services-icon-2.svg';
import servicesIcon3 from '../../../assets/images/services-icon-3.svg';

import detailsOfficeWorker from '../../../assets/images/details-1-office-worker.svg';
import details2OfficeTeamWork from '../../../assets/images/details-2-office-team-work.svg';

import detailsLightbox2 from '../../../assets/images/details-lightbox-2.svg';

import testimonial2MenTalking from '../../../assets/images/testimonials-2-men-talking.svg';
import testimonial1 from '../../../assets/images/testimonial-1.svg';
import testimonial2 from '../../../assets/images/testimonial-2.svg';
import testimonial3 from '../../../assets/images/testimonial-3.svg';

export default () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">          
          
          <CLink className="navbar-brand logo-image" to="/"><img src={logo} alt="alternative" /></CLink>
                    
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-awesome fa fa-bars"></span>
              <span className="navbar-toggler-awesome fa fa-times"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link page-scroll" href="#header">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link page-scroll" href="#services">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link page-scroll" href="#pricing">Pricing</a>
                </li>
                <li className="nav-item">
                    <CLink className="nav-link page-scroll" to="#request">Request</CLink>
                </li>

                <li className="nav-item dropdown">
                    <CLink className="nav-link dropdown-toggle page-scroll" to="#about" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">About</CLink>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <CLink className="dropdown-item" to="/terms-conditions"><span className="item-text">Terms Conditions</span></a>
                        <div className="dropdown-items-divide-hr"></div>
                        <CLink className="dropdown-item" to="/privacy-policy"><span className="item-text">Privacy Policy</span></a>
                    </div>
                </li>                

                <li className="nav-item">
                    <CLink className="nav-link page-scroll" to="/login">Login</CLink>
                </li>
            </ul>
            <span className="nav-item social-icons">
                <span className="fa-stack">
                    <a href="#your-link">
                        <i className="fa fa-circle fa-stack-2x facebook"></i>
                        <i className="fa fa-facebook-f fa-stack-1x"></i>
                    </a>
                </span>
                <span className="fa-stack">
                    <a href="#your-link">
                        <i className="fa fa-circle fa-stack-2x twitter"></i>
                        <i className="fa fa-twitter fa-stack-1x"></i>
                    </a>
                </span>
            </span>
          </div>
      </nav>

      <header id="header" className="header">
          <div className="header-content">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-6">
                          <div className="text-container">
                              <h1><span className="turquoise">StartUp Landing</span> Page Template Free</h1>
                              <p className="p-large">Use Evolo free landing page template to promote your business startup and generate leads for the offered services</p>
                              <a className="btn-solid-lg page-scroll" href="#services">DISCOVER</a>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="image-container">
                              <img className="img-fluid" src={headerTeamwork} alt="alternative" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </header>

      <div className="slider-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h5>Trusted By</h5>
                    
                    <div className="slider-container">
                        <div className="swiper-container image-slider">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="image-container">
                                        <img className="img-responsive" src={customerLogo1} alt="alternative" />
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="image-container">
                                        <img className="img-responsive" src={customerLogo2} alt="alternative"/>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="image-container">
                                        <img className="img-responsive" src={customerLogo3} alt="alternative"/>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="image-container">
                                        <img className="img-responsive" src={customerLogo4} alt="alternative"/>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="image-container">
                                        <img className="img-responsive" src={customerLogo5} alt="alternative"/>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="image-container">
                                        <img className="img-responsive" src={customerLogo6} alt="alternative"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
      </div>

      <div id="services" className="cards-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2>Business Growth Services</h2>
                    <p className="p-heading p-large">We serve small and medium sized companies in all tech related industries with high quality growth services which are presented below</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <img className="card-image" src={servicesIcon1} alt="alternative" />
                        <div className="card-body">
                            <h4 className="card-title">Market Analysis</h4>
                            <p>Our team of enthusiastic marketers will analyse and evaluate how your company stacks against the closest competitors</p>
                        </div>
                    </div>
                    
                    <div className="card">
                        <img className="card-image" src={servicesIcon2} alt="alternative" />
                        <div className="card-body">
                            <h4 className="card-title">Opportunity Scan</h4>
                            <p>Once the market analysis process is completed our staff will search for opportunities that are in reach</p>
                        </div>
                    </div>
                    
                    <div className="card">
                        <img className="card-image" src={servicesIcon3} alt="alternative" />
                        <div className="card-body">
                            <h4 className="card-title">Action Plan</h4>
                            <p>With all the information in place you will be presented with an action plan that your company needs to follow</p>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
      </div>

      <div className="basic-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="text-container">
                        <h2>Design And Plan Your Business Growth Steps</h2>
                        <p>Use our staff and our expertise to design and plan your business growth strategy. Evolo team is eager to advise you on the best opportunities that you should look into</p>
                        <a className="btn-solid-reg popup-with-move-anim" href="#details-lightbox-1">LIGHTBOX</a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="image-container">
                        <img className="img-fluid" src={detailsOfficeWorker} alt="alternative" />
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="basic-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="image-container">
                        <img className="img-fluid" src={details2OfficeTeamWork} alt="alternative" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="text-container">
                        <h2>Search For Optimization Wherever Is Possible</h2>
                        <ul className="list-unstyled li-space-lg">
                            <li className="media">
                                <i className="fa fa-check"></i>
                                <div className="media-body">Basically we'll teach you step by step what you need to do</div>
                            </li>
                            <li className="media">
                                <i className="fa fa-check"></i>
                                <div className="media-body">In order to develop your company and reach new heights</div>
                            </li>
                            <li className="media">
                                <i className="fa fa-check"></i>
                                <div className="media-body">Everyone will be pleased from stakeholders to employees</div>
                            </li>
                        </ul>
                        <a className="btn-solid-reg popup-with-move-anim" href="#details-lightbox-2">LIGHTBOX</a>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div id="details-lightbox-2" className="lightbox-basic zoom-anim-dialog mfp-hide">
        <div className="container">
            <div className="row">
                <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
                <div className="col-lg-8">
                    <div className="image-container">
                        <img className="img-fluid" src={detailsLightbox2} alt="alternative" />
                    </div>
                </div>
                <div className="col-lg-4">
                    <h3>Search To Optimize</h3>
                    <hr />
                    <h5>Core feature</h5>
                    <p>The emailing module basically will speed up your email marketing operations while offering more subscriber control.</p>
                    <p>Do you need to build lists for your email campaigns? It just got easier with Evolo.</p>
                    <ul className="list-unstyled li-space-lg">
                        <li className="media">
                            <i className="fa fa-check"></i><div className="media-body">List building framework</div>
                        </li>
                        <li className="media">
                            <i className="fa fa-check"></i><div className="media-body">Easy database browsing</div>
                        </li>
                        <li className="media">
                            <i className="fa fa-check"></i><div className="media-body">User administration</div>
                        </li>
                        <li className="media">
                            <i className="fa fa-check"></i><div className="media-body">Automate user signup</div>
                        </li>
                        <li className="media">
                            <i className="fa fa-check"></i><div className="media-body">Quick formatting tools</div>
                        </li>
                        <li className="media">
                            <i className="fa fa-check"></i><div className="media-body">Fast email checking</div>
                        </li>
                    </ul>
                    <a className="btn-solid-reg mfp-close page-scroll" href="#request">REQUEST</a> <a className="btn-outline-reg mfp-close as-button" href="#screenshots">BACK</a>
                </div>
            </div>
        </div>
      </div>

      <div id="pricing" className="cards-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2>Multiple Pricing Options</h2>
                    <p className="p-heading p-large">We've prepared pricing plans for all budgets so you can get started right away. They're great for small companies and large organizations</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">STARTER</div>
                            <div className="card-subtitle">Just to see what can be achieved</div>
                            <hr className="cell-divide-hr" />
                            <div className="price">
                                <span className="currency">$</span><span className="value">199</span>
                                <div className="frequency">monthly</div>
                            </div>
                            <hr className="cell-divide-hr" />
                            <ul className="list-unstyled li-space-lg">
                                <li className="media">
                                    <i className="fa fa-check"></i><div className="media-body">Improve Your Email Marketing</div>
                                </li>
                                <li className="media">
                                    <i className="fa fa-check"></i><div className="media-body">User And Admin Rights Control</div>
                                </li>
                                <li className="media">
                                    <i className="fa fa-times"></i><div className="media-body">List Building And Cleaning</div>
                                </li>
                                <li className="media">
                                    <i className="fa fa-times"></i><div className="media-body">Collected Data Management</div>
                                </li>
                                <li className="media">
                                    <i className="fa fa-times"></i><div className="media-body">More Planning And Evaluation</div>
                                </li>
                            </ul>
                            <div className="button-wrapper">
                                <a className="btn-solid-reg page-scroll" href="#request">REQUEST</a>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">MEDIUM</div>
                            <div className="card-subtitle">Very appropriate for the short term</div>
                            <hr className="cell-divide-hr" />
                            <div className="price">
                                <span className="currency">$</span><span className="value">299</span>
                                <div className="frequency">monthly</div>
                            </div>
                            <hr className="cell-divide-hr" />
                            <ul className="list-unstyled li-space-lg">
                                <li className="media">
                                    <i className="fa fa-check"></i><div className="media-body">Improve Your Email Marketing</div>
                                </li>
                                <li className="media">
                                    <i className="fa fa-check"></i><div className="media-body">User And Admin Rights Control</div>
                                </li>
                                <li className="media">
                                    <i className="fa fa-check"></i><div className="media-body">List Building And Cleaning</div>
                                </li>
                                <li className="media">
                                    <i className="fa fa-check"></i><div className="media-body">Collected Data Management</div>
                                </li>
                                <li className="media">
                                    <i className="fa fa-times"></i><div className="media-body">More Planning And Evaluation</div>
                                </li>
                            </ul>
                            <div className="button-wrapper">
                                <a className="btn-solid-reg page-scroll" href="#request">REQUEST</a>
                            </div>
                        </div>
                    </div> 

                    <div className="card">
                        <div className="label">
                            <p className="best-value">Best Value</p>
                        </div>
                        <div className="card-body">
                            <div className="card-title">COMPLETE</div>
                            <div className="card-subtitle">Must have for large companies</div>
                            <hr className="cell-divide-hr" />
                            <div className="price">
                                <span className="currency">$</span><span className="value">399</span>
                                <div className="frequency">monthly</div>
                            </div>
                            <hr className="cell-divide-hr" />
                            <ul className="list-unstyled li-space-lg">
                                <li className="media">
                                    <i className="fa fa-check"></i><div className="media-body">Improve Your Email Marketing</div>
                                </li>
                                <li className="media">
                                    <i className="fa fa-check"></i><div className="media-body">User And Admin Rights Control</div>
                                </li>
                                <li className="media">
                                    <i className="fa fa-check"></i><div className="media-body">List Building And Cleaning</div>
                                </li>
                                <li className="media">
                                    <i className="fa fa-check"></i><div className="media-body">Collected Data Management</div>
                                </li>
                                <li className="media">
                                    <i className="fa fa-check"></i><div className="media-body">More Planning And Evaluation</div>
                                </li>
                            </ul>
                            <div className="button-wrapper">
                                <a className="btn-solid-reg page-scroll" href="#request">REQUEST</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="slider-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="image-container">
                        <img className="img-fluid" src={testimonial2MenTalking} alt="alternative" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <h2>Testimonials</h2>
                    <div className="slider-container">
                        <div className="swiper-container card-slider">
                            <div className="swiper-wrapper">                                
                                <div className="swiper-slide">
                                    <div className="card">
                                        <img className="card-image" src={testimonial1} alt="alternative" />
                                        <div className="card-body">
                                            <p className="testimonial-text">I just finished my trial period and was so amazed with the support and results that I purchased Evolo right away at the special price.</p>
                                            <p className="testimonial-author">Jude Thorn - Designer</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="card">
                                        <img className="card-image" src={testimonial2} alt="alternative" />
                                        <div className="card-body">
                                            <p className="testimonial-text">Evolo has always helped or startup to position itself in the highly competitive market of mobile applications. You will not regret using it!</p>
                                            <p className="testimonial-author">Marsha Singer - Developer</p>
                                        </div>
                                    </div>        
                                </div>

                                <div className="swiper-slide">
                                    <div className="card">
                                        <img className="card-image" src={testimonial3} alt="alternative" />
                                        <div className="card-body">
                                            <p className="testimonial-text">Love their services and was so amazed with the support and results that I purchased Evolo for two years in a row. They are awesome.</p>
                                            <p className="testimonial-author">Roy Smith - Marketer</p>
                                        </div>
                                    </div>        
                                </div>                                   
                            </div>

                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="footer-col">
                        <h4>About Evolo</h4>
                        <p>We're passionate about offering some of the best business growth services for startups</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="footer-col middle">
                        <h4>Important Links</h4>
                        <ul className="list-unstyled li-space-lg">
                            <li className="media">
                                <i className="fa fa-square"></i>
                                <div className="media-body">Our business partners <a className="turquoise" href="#your-link">startupguide.com</a></div>
                            </li>
                            <li className="media">
                                <i className="fa fa-square"></i>
                                <div className="media-body">Read our <a className="turquoise" href="terms-conditions.html">Terms & Conditions</a>, <a className="turquoise" href="privacy-policy.html">Privacy Policy</a></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="footer-col last">
                        <h4>Social Media</h4>
                        <span className="fa-stack">
                            <a href="#your-link">
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <i className="fa fa-facebook-f fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="#your-link">
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <i className="fa fa-twitter fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="#your-link">
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <i className="fa fa-google-plus-g fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="#your-link">
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <i className="fa fa-instagram fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="#your-link">
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <i className="fa fa-linkedin-in fa-stack-1x"></i>
                            </a>
                        </span>
                    </div> 
                </div>
            </div>
        </div>
      </div>

      <div className="copyright">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <p className="p-small">Copyright © 2020 <CLink to="https://digimarket.com">Digimarket</CLink> - All rights reserved</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}