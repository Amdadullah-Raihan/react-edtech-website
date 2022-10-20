import React from 'react';
import './Explore.css'
import img from '../../images/working.png'


const Explore = () => {
    return (
        <div className='explore-container'>
            <div className="explore-img">
                <img id='img' src={img} alt="" />
            </div>
            <div className="explore-text">
                <h1>Explore the learning Institute</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure.

               </p>
              <p> Anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined.</p>
              <div className='no-container'>
                    <div className="individual-no">
                        <h2>3.2K+</h2>
                        <p>Online Courses</p>
                    </div>
                    <div className="individual-no">
                        <h2>600+</h2>
                        <p>Expert Members</p>
                    </div>
                    <div className="individual-no">
                        <h2>1K+</h2>
                        <p>
                            Ratings and Reviews
                        </p>
                    </div>

              </div>
              <button className='btn-primary'>Read More</button>
            </div>
        </div>
    );
};

export default Explore;