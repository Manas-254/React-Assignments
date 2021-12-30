class Father extends React.Component{
    state={
        text:''
    }
    render(){
        return<div>
            <h1>Father</h1>
            <h2>data from Child:{this.state.text}</h2>
            <Puppy action={this.getDataFromchild.bind(this)}/>
        </div>
    }
    getDataFromchild(data){
            console.log(data);
    this.setState({
        text:data
    })
    }

}
function Child(props){
    let str="Bike"
    return<div>
        <h1>Child</h1>
        <button onClick={()=>{props.action(str)}}>Send data to Father</button>
    </div>
}
ReactDOM.render(<Father/>,document.getElementById('container'))