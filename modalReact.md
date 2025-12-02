
=> npm i react-modal

=> npm install --save react-modal

=> npm i --save-dev @types/react-modal

    // this displays the small box at the center...

    <Modal
        isOpen={true}
        style={{
            overlay:{
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:"rgba(0,0,0,0.5)",
            },
            content:{
                position:'static',
                background:'transparent',
                border:'none'
            }
        }}
        >
            <div
            className="bg-amber-500 w-[120px] h-[120px] items-center justify-center flex"
            > harum! </div>
    </Modal>