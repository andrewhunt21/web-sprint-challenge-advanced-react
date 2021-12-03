import { useState } from "react";

const useForm = (initialValue) => {
    const [values, setValues] = useState(initialValue);
    return [values, setValues];
}

export default useForm;