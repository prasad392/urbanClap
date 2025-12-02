
import React from 'react'
import Modal from 'react-modal';

interface Props {
    visible: boolean;
    onClose: ()=>void;
    onConfirm: ()=>void;
}

function Logoutmodals(props: Props) {
    const {visible,onClose,onConfirm} = props

    return (
        <Modal
        isOpen={visible}
        onRequestClose={onClose}
        style={{
            overlay:{
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:'rgba(0,0,0,0.5)'
            },
            content:{
                background:'transparent',
                position:'static',
                border:'none'
            }
        }}
        >
            <div className='w-[200px] h-[150px] bg-slate-400'
            
            style={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'space-evenly'
            }}>
                <h3 className='text-2xl'> is Logout? </h3>
                <div
                style={{
                    display:'flex',
                    gap:30
                }}
                >
                    <button
                    className='bg-amber-500 w-[50px] rounded-lg'
                    onClick={()=>{
                        onConfirm()
                        onClose()
                    }}
                    > okay </button>
                    <button
                    className='bg-slate-100 w-[70px] rounded-lg'
                    onClick={()=>{
                        onClose()
                    }}
                    > cancel </button>
                </div>
            </div>
        </Modal>
    )
}

export default Logoutmodals
