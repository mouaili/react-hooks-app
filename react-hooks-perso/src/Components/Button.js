import { memo } from 'react';
import style from '../css/Button.module.css';

function Button(props) {
  return (
    <button className={`${style.button}`} onClick={props.changeAction}>
      {props.children}
    </button>
  );
}

export default memo(Button);
