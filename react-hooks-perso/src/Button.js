function Button(props) {
  return <button onClick={props.moveAction}>{props.children}</button>;
}

export default Button;
