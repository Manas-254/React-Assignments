class Element extends React.Component{
    render(){
        return <div>
            <h1>Welcome,{this.props.firstname}</h1>
            <button onClick={this.getData.bind(this)}>Click Me</button>
            <button onClick={()=>{this.getName()}}>Get Name</button>
            <button onClick={()=>{this.getAge("old")}}>Get Age</button>
        </div>
    }
    getData(){
        console.log('get Data is executed');
    }
    getName(){
        console.log(this);
    }
    getAge(data){
        console.log(data);
    }
}



ReactDOM.render(
    <Element firstname="Prabhas"/>,
    document.getElementById('container'))