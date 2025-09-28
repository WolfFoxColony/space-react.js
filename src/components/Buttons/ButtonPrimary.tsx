import React from 'react';
import {To, useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import Headline from "../Headline/Headline.tsx";

type ButtonPrimaryType = {
    children: any,
    variant: string,
    path?: To,
    fontSize?: string,
    click?: any,
}

function ButtonPrimary(props: ButtonPrimaryType) {
    const {children, variant, path, fontSize = '2rem', click} = props;
    const navigate = useNavigate();

    const navigateTo = path ? () => navigate(path) : click;

    return (
        <Button onClick={navigateTo} size="large"
                sx={{
                    border: '1px solid rgb(207 107 232)',
                    boxShadow: '10px 5px 11px rgba(200,21,206,0.77)',
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    '&:hover': {
                        scale: '1.1',
                        transition: 'scale 0.5s'
                    }
                }}>
            <Headline mb={'0'} fontSize={fontSize} variant={variant}>{children}</Headline>
        </Button>
    );
}

export default ButtonPrimary;
