import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

export default function LayoutExample() {
    const [show, setShow] = useState(false)
    const button = useRef()
    const popup = useRef()

    useEffect(() => {
        console.log('useEffect mounted')
    }, [])

    useLayoutEffect(() => {
        console.log('useLayoutEffect mounted')
    }, [])

    useEffect(() => {
        if (popup.current === null || button.current === null) return
        const { current: buttonElement } = button
        const buttonBottomPotions = buttonElement.getBoundingClientRect().bottom

        const { current: popupElement } = popup
        popupElement.style.left = `${buttonBottomPotions + 250}px`
    }, [show])

    return (
        <div>
            <h1>Layout Example</h1>
            <button ref={button} onClick={() => setShow(!show)}>Show/Hide</button>
            {!show && <div ref={popup} style={{ position:'absolute' }}>Popup</div>}
        </div>
    )
}
