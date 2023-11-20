import React, { useEffect, useState } from 'react'

export default function UseEffectExample() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    //Mounting
    useEffect(() => {
        console.log('Component did mount');
    }, [])


    // ******************************************************************************************
    //Updating
    useEffect(() => {
        console.log('useEffect called without second argument');
    })

    useEffect(() => {
        console.log('Component did update, Count1:', count1);
    }, [count1])

    useEffect(() => {
        console.log('Component did update, Count2:', count2);
    }, [count2])


    // ******************************************************************************************
    //Unmouting
    useEffect(() => {
        return () => {
            console.log('Component will unmount without []');
        }
    })

    useEffect(() => {
        return () => {
            console.log('Component will unmount with [count1]');
        }
    }, [count1])

    useEffect(() => {
        return () => {
            console.log('Component will unmount with [count2]');
        }
    }, [count2])

    useEffect(() => {
        return () => {
            console.log('Component will unmount with []');
        }
    }, [])

    return (
        <div>
            <h1>Use Effect Example</h1>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '100px' }}>
                <div>
                    <p>You clicked {count1} times</p>
                    <button onClick={() => setCount1(count1 + 1)}>Count1</button>
                </div>
                <div>
                    <p>You clicked {count2} times</p>
                    <button onClick={() => setCount2(count2 + 1)}>Count2</button>
                </div>
            </div>
        </div>
    )
}
