import { useEffect, useRef } from "react";

export function useOutsideClick<T extends HTMLElement>(callback: () => void){
    const ref = useRef<T>(null);
    useEffect(() => {
        const handleClickedOutside = (e: Event) => {
            const target = e instanceof TouchEvent ? e.touches[0].target : e.target;
            if (ref.current && !ref.current.contains(target as Node)) {
                callback();
            }
        };

        document.addEventListener("mousedown", handleClickedOutside);
        document.addEventListener("touchstart", handleClickedOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickedOutside);
            document.removeEventListener("touchstart", handleClickedOutside);
        };
    }, [callback]);

    return ref;
}