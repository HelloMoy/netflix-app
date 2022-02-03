import { useEffect, useMemo, useState } from 'react';

const useElementOnScreen = (options, itemRef) => {

    const [isVisible, setIsVisible] = useState(false);

    const callbackFunction = (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    }

    const optionsMemo = useMemo(() => {
        return options
    }, [options]);

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, optionsMemo);
        const currentItemRef = itemRef.current;
        if (currentItemRef) {
            observer.observe(currentItemRef);
        }

        return () => {
            if (currentItemRef) {
                observer.unobserve(currentItemRef);
            }
        };
    }, [itemRef, optionsMemo]);

    return isVisible;
}

export default useElementOnScreen;
