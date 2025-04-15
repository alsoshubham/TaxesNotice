import React from 'react';
import './ServiceCard.css'; // Optional: Add styles in a separate CSS file

const ServiceCard = ({ title, description, icon }) => {
    return (
        <div className="service-card">
            <div className="service-card-icon">
                {icon}
            </div>
            <div className="service-card-content">
                <h3 className="service-card-title">{title}</h3>
                <p className="service-card-description">{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;