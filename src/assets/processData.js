const processData = {
    // Return Filtered Array of Data
    filter: function (data, filterBy, filterValue) {
        const dataFiltered = [];

        for (let i = 0; i < data.length; i++) {

            if (filterBy === "firstName" && data[i].name.first === filterValue) {
                // Handle First Name
                dataFiltered.push(data[i]);
            }
            else if (filterBy === "lastName" && data[i].name.last === filterValue) {
                // Handle Last Name
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

                // If value is greater than next value, switch 
                if (i !== dataSorted.length - 1 && dataSorted[i][sortBy] > dataSorted[i + 1][sortBy]) {
                    hasSwitched = true;
                    let hold = dataSorted[i];
                    dataSorted[i] = dataSorted[i + 1];
                    dataSorted[i + 1] = hold;
                }
            }
        } while (hasSwitched === true);

        if (sortData === 'ascending') {
            return dataSorted;
        }
        else {
            return dataSorted.reverse();
        }

    }
}

export default processData;