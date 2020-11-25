const processData = {
    filter: function (data, filterBy, filterValue) {
        const dataFiltered = [];

        for (let i = 0; i < data.length; i++) {
            if (data[i][filterBy] === filterValue) {
                dataFiltered.push(data[i]);
            }
        }

        return dataFiltered;
    },

    sort: function (data) {
        return data;
    }
}

export default processData;