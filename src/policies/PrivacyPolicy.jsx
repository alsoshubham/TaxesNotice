import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="container mx-auto px-4 py-8 bg-gray-50 text-gray-800">
            <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">Privacy Policy</h1>
            <p className="text-lg mb-6">
                Your privacy is important to us. This privacy policy explains how we collect, use, and protect your information.
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-blue-500">Information We Collect</h2>
            <p className="text-base mb-6">
                We may collect personal information such as your name, email address, and other details you provide to us.
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-blue-500">How We Use Your Information</h2>
            <p className="text-base mb-6">
                We use your information to provide and improve our services, communicate with you, and ensure compliance with legal obligations.
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-blue-500">Data Protection</h2>
            <p className="text-base mb-6">
                We implement appropriate security measures to protect your data from unauthorized access, alteration, or disclosure.
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-blue-500">Your Rights</h2>
            <p className="text-base mb-6">
                You have the right to access, update, or delete your personal information. Contact us if you have any concerns.
            </p>
            <p className="text-base">
                By using our services, you agree to this privacy policy. We may update it periodically, so please review it regularly.
            </p>
        </div>
    );
};

export default PrivacyPolicy;
