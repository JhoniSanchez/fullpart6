function Header(props) {
  return <h1>{props.course}</h1>;
}

function Part(props) {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
}

function Content(props) {
  return (
    <div>
      <Part part={props.p1} exercises={props.e1} />
      <Part part={props.p2} exercises={props.e2} />
      <Part part={props.p3} exercises={props.e3} />
    </div>
  );
}

function Total(props) {
  return <p>Number of exercises {props.e1 + props.e2 + props.e3}</p>;
}

const App = () => {
  const course = {
    name: "Half Stack application development",
    part1: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content
        p1={course.part1[0].name}
        e1={course.part1[0].exercises}
        p2={course.part1[1].name}
        e2={course.part1[1].exercises}
        p3={course.part1[2].name}
        e3={course.part1[2].exercises}
      />
      <Total
        e1={course.part1[0].exercises}
        e2={course.part1[1].exercises}
        e3={course.part1[2].exercises}
      />
    </div>
  );
};

export default App;
