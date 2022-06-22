import React, { useState, useEffect, useMemo } from 'react';

export default function Query() {
    const [num, setNum] = useState(1);
    const [isKorea, setIsKorea] = useState(true);

    // const location = isKorea ? "한국" : "외국";

    const location = useMemo(() => {
        return {
            country: isKorea ? "한국" : "외국",
        };
    }, [isKorea]);


    useEffect(() => {
        console.log("useEffect 호출");
    }, [location]);

    return (
        <div>
            <h2>하루에 몇끼 먹어요?</h2>
            <input type="number" value={num} onChange={e => setNum(e.target.value)} />
            <hr />
            <h2>어느나라에 있어요?</h2>
            <p>나라 : {location}</p>
            <button onClick={() => setIsKorea(!isKorea)}>Click</button>
        </div>
    );
};