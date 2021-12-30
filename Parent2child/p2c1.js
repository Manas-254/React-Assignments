function Parent(props){
    const data=['abc','xyz']
    return <div>
        <h1>Parent ,{props.userloggedIn}</h1>
        <Child alpha={data}/>
    </div>
}

function Child(props){
    return <div>
       {props.alpha.map((val,ind)=>{
           return <li key={val+ind}>
                {val}
           </li>
       })}
    </div>
}

ReactDOM.render(<Parent userloggedIn="Siddu"/>,document.getElementById('container'))