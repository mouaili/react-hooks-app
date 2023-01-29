function NewButton(props) {
  return <button onClick={props.showClick}>{props.children}</button>;
}

export default NewButton;
