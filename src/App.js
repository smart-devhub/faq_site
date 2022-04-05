import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {gsap,Power3} from 'gsap'

function App() {
  const [toggle ,settoggle]=React.useState(true)
  const [value,setValue]=React.useState('')
  const [SecToogle,setSecToogle]=React.useState(true)
  const [ThirdToggle,setThirdToggle]=React.useState(true)
  
    
  
  const handleclick1=()=>{
    setValue("key_01")
    setSecToogle(!SecToogle)
    
  }
  const handleclick2=()=>{
    setValue("key_02")
    setSecToogle(true)
    setThirdToggle(true)
    
  }
  const handleclick3=()=>{
    setValue("key_03")
    setSecToogle(true)
    setThirdToggle(false)
    
  }

  const handleclick4=()=>{
    setValue("key_04")
    setSecToogle(false)
    setThirdToggle(false)
    
  }
  const handleclick5=()=>{
    setValue("key_05")
    setSecToogle(true)
    settoggle(true)
    setThirdToggle(false)
    
  }
  const handleclick6=()=>{
    setValue("key_06")
    setSecToogle(false)
    setThirdToggle(true)
   
  }
  const handleclick8=()=>{ 
    setValue("key_08")
    settoggle(false)
  setSecToogle(true)
  setThirdToggle(true)
  
}
  const handleclick11=()=>{
    setValue("key_02")
    setSecToogle(false)
    setThirdToggle(true)
    settoggle(false)
    
  }

  const cleanall=()=>{
    setValue("")
    settoggle(true)
    setSecToogle(true)
    setThirdToggle(true)
    
  }
  
 

  return (
    <div className="App">
      <div className='container'>
        <h1>FAQ</h1>
        <div className='searchbar'>
          <input type="text" className='input' value={value} />
          <span style={{cursor:"pointer"}} onClick={cleanall}>Clin</span>
        </div>
        <div className='firstQuestion'>
           <div className='title' onClick={()=>{settoggle(!toggle)}}><h6>First Question</h6></div>
           {toggle &&
           <div className='toggle' >
              <p>first answer</p>
              <div className='btns'>
                <button onClick={handleclick1} >key_01</button>
                <button onClick={handleclick2} >key_02</button>
                <button onClick={handleclick3} >key_03</button>
                <button onClick={handleclick4} >key_04</button>
                <button onClick={handleclick5} >key_05</button>
                <button onClick={handleclick6} >key_06</button>
              </div>
            </div>}
        </div>
        <div className='anotherQuetion'>
        <div className='firstQuestion'>
           <div className='title' onClick={()=>setSecToogle(!SecToogle)}><h6>Any Other Question</h6></div>
           {SecToogle &&
           <div className='toggle'>
              <p>Any other ansver. Key in dicription <span style={{background:"#9b59b6"}}>{value}</span></p>
              <div className='btns'>
                <button onClick={handleclick2} >key_02</button>
                <button onClick={handleclick3} >key_03</button>
                <button onClick={handleclick5} >key_05</button>
                <button onClick={handleclick8}>key_08</button>
                
              </div>
            </div>}
        </div>
        </div>
        <div className='firstQuestion' style={{marginBottom:"10px"}}>
           <div className='title' onClick={()=>setThirdToggle(!ThirdToggle)}><h6>First Question</h6></div>
           {ThirdToggle &&
           <div className='toggle'>
              <p>First ansver. Key in dicription <span style={{background:"#9b59b6"}}>{value}</span>.</p>
              <div className='btns'>
                <button onClick={handleclick2} >key_02</button>
                <button onClick={handleclick6} >key_06</button>
                <button onClick={handleclick8} >key_08</button>
                <button onClick={handleclick11} >key_11</button>
               
              </div>
            </div>}
           
        </div>
        <div style={{marginTop:"1rem",textAlign:"center",background:"black",margin:"0 auto",borderRadius:"10px",width:"320px"}}>
          <a href="https://github.com/fixmax/faq_search_js" style={{color:"white"}}>https://github.com/fixmax/faq_search_js</a>
          </div>
          
      </div>
      
    </div>
  );
}

export default App;
