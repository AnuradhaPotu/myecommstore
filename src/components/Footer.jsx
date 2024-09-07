import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 py-8 px-4">
            <div className="container mx-auto text-center md:text-left">
                <div className="flex justify-center items-center  mb-4">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 mx-2"
                    >
                        <FontAwesomeIcon icon={faFacebook} size="lg" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 mx-2"
                    >
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 mx-2"
                    >
                        <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 mx-2"
                    >
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </a>
                    <a href="mailto:info@mystore.com" className="text-gray-600 dark:text-gray-300 hover:text-red-500 mx-2">
                        <FontAwesomeIcon icon={faEnvelope} size="lg" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;