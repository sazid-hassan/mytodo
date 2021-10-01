import React from 'react'
//import { useState } from 'react';

//MUI
import TextField from '@material-ui/core/TextField';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';

export default function Form({
    inputText,
    setInputText,
    todos,
    setTodos,
    setStatus
}) {

    // const [category, setCategory] = useState();

    // const categories = [
    //     {
    //         status: 'all',
    //         label: 'ALL'
    //     },

    //     {
    //         status: 'unfinished',
    //         label: 'Unfinished'
    //     },
    //     {
    //         status: 'finished',
    //         label: 'finished'
    //     }


    // ]

    // const handleChange = (event) => {
    //     setCategory(event.target.value);
    //     setStatus(event.target.value);
    // };

    const handleChangeTitle = (event) => {
        setInputText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setTodos([
            ...todos, { text: inputText, finished: false, id: Math.random() * 1000 }
        ])
        setInputText("");
    }



    return (
        <>
            <form className='formClass' noValidate autoComplete="off">

                <TextField
                    id="Title"
                    label="ToDo"
                    variant="filled"
                    value={inputText}
                    onChange={handleChangeTitle}
                    style={{
                        background: "#fff",
                        margin: "2px",
                        borderRadius: "5px",
                    }}
                />
                <button onClick={handleSubmit}>
                    <AddCircleOutlinedIcon />
                </button>

                {/* <TextField
                    style={
                        {
                            background: "#fff",
                            padding: "2px",
                            margin: "2px",
                            borderRadius: "5px"
                        }
                    }
                    id="category"
                    select
                    label="Select Type"
                    value={category}
                    onChange={handleChange}
                    SelectProps={{
                        native: true,
                    }}
                >
                    {categories.map((option) => (
                        <option key={option.status} status={option.status}>
                            {option.label}
                        </option>
                    ))}
                </TextField> */}
            </form>
        </>
    )
}
