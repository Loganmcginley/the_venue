import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50435.90646911897!2d-122.30771842084762!3d37.80774977975336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f80ae1f78a943%3A0x74d0084829b8e8c1!2s1743%20San%20Pablo%20Ave%2C%20Oakland%2C%20CA%2094612!5e0!3m2!1sen!2sus!4v1576179543890!5m2!1sen!2sus" width="100%" height="500px" frameBorder="0" allowFullScreen=""></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>


        </div>
    );
};

export default Location;