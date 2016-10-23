var styles = {
width: '100px',
height: '100px',
background: 'red'
}

var Test = React.createClass({
render(){
return ( <div style={styles}></div> )

}


})

ReactDOM.render(
	<Test />,
	document.getElementById('react')
);
