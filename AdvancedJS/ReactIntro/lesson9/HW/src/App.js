import React, { PureComponent, createContext } from "react";
import { generate as id } from "shortid";
import NewItem from "./components/NewItem";
import ListItems from "./components/ListItems";
import { defaultState } from "./data";

export const AppContext = createContext();
// const initialState = {
// 	items: defaultState,
// 	id: '',
// 	packed: false
// }
// const ADDITEM = 'ADDITEM';
// const TOGGLEITEM = 'TOGGLEITEM';
// const DELETEITEM = 'DELETEITEM';
// const MAKEALLUNPAKED = 'MAKEALLUNOACKED';
// function reducer(state, action) {
// 	switch (action.type) {
// 		case ADDITEM:
// 			return {
// 				value: this.initialState(({ items }) => ({
// 					items: [{ id: id(), value: state.value, packed: false }, ...items]
// 				}))
// 			};
// 		case TOGGLEITEM:
// 			return {
// 				id: this.initialState(({ items }) => ({
// 					items: items.map(item =>
// 						item.id === id ? { ...item, packed: !item.packed } : item)
// 				}))
// 			};
// 		case DELETEITEM:
// 			return {
// 				id: this.initialState(({ items }) => ({
// 					items: items.filter(item => item.id !== id)
// 				}))
// 			};
// 		case MAKEALLUNPAKED:
// 			return {
// 				items: this.initialState(({ items }) => ({
// 					items: items.map(item =>
// 						item.packed ? { ...item, packed: false } : item
// 					)
// 				}))
// 			};
// 		default:
// 			throw Error;
// 	};
// }
// const App = () => {
// 	const [state, dispatch] = useReducer(reducer, initialState);
// 	const addItem = () => dispatch({ type: ADDITEM });
// 	const toggleItem = () => dispatch({ type: 'TOGGLEITEM' });
// 	const deleteItem = () => dispatch({ type: 'DELETEITEM' });
// 	const makeAllUnpacked = () => dispatch({ type: 'MAKEALLUNPAKED' });

// 	// const { items } = state.items;
// 	console.log(state.items);
// 	const items = state.items;

// 	const packedItems = items.filter(item => item.packed);
// 	const unPackedItems = items.filter(item => !item.packed);

// 	return (
// 		<AppContext.Provider value={state.value}>
// 			<div className="container py-3">
// 				<NewItem addItem={addItem} />
// 				<div className="row">
// 					<div className="col-md-5">
// 						<ListItems title="Unpacked Users" items={unPackedItems} />
// 					</div>
// 					<div className="offset-md-2 col-md-5">
// 						<ListItems title="Packed Users" items={packedItems} />
// 						<button
// 							onClick={makeAllUnpacked}
// 							className="btn btn-danger btn-lg btn-block"
// 						>
// 							Mark All As Unpacked
//               </button>
// 					</div>
// 				</div>
// 			</div>
// 		</AppContext.Provider>
// 	);
// }
class App extends PureComponent {
	addItem = value =>
		this.setState(({ items }) => ({
			items: [{ id: id(), value, packed: false }, ...items]
		}));

	toggleItem = id =>
		this.setState(({ items }) => ({
			items: items.map(item =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		}));

	deleteItem = id =>
		this.setState(({ items }) => ({
			items: items.filter(item => item.id !== id)
		}));

	makeAllUnpacked = () =>
		this.setState(({ items }) => ({
			items: items.map(item =>
				item.packed ? { ...item, packed: false } : item
			)
		}));

	state = {
		items: defaultState,
		deleteItem: this.deleteItem,
		toggleItem: this.toggleItem
	};

	useEffect(
		() => {
	const addItems = addItem();
	return () => {
		addItems.deleteItem();
	};
}, [props.items]);


render() {
	const { items } = this.state;

	const packedItems = items.filter(item => item.packed);
	const unPackedItems = items.filter(item => !item.packed);

	return (
		<AppContext.Provider value={this.state}>
			<div className="container py-3">
				<NewItem addItem={this.addItem} />
				<div className="row">
					<div className="col-md-5">
						<ListItems title="Unpacked Users" items={unPackedItems} />
					</div>
					<div className="offset-md-2 col-md-5">
						<ListItems title="Packed Users" items={packedItems} />
						<button
							onClick={this.makeAllUnpacked}
							className="btn btn-danger btn-lg btn-block"
						>
							Mark All As Unpacked
              </button>
					</div>
				</div>
			</div>
		</AppContext.Provider>
	);
}
}

export default App;
