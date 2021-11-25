import React, { useState } from 'react';

const useForm = (callback) => {
    const [commentBody, setCommentBody] = useState({})
    const handleChange = (event) => {
        event.persist();

        setCommentBody(commentBody => ({...commentBody, [event.target.name]: event.target.value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        callback();
    };

    return { commentBody, handleChange, handleSubmit}

}

export default useForm;