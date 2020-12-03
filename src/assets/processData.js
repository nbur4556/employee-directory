const processData = {
    // Return Filtered Array of Data
    filter: function (data, filterBy, filterValue) {
        const dataFiltered = [];

        for (let i = 0; i < data.length; i++) {
            let fullLocation = `${data[i].location.city} ${data[i].location.state}, ${data[i].location.country}`

            if (filterBy === "firstName" && data[i].name.first === filterValue) {
                // Handle First Name
                dataFiltered.push(data[i]);
            }
            else if (filterBy === "lastName" && data[i].name.last === filterValue) {
                // Handle Last Name
                dataFiltered.push(data[i]);
            }
            else if (filterBy === "location" && fullLocation === filterValue) {
                // Handle Location
                dataFiltered.push(data[i]);
            }
            else if (data[i][filterBy] === filterValue) {
                // Handle Default
                dataFiltered.push(data[i]);
            }
        }

        return dataFiltered;
    },

    //Return Sorted Array of Data
    sort: function (data, sortBy, sortData) {
        const dataSorted = data;
        let hasSwitched = false;

        // Bubble Sort Algorithm
        do {
            hasSwitched = false;

            for (let i = 0; i < dataSorted.length; i++) {
                if (sortBy === "firstName" && i !== dataSorted.length - 1 && dataSorted[i].name.first > dataSorted[i + 1].name.first) {
                    //Handle First Name
                    hasSwitched = true;
                    let hold = dataSorted[i];
                    dataSorted[i] = dataSorted[i + 1];
                    dataSorted[i + 1] = hold;
                }
                else if (sortBy === "lastName" && i !== dataSorted.length - 1 && dataSorted[i].name.last > dataSorted[i + 1].name.last) {
                    // Handle Last Name
                    hasSwitched = true;
                    let hold = dataSorted[i];
                    dataSorted[i] = dataSorted[i + 1];
                    dataSorted[i + 1] = hold;
                }
                else if (sortBy === "location" && i !== dataSorted.length - 1 && dataSorted[i].location.city > dataSorted[i + 1].location.city) {
                    // Handle Location
                    hasSwitched = true;
                    let hold = dataSorted[i];
                    dataSorted[i] = dataSorted[i + 1];
                    dataSorted[i + 1] = hold;
                }
                else if (i !== dataSorted.length - 1 && dataSorted[i][sortBy] > dataSorted[i + 1][sortBy]) {
                    // Handle Default
                    hasSwitched = true;
                    let hold = dataSorted[i];
                    dataSorted[i] = dataSorted[i + 1];
                    dataSorted[i + 1] = hold;
                }
            }
        } while (hasSwitched === true);

        if (sortData === 'descending') {
            return dataSorted.reverse();
        }
        else {
            return dataSorted
        }

    }
}

export default processData;