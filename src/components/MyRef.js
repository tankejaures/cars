import React, { forwardRef } from 'react'

const MyRef = forwardRef((props, ref) => {
    console.log(props, ref);

    return (
        <div>
            <input ref={ref} type="text" />
        </div>
    )
})
export default MyRef;