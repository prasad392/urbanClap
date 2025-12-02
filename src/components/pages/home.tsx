import { useState } from "react"
import { useUser } from "../context/AppContext"
import Navbar from "../navbar/Navbar";
import Modal from 'react-modal'
interface user{
    name:string;
    age:number;
}

function Home() {
    const {addUser,deleteuser,usersData,updateUser} = useUser()
    const [iseditID,setIseditID] = useState<number | null>(null)
    const [inputs,setInputs] = useState<user>({
        name:'',
        age:0
    })
    return (
        <>
            <Navbar/>
            <div className="text-white"> home page </div>

            <div className="flex-column" style={{display:"flex",flexDirection:'column',width:'40%',gap:30}}>
                <input type="text" placeholder="name"
                className="border-2 mt-5 w-[220px]"
                value={inputs.name}
                onChange={(e)=>setInputs(prev=>({...prev,name:e.target.value}))}
                />
                <input type="text" placeholder="Age"
                className="border-2 mt-5 w-[220px]"
                value={inputs.age ===0 ? '' : String(inputs.age)}
                onChange={(e)=>{
                    setInputs(prev=>({...prev,age:Number(e.target.value)}))
                    console.log(e)
                }}
                />
                <button className="border-2 mt-5 w-[220px]"
                onClick={()=>{
                    if(iseditID){
                        updateUser(iseditID,inputs)
                        setIseditID(null)
                    }else{
                        addUser(inputs)
                    }
                    setInputs({name:'',age:0})
                }}
                >{iseditID ? 'Update' : 'Submit'}</button>
                <div>
                    {
                        usersData && (
                            usersData.map((item)=>(
                                <div key={item.id}>
                                    <p> {item.name} </p>
                                    <button
                                    onClick={()=>{
                                        deleteuser(item.id)
                                    }}
                                    > DELETE </button> <br />
                                    <button
                                    onClick={()=>{
                                        setInputs({name:item.name,age:item.age})
                                        setIseditID(item.id)
                                    }}
                                    > EDIT </button>
                                </div>
                            ))
                        )
                    }
                </div>
                <Modal
                isOpen={false}
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
            </div>
        </>
    )
}

export default Home
