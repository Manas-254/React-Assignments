class Mother extends React.Component{
    state={
        text:''
    }
    render(){
        return<div>
            <h1>Mother</h1>
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
    let str="TV"
    return<div>
        <h1>Child</h1>
        <button onClick={()=>{props.action(str)}}>Send data to Mother</button>
    </div>
}
ReactDOM.render(<Mother/>,document.getElementById('container'))