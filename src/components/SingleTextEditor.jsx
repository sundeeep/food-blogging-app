import { TextField, Box } from '@mui/material'
import React from 'react'

const SingleTextEditor = ({label, onChangeHandler, color, variant}) => {
    return (
        <Box className='w-[100%]'>
            <TextField 
                label={label}
                variant={variant}
                color={color}
                fullWidth
                size={"small"}
                // type={type}
                onChange={onChangeHandler}
                // value={value}
                />
        </Box>
    )
}

export default SingleTextEditor