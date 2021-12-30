function Welcome(){
    const getData=()=>{
        console.log('clicked');
    }
    return(<div>
        <button onClick={()=>getData()}>Click Me</button>
    </div>)
}

ReactDOM.render(<Welcome/>,document.getElementById('container'))