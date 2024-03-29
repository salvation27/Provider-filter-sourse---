import React from 'react'

export default function Buttons({handleBtns}) {
  return (
    <div className="btn_wrapper">
      <button onClick={handleBtns} value="All">
        All
      </button>

      <button onClick={handleBtns} value="react">
        React
      </button>

      <button onClick={handleBtns} value="javascript">
        Javascript
      </button>
      <button onClick={handleBtns} value="js_l">
        Javascript-урок
      </button>
      <button onClick={handleBtns} value="js_task">
        Javascript-задачки
      </button>
      <button onClick={handleBtns} value="css">
        Css
      </button>
      <button onClick={handleBtns} value="css2222">
        Css2222
      </button>
    </div>
  );
}