import React from 'react'
import logo1 from './logo-1.svg'
import logo2 from './logo-2.svg'
import logo3 from './logo-3.svg'
import logo4 from './logo-4.svg'
import logo5 from './logo-5.svg'
import logo6 from './logo-6.svg'
import logo7 from './logo-7.svg'
import logo8 from './logo-8.svg'
import logo9 from './logo-9.svg'

const Brands = (props) => {
    return (
        <div className="uk-section uk-padding-remove-vertical uk-position-relative" style={{ background: '#ffffff' }}>
            <div className="uk-container uk-container-large" >
                <div className="uk-padding-large" style={{ background: '#f0f0f0' }}>
                    

                    <div className="uk-grid uk-child-width-1-4 uk-child-width-expand@m logos-grid" data-uk-grid data-uk-scrollspy="cls: uk-animation-scale-down; target: > div > img; delay: 100">
					<div>
						<img src={logo1} data-src={logo1} data-uk-img alt="Image" />
					</div>
					<div>
                    <img src={logo2} data-src={logo2} data-uk-img alt="Image" />
					</div>
					<div>
                    <img src={logo3} data-src={logo3} data-uk-img alt="Image" />
					</div>
					<div>
                    <img src={logo4} data-src={logo4} data-uk-img alt="Image" />
					</div>
					<div>
                    <img src={logo5} data-src={logo5} data-uk-img alt="Image" />
					</div>
					<div>
                    <img src={logo6} data-src={logo6} data-uk-img alt="Image" />
					</div>
					<div>
                    <img src={logo7} data-src={logo7} data-uk-img alt="Image" />
					</div>
					<div>
                    <img src={logo8} data-src={logo8} data-uk-img alt="Image" />
					</div>
</div>
                </div>
            </div>
        </div>
    )
}

export default Brands