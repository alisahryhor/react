export default function Component(props) {
    console.log(props)
  return (
    <div>
        <h1>{props.name}</h1>
        <h2>{props.surName}</h2>
    </div>
  );
}


