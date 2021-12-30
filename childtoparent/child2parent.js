class Dog extends React.Component{
    state={
        text:''
    }
    render(){
        return<div>
            <h1>Dog</h1>
            <h2>data from puppy:{this.state.text}</h2>
            <Puppy action={this.getDataFrompuppy.bind(this)}/>
        </div>
    }
    getDataFrompuppy(data){
            console.log(data);
    this.setState({
        text:data
    })
    }

}
function Puppy (props){
    let str="Food"
    return<div>
        <h1>Puppy</h1>
        <button onClick={()=>{props.action(str)}}>Send data to Dog</button>
    </div>
}
ReactDOM.render(<Dog/>,document.getElementById('container'))