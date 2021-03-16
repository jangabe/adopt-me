const Pet = ({name, animal, breed}) => {
    return React.createElement("div", {}, [
      React.createElement("h1", {}, name),
      React.createElement("h2", {}, animal),
      React.createElement("h2", {}, breed)
    ]);
  };
  
  const App = () => {
    return React.createElement("div", {}, [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {name : "Max", animal : "Dog", breed : "FrenchPoodle"}),
      React.createElement(Pet, {name : "Ámbar", animal : "Dog", breed : "Wolf"}),
      React.createElement(Pet, {name : "Burbuja", animal : "Fish", breed : "NPI"})
    ]);
  };
  
  ReactDOM.render(React.createElement(App), document.getElementById("root"));