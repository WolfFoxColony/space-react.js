import React from 'react';
import Typography from "@mui/material/Typography";

function Headline(props: any) {
    const {children, fontSize='3.5rem', variant='h2', mb='30px'} = props;
    const customFont = "'Rowdies', sans-serif";  // sans-serif - fallback(alternative font)

    return (
        <Typography variant={variant} sx={{
            lineHeight: '1.1',
            fontFamily: customFont,
            textTransform: 'uppercase',
            color: 'transparent',
            textShadow: '5px 8px 13px rgba(200, 21, 206, 0.77)',
            WebkitTextStroke: '2px rgb(207 107 232)',
            fontSize: fontSize,
            fontWeight: '700',
            textAlign: 'center',
            mb: mb,
        }}>
            {children}
        </Typography>
    );
}

export default Headline;
