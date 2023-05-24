const { mongoose } = require('mongoose');
const config = require('../config');
const { setValue } = require('./data-setting');

class DatabaseHandler {

    async handleDBCount(gauge, params) {
        try {
            const collections = await mongoose.connection.db.listCollections().toArray();
            const length = collections.length;
            setValue(gauge, length, params);
        } catch (err) {
            console.log('Error handling DBCount:', err);
        }
    }

    async handleCollectionCount(gauge, params) {
        try {
            const collectionName = params.Value;
            const Collection = await mongoose.connection.collection(collectionName);
            const count = await Collection.countDocuments({});
            setValue(gauge, count, params);
        } catch (err) {
            console.log('Error handling CollectionCount:', err);
        }
    }
    async connect(params, gauge) {
        try {
            await mongoose.connect(config.get('databaseURL'));
            if (params.MetricName === 'DBCount') {
                await this.handleDBCount(gauge, params);
            } else if (params.MetricName === 'CollectionCount') {
                await this.handleCollectionCount(gauge, params);
            } else {
                console.log('No data added');
            }
        } catch (err) {
            console.log('Error in connecting to the database:', err);
        }
    }


}

module.exports = DatabaseHandler;