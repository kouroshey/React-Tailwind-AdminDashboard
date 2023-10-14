import React from 'react'

const Input = ({type = 'text'}) => {
    return (
        <input
            className={`
            border
            border-bgDark
            dark:bg-bgLight
            bg-transparent
            text-bgDark
            dark:text-milky
            outline-none
            px-4
            py-2
            rounded-md
            placeholder:text-gray-4
            `}
            type={`${type}`}
            placeholder='Search'
        />
    )
}

export default Input