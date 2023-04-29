import { Box, TextField } from "@mui/material";
import React from "react";

const MultiLineTextEditor = ({ label, color, onChangeHandler, variant }) => {
    return (
        <Box>
        <TextField
            variant={variant}
            label={label}
            color={color}
            onChange={onChangeHandler}
            placeholder="Write the Description about the photos here..."
            multiline
            size="small"
            rows={5}
            fullWidth
        />
        </Box>
    );
};

export default MultiLineTextEditor;
