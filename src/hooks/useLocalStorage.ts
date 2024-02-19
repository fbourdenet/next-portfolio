import { Dispatch, SetStateAction, useLayoutEffect, useState } from "react";

export const useLocalStorage = (key: string): [boolean, Dispatch<SetStateAction<boolean>>] => {
    const [value, setValue] = useState(false);

    useLayoutEffect(() => {
        if (value) {
            document.documentElement.classList.add(key);
        } else {
            document.documentElement.classList.remove(key);
        }

        window?.localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
};
