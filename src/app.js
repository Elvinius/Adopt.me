const Pet = ({name, animal, breed}) => {
	return React.createElement(
		"div",
		{},
		[
		React.createElement("h2", {}, name),
		React.createElement("h2", {}, animal),
		React.createElement("h2", {}, breed)
		]);
};

const App = () => {
	return React.createElement("div",{},
				[
				React.createElement("h1",{}, "Adopt Me!"),
				React.createElement(Pet, {
					name:"Sharik",
					animal:"Dog", 
					breed:"German shepherd"
				}),
				React.createElement(Pet, {
					name:"Mauritius",
					animal:"Cat", 
					breed:"Angora"
				})
				]);		
};

ReactDOM.render(React.createElement(App),
	document.querySelector("#root")
		);

