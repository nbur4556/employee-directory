const processData = {
    // Return Filtered Array of Data
    filter: function (data, filterBy, filterValue) {
        const dataFiltered = [];

        for (let i = 0; i < data.length; i++) {
            if (data[i][filterBy] === filterValue) {
                dataFiltered.push(data[i]);
            }
        }

        return dataFiltered;
    },

    //Return Sorted Array of Data
    sort: function (data, filterBy, filterData) {
        const dataSorted = data;
        let hasSwitched = false;

        for (let i = 0; i < dataSorted.length; i++) {
            console.log(dataSorted[i][filterBy]);

            if (i !== dataSorted.length - 1 && dataSorted[i][filterBy] > dataSorted[i + 1][filterBy]) {
                hasSwitched = true;
                console.log(hasSwitched);
                let hold = dataSorted[i];
                dataSorted[i] = dataSorted[i + 1];
                dataSorted[i + 1] = hold;
            }
        }

        return dataSorted;
    }
}

export default processData;