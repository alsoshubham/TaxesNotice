import React from "react";

const TermsOfServices = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-10 px-6">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Terms of Services
                </h1>
                <p className="text-gray-600 mb-4">
                    Welcome to TaxesNotice! These Terms of Services ("Terms") govern your
                    use of our website and services. By accessing or using our services,
                    you agree to comply with these Terms. Please read them carefully.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
                    1. Services Overview
                </h2>
                <p className="text-gray-600 mb-4">
                    TaxesNotice is a legal consultancy and Chartered Accountancy (CA)
                    firm that provides tax advisory, compliance, and other related
                    services. Our services are intended for informational purposes only
                    and do not constitute legal or financial advice.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
                    2. User Responsibilities
                </h2>
                <p className="text-gray-600 mb-4">
                    You agree to use our services responsibly and in compliance with all
                    applicable laws and regulations. You are solely responsible for the
                    accuracy of the information you provide to us.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
                    3. Intellectual Property
                </h2>
                <p className="text-gray-600 mb-4">
                    All content on this website, including text, graphics, logos, and
                    software, is the property of TaxesNotice and is protected by
                    copyright laws. You may not reproduce, distribute, or use any content
                    without prior written consent.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
                    4. Limitation of Liability
                </h2>
                <p className="text-gray-600 mb-4">
                    TaxesNotice shall not be held liable for any direct, indirect,
                    incidental, or consequential damages arising from your use of our
                    services. Our liability is limited to the maximum extent permitted by
                    law.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
                    5. Changes to Terms
                </h2>
                <p className="text-gray-600 mb-4">
                    We reserve the right to update or modify these Terms at any time
                    without prior notice. Your continued use of our services constitutes
                    acceptance of the revised Terms.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
                    6. Contact Us
                </h2>
                <p className="text-gray-600 mb-4">
                    If you have any questions or concerns about these Terms, please
                    contact us at{" "}
                    <a
                        href="mailto:support@taxesnotice.com"
                        className="text-blue-600 underline"
                    >
                        support@taxesnotice.com
                    </a>
                    .
                </p>

                <p className="text-gray-600 mt-6">
                    By using our services, you acknowledge that you have read, understood,
                    and agreed to these Terms of Services.
                </p>
            </div>
        </div>
    );
};

export default TermsOfServices;