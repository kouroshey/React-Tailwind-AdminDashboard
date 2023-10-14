import React from 'react'

const Input = ({type = 'text'}) => {
    return (
        <input
            className={`
            border
            w-44
            h-fit
            border-bgDark
            dark:bg-bgLight
            bg-transparent
            text-bgDark
            dark:text-milky
            outline-none
            px-4
            py-2
            rounded-md
            placeholder:text-bgLight
            dark:placeholder:text-gray-4
            `}
            type={`${type}`}
            placeholder='Search'
        />
    )
}

export default Input