const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Reservation = require('./reservation');

const Schema = mongoose.Schema;

const tableSchema = new Schema({
    section: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    __v: { type: Number, select: false }
});

tableSchema.plugin(AutoIncrement, { inc_field: 'id' });
module.exports.tableSchema = tableSchema;

const Table = mongoose.model('table', tableSchema);
module.exports.Table = Table;


addTable = function (table, cb) {
    Table.create(table, cb);
}

module.exports.addTable = addTable;


editTable = function (id, table, cb) {
    Table.update({ name: table.name }, table, cb);
}

module.exports.editTable = editTable;


deleteTable = function (id, cb) {
    Table.findByIdAndRemove({ _id: id }, cb);
}

module.exports.deleteTable = deleteTable;

getTables = function (cb) {
    Table.find({}, null, { sort: { 'id': 1 } }, cb);
}

module.exports.getTables = getTables;


getTable = function (id, cb) {
    Table.find({ id: id }, cb);
}

module.exports.getTable = getTable;


getTableReservations = function (id, date, cb) {
    console.log('date', date);

    Reservation.Reservation.find({
        'attributes.table_number': id,
        'attributes.date_time': {
            $gte: new Date(date),
            $lt: new Date(date).getTime() + 86400000
        }
    }, cb);
}

module.exports.getTableReservations = getTableReservations;