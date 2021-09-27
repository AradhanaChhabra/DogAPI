const Dog = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h3", {}, props.name),
    React.createElement("h3", {}, props.weight),
    React.createElement("h3", {}, props.breed),
  ]);
};
const dogs = [
  {
    name: "Bull Terrier",
    weight: "50.70 Kg",
    breed: "Terrier",
  },
  {
    name: "Bull Terrier",
    weight: "50.70 Kg",
    breed: "Terrier",
  },
  {
    name: "Bull Terrier",
    weight: "50.70 Kg",
    breed: "Terrier",
  },
];
const App = () => {
  return React.createElement(
    "div", // tag
    { id: "website-title" }, // attributes with the element
    [
      React.createElement("h3", {}, "Dog Website"),
      //   React.createElement(Dog, {
      //     name: "Bull Terrier",
      //     weight: "50.70 Kg",
      //     breed: "Terrier",
      //   }),
      ...dogs.map((item) => React.createElement(Dog, item)),
      //   React.createElement(Dog, {
      //     name: "PitBull",
      //     weight: "50.70 Kg",
      //     breed: "Bull",
      //   }),
      //   React.createElement(Dog, {
      //     name: "Puppy",
      //     weight: "5.70 Kg",
      //     breed: "husky",
      //   }),
    ] // content can be another component also.
  );
};

ReactDOM.render(
  React.createElement(
    // component to render
    App
  ),
  document.getElementById("root") // place to render
);
