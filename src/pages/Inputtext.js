import React , {useState} from 'react'
import './style.css'

function Inputtext() {

    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    const [age , setAge] = useState()
    const [bio , setBio] = useState("")



    const handel = (e) => {
        e.preventDefault();
        console.log(username)
        console.log(password)
        console.log(age)
        console.log(bio)
    }

    const deletedata = (e) => {
        e.preventDefault();

        setAge()
        setBio("")
        setUsername("")
        setPassword("")
    }

  return (
        <>
             <div className='user-fom' >
             <input onChange={ e => setUsername(e.target.value)}  type="text"  placeholder='ادخل اسمك من فضلك'   />   
              <input onChange={ e => setPassword(e.target.value)}  type="password"  placeholder='ادخل كلمة المرور من فضلك'   />  
             <input onChange={ e => setBio(e.target.value)}  type="text"  placeholder='ادخل الوصف  من فضلك'   />   
             <input onChange={ e => setAge(e.target.value)}  type="text"  placeholder='ادخل  العمر من فضلك'   />   
 
            <button onClick={ e => handel(e) } > Login and show data </button> 

            <button onClick={ e => deletedata(e) } >   clear data </button> 


             </div>
        </>
  )
}

export default Inputtext
