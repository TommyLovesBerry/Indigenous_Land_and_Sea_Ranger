class IndexController {
    async getAllData(req, res) {
        // Logic to get all data
        res.send("Get all data");
    }

    async getDataById(req, res) {
        // Logic to get data by ID
        const id = req.params.id;
        res.send(`Get data for ID: ${id}`);
    }

    async createData(req, res) {
        // Logic to create new data
        res.send("Create new data");
    }

    async updateData(req, res) {
        // Logic to update data
        const id = req.params.id;
        res.send(`Update data for ID: ${id}`);
    }

    async deleteData(req, res) {
        // Logic to delete data
        const id = req.params.id;
        res.send(`Delete data for ID: ${id}`);
    }
}

module.exports = IndexController;