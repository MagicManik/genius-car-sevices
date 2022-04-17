import { useEffect, useState } from "react"

const useExperts = () => {
    const [experts, setExperts] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setExperts(data))
    }, [])

    return [experts, setExperts];
}

export default useExperts;