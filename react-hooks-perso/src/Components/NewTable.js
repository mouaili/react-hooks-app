import { useEffect, useRef } from 'react';

function NewTable(props) {
  const counterRefs = useRef([]);
  counterRefs.current = [];

  const addToRefs = el => {
    if (el && !counterRefs.current.includes(el)) {
      counterRefs.current.push(el);
    }
    //console.log(counterRefs.current);
  };

  useEffect(() => {
    console.log(counterRefs.current);
    //...**
  }, []);

  return (
    <>
      <table className='table table-primary d-block mx-auto'>
        <thead>
          <tr>
            <th scope='col'>Date/Heure</th>
            <th scope='col'>Temps écoulé en secondes</th>
          </tr>
        </thead>
        <tbody className='table-tripped'>
          {props.counters.map((element, index) => {
            return (
              <tr key={index} ref={addToRefs}>
                <td>
                  {element.date.toLocaleDateString()} à{' '}
                  {element.date.toLocaleTimeString()}
                </td>
                <td>{element.count} milliseconde(s)</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default NewTable;
