export const getData = async (path) => {
    try {
        const response = await fetch(path);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error({ error });
    }
};

export const moveScrollHorizontal = (elementClassList, elementRef, forwardClass, backClass, offsetPixels) => {
    if (elementClassList.contains(backClass)) {
        elementRef.current.scrollLeft -= offsetPixels;
    }
    if (elementClassList.contains(forwardClass)) {
        elementRef.current.scrollLeft += offsetPixels;
    }
};

export const isMobileDevice = () => {
    if (
        (navigator.userAgent.match(/Android/i)) ||
        (navigator.userAgent.match(/webOS/i)) ||
        (navigator.userAgent.match(/iPhone/i)) ||
        (navigator.userAgent.match(/iPod/i)) ||
        (navigator.userAgent.match(/iPad/i)) ||
        (navigator.userAgent.match(/BlackBerry/i))
    ) {
        return true;
    } else {
        return false;
    }
};


export const filterNullPosterAndBackdropPath = (movies) => {
    const filteredMovies = movies.filter((movie) => (movie.poster_path && movie.backdrop_path));
    return filteredMovies;
}

export const addFirstAndLastElementProperty = (array) => {
    const firstElement = array[0];
    const firstArrayElement = { firstElement: true, ...firstElement };
    const lastElement = array[array.length - 1];
    const lastArrayElement = { lastElement: true, ...lastElement };
    array[0] = firstArrayElement;
    array[array.length - 1] = lastArrayElement;
    return array;
}