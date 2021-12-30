function Parent(props){
    return <div>
        <h1>Parent ,{props.userloggedIn}</h1>
        <Child fathername="dad" username={props.userloggedIn}/>
    </div>
}

function Child(props){
    return <div>
        <h2>Child,{props.username}</h2>
        <h2>Child father,{props.fathername}</h2>
    </div>
}

ReactDOM.render(<Parent userloggedIn="Siddu"/>,document.getElementById('container'))