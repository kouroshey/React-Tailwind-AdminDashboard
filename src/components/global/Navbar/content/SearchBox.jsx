import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import Input from '../../../common/Input'

const SearchBox = () => {
    return (
        <div className='relative flex items-center'>
            <HiOutlineMagnifyingGlass className='text-3xl text-milky absolute right-2 top-2' />
            <Input />
        </div>
    )
}

export default SearchBox