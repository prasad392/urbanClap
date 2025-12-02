import { createContext, useContext, useEffect, useState } from "react";

interface user{
    id : number;
    name:string;
    age:number;
}

interface Usercontype{
    usersData: user[];
    addUser: (newUser:Omit<user,'id'>)=>void;
    deleteuser: (id: number)=>void;
    updateUser: (id: number, user: Omit<user,'id'>)=>void;
}

export const AppContext = createContext<Usercontype|undefined>(undefined)

export const AppProvider = ({children}:{children:React.ReactNode})=>{
    const [usersData,setUsersDta] = useState<user[]>([])

    useEffect(()=>{
        const loadUsers=async()=>{
            try{
                const stored = await localStorage.getItem('usersData')
                if(stored){
                    setUsersDta(JSON.parse(stored))
                }
            }catch(err){
                console.log(err)
            }
        }
        loadUsers()
    },[])
    const saveData = async(updatedUser: user[])=>{
        try{
            await localStorage.setItem('usersData',JSON.stringify(updatedUser))
        }catch(err){
                console.log(err)
            }
    }
    const addUser = (newuser: Omit<user,'id'>)=>{
        const updatedId = {id:Date.now(),...newuser}
        const updatedIDData = [...usersData,updatedId]
        setUsersDta(updatedIDData)
        saveData(updatedIDData)
    }
    const deleteuser=(id:number)=>{
        const updated = usersData.filter(u=> u.id !== id)
        saveData(updated)
        setUsersDta(updated)
    }
    const updateUser=(id:number,user:Omit<user,'id'>)=>{
        const updatesUsers = usersData.map(u=> u.id === id ? {id,...user} : u)
        saveData(updatesUsers)
        setUsersDta(updatesUsers)
    }
    return(
        <AppContext.Provider value={{usersData,addUser,deleteuser,updateUser}}>
            {children}
        </AppContext.Provider>
    )
}
export const useUser = ()=>{
    const context = useContext(AppContext);
    if(!context) throw new Error("errors")
    return context;
}