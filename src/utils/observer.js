const noop = () => {};

export const createObserver = (element, {onIntersect = noop, onDeIntersect = noop, rootMargin = '0px', shouldDetachOnIntersect = false}) => {
    const observer = new IntersectionObserver(
        (entries) => {
            const intersectingEntry = entries.find((entry) => entry.isIntersecting);

            if (intersectingEntry) {
                onIntersect();
                if (shouldDetachOnIntersect) {
                    observer.unobserve(element);
                }
            } else {
                onDeIntersect();
            }
        },
        {rootMargin}
    );
    return observer;
};
