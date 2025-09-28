import {useEffect, useState} from 'react';

export const usePreloadImage = (src: string) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setLoaded(true);
    }, [src]);

    return loaded;
};
