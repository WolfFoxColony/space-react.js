import React from 'react';
import './Tile.scss';

interface TileProps {
    children: React.ReactNode;
    href?: string;
}

function Tile(props: TileProps) {
    const {children, href} = props;

    const content = (
        <span className='tile'>
            <span className='tile-box font-primary'>
                {children}
            </span>
        </span>)

    return href ? (
        <a href={href} className='tile-anchor' target={"_blank"}>
            {content}
        </a>
    ) : (content)
}

export default Tile;
