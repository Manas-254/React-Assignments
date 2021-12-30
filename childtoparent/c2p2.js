class Cow extends React.Component{
    state={
        text:''
    }
    render(){
        return<div>
            <h1>Cow</h1>
            <h2>data from Calf:{this.state.text}</h2>
            <Puppy action={this.getDataFromcalf.bind(this)}/>
        </div>
    }
    getDataFromcalf(data){
            console.log(data);
    this.setState({
        text:data
    })
    }

}
function Calf(props){
    let str="TV"
    return<div>
        <h1>Calf</h1>
        <button onClick={()=>{props.action(str)}}>Send data to Cow</button>
    </div>
}
ReactDOM.render(<Cow/>,document.getElementById('container'))