import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import hogs from "../porkers_data";
import Filter from "./Filter";

function App() {
	const hogsEdit = hogs.map((hog) => {
		return {...hog, "selected": false}
	})
	const [hogsList, setHogsList] = useState(hogsEdit);
	const [sortState, setSortState] = useState("")
	function selectHog(selectedHog) {
		const newList = hogsList.map((hog) => {
			if (selectedHog === hog) {
				return {...hog, "selected": true}
			} else {
				return {...hog, "selected": false}
			}
		})
		setHogsList(newList);
	}
	function setFilter(status) {
		if (status === "All"){
			setHogsList(hogsEdit);
		} else if (status === "Greased") {
			const newList = hogsEdit.filter((hog) => {
				return hog.greased;
			})
			setHogsList(newList)
		} else {
			const newList = hogsEdit.filter((hog) => {
				return !hog.greased;
			})
			setHogsList(newList)
		}
	}
	function setSort(sortBy) {
		console.log(sortBy)
		const sorted = hogsList.sort((a, b) => {
			if (a[sortBy] > b[sortBy]) {
				return 1;
			}
			if (b[sortBy] > a[sortBy]) {
				return -1;
			}
			return 0;
		})
		console.log(sorted)
		setHogsList(sorted);
		setSortState(sortBy); //The page would not update until I added this. I am not sure why.
	}

	return (
		<div className="App">
			<Nav />
			<Filter setFilter={setFilter}/>

			<HogList hogs={hogsList} selectHog={selectHog} setSort={setSort}/>

		</div>
	);
}

export default App;
