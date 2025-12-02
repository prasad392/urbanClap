
interface Props {}

function Usercard(props: Props) {
    const {} = props

    return (
        <div
        className='w-[120px] border-2 h-[70px] flex-column items-center justify-evenly gap-10'
        >
            <div><h1 className='text-center'> prasad </h1></div>
            <div className='flex items-center justify-evenly'>
                <button className='bg-red-500'>DEL</button>
                <button className='bg-slate-100'>EDIT</button>
            </div>
        </div>
    )
}

export default Usercard
