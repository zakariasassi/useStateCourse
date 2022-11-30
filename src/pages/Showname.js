import React , { useState , useEffect }  from 'react';

function Showname () {



   

    const [ name , setName ] = useState("")
    const [ age , setAge ] = useState()
    const [ jop , setJop ] = useState("")
    const [lng , setLng] = useState([])
    
    function haneldname () {
        

        const array = ['c++' , 'js' , 'java' , 'dart']
        setName("Zakaria Sassi")
        setAge(26)
        setJop("Softwre Dev ↗️")
        setLng(array)
    }



    useEffect( () => {
          haneldname()  

    } ,[] )




    return (
        <>
            <h1 style={{ color:'#e67e22' }} >اسم المستخدم</h1>
           <h6> {name} </h6>  

           <h1 style={{ color:'#3498db' }} >عمر المستخدم</h1>
           <h6> {age} </h6> 

         
           <h1 style={{ color:'#c0392b' }} >وظيفة المستخدم</h1>
           <h6> {jop} </h6>  

           <h1 style={{ color:'#c0392b' }} >لغات المستخدم</h1>
           <h6> {lng} </h6> 


           {/* <button  style={{
               backgroundColor: '#2c3e50',
               color:'white',
               border:'0px  ',
               height: 50,
               width:150,
               marginLeft:150,
               cursor:'pointer',


           }} onClick={ (e) => haneldname(e)   } > غير قيمة الاسم </button>   

         */}
        </>
    )
}


export default Showname