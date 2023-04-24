import React from "react";
import { Link } from "react-router-dom";

const Contact = ({ mailto, label, className }) => {
    return (
        <Link
            className={className}
            to='#'
            onClick={(e) => {
                window.location.href= mailto;
                e.preventDefault();
            }}>{label}</Link>
    );
};

export default Contact;