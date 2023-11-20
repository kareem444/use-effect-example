import React, { useEffect, useState } from 'react'

export default function UnMountExample() {
    const [count, setCount] = useState(0)

    //UseEffect mainly used for side effects like: 
    //API calls,
    //subscriptions[timers, sockets], 
    //detecting state changes.

    useEffect(() => {
        console.log('Component did mount')
        const time = setInterval(() => {
            setCount(count => {
                return count + 1
            })
            console.log('Count Updated')
        }, 1000)
        // return () => {
        //     console.log('Component will unmount')
        //     clearInterval(time)
        // }
    }, [])

    return (
        <div>
            <h1>Unmount Example</h1>
            <h2>Count: {count}</h2>
        </div>
    )
}
