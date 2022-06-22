import React, { useMemo, useState } from 'react';

const hardAdder = num => {
    console.log("어려운 계산");
    for (let i = 0; i < 999999; i++) { };
    return num + 10000;
};

const easyAdder = num => {
    console.log("쉬운 계산");
    return num + 1;
};

export default function Adder() {
    const [hardNum, setHardNum] = useState(1);
    const [easyNum, setEasyNum] = useState(1);

    // const hardSum = hardAdder(hardNum);
    const hardSum = useMemo(() => {
        return hardAdder(hardNum);
    }, [hardNum]);

    const easySum = easyAdder(easyNum);

    return (
        <div>
            <h3>어려운 계산기</h3>
            <input type="number" value={hardNum} onChange={e => setHardNum(parseInt(e.target.value))} />
            <span>+ 10000 = {hardSum}</span>
            <h3>쉬운 계산기</h3>
            <input type="number" value={easyNum} onChange={e => setEasyNum(parseInt(e.target.value))} />
            <span>+ 1 = {easySum}</span>
        </div>
    );
};
