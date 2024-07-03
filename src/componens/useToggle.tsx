import { useState, useCallback } from 'react';

const useToggle = (initialValue: boolean = false): [boolean, () => void] => {
    const [value, setValue] = useState<boolean>(initialValue);

    const toggleValue = useCallback(() => {
        setValue(prevValue => !prevValue);
    }, []);

    return [value, toggleValue];
};

export default useToggle;
