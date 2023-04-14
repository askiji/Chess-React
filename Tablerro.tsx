import { useState } from 'react';
import React = require('react');
import Draggable from 'react-draggable';
import './style';

function Tablero() {
  let x: any;
  let y: any;
  const fila = [];
  const [texto, setTexto] = useState('');
  const handleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    setTexto('a');

    console.log();
  };
  for (let i = 0; i < 8; i++) {
    const casilla = [];
    for (let j = 0; j < 8; j++) {
      let piece = null;
      if (i === 7 && j === 4) {
        piece = (
          <King
            draggable={true}
            onDragStart={(e) => console.log('onDragStart')}
            onDragEnd={(e) => console.log('asdasde')}
          ></King>
        );
      }
      const color = (i + j) % 2 === 0;
      casilla.push(
        <td className="celda">
          <div
            onDragEnter={(e) => console.log('onDragEnter')}
            onDragLeave={(e) => console.log('onDragLeave')}
            onDragOver={(e) => {
              e.preventDefault();
              console.log();
            }}
            onClick={handleClick}
            onDrop={(i: any, j: any) => {
              return setPiece();
            }}
            className={`${color ? 'blanco' : 'negro'} pieza `}
          >
            {piece}
          </div>
        </td>
      );
    }
    fila.push(<tr>{casilla}</tr>);
  }

  function setPiece() {
    return <King />;
  }

  return (
    <table className="tablero">
      <tbody>{fila} </tbody>
    </table>
  );
}
function King(props: any) {
  const className = props.isWhite
    ? 'king-piece white pieza'
    : 'king-piece black pieza';
  return (
    <Draggable>
      <div className={className}>&#9812;</div>
    </Draggable>
  );
}

// function ComponenteClickeable() {
//   const handleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
//     console.log('El componente ha sido clickeado.');
//   };

//   return (
//     <span onClick={handleClick}>
//       <King />
//     </span>
//   );
// }
// function ComponenteClickeable() {
//   const [texto, setTexto] = useState('');

//   const handleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
//     setTexto(texto + 'a');
//   };

//   return (
//     <Draggable onClick={handleClick}>
//       <p>{texto}</p>
//     </Draggable>
//   );
// }

export default Tablero;
