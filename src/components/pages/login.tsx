
import { useNavigate } from 'react-router-dom'
import {onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../firebase/fireStoreconfig';
import './login.css'
import { useEffect, useState } from 'react'
interface Props {}

function Login(props: Props) {
    const navigate = useNavigate()
    const {} = props
    const [inputs,setInputs] = useState({
        email:'',
        password:''
    })
    const [clicks,setClicks] = useState({
        loading:true,
        signUp:false,
    })

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            if(user){
                navigate('/home')
            }
            else{
                setClicks(prev=>({...prev,loading:false}))
            }
        })
        return unsubscribe;
    },[])

    const handliSubmit=async()=>{
        const {password,email} = inputs
        try{
            await signInWithEmailAndPassword(auth,email,password)
            navigate('/home')
        }
        catch(err){
            console.log(err)
        }
    }
    if(clicks.loading){
        return(
            <h3>Loading</h3>
        )
    }
    return (
        <>
            <div className='cont-box'>
                <div className='loginBox'>
                    <input 
                    type="text" 
                    className='inputT'
                    placeholder='Enter email'
                    value={inputs.email}
                    onChange={(e)=>{
                        setInputs(prev=>({...prev,email:e.target.value}))
                    }}
                    />
                    <input
                    type="text"
                    className='inputT'
                    placeholder='Enter password'
                    value={inputs.password}
                    onChange={(e)=>{
                        setInputs(prev=>({...prev,password:e.target.value}))
                    }}
                    />
                    <button className='submitBtn' onClick={handliSubmit}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default Login
