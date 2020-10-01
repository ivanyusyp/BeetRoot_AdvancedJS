import React, { useState, useRef, useEffect } from "react";

const Timer = () => {
	const [lapse, setLapse] = useState(0);
	const [running, setRunning] = useState(false);
	const intervalRef = useRef();
	useEffect(() => {
		clearInterval(intervalRef.current)
	}, []);

	const handleRunning = () => {
		if (running) {
			clearInterval(intervalRef.current)
		} else {
			const startTime = Date.now() - lapse;

			intervalRef.current = setInterval(() => {
				setLapse(Date.now() - startTime)
			}, 0)
		}

		setRunning(!running)
	}
	const handleClear = () => {
		clearInterval(intervalRef.current);
		setLapse(0)
		setRunning(false);
	}
	return (
		<>
			<h3>Time: {lapse} </h3>
			<button onClick={handleRunning} className="btn btn-primary btn-lg mr-3">
				{running ? 'Stop' : 'Start'}
			</button>
			<button onClick={handleClear} className="btn btn-success btn-lg">
				Clear
      </button>
		</>
	);
};

// function TimerWrap() {
//   const [isMount, setIsMount] = useState(false);
//   return (
//     <>
//       <h1>Timer</h1>
//       <div className="custom-control custom-checkbox">
//         <input
//           value={isMount}
//           onChange={() => setIsMount(!isMount)}
//           checked={isMount}
//           type="checkbox"
//           id="mounted"
//           className="custom-control-input"
//         />
//         <label htmlFor="mounted" className="custom-control-label">
//           {isMount ? "Unmount" : "Mount"}
//         </label>
//       </div>
//       {isMount && <Timer />}
//     </>
//   );
// }

export default Timer;
