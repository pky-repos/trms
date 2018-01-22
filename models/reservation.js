const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const contactDetailsSchema = new Schema({
    name: String,
    email: String,
    __v: { type: Number, select: false}
});

const reservationAttributesSchema = new Schema({
    date_time:{
        type: Date,
        required: false
    },
    slot_start:{
        type: Number,
        required: true,
    },
    slot_end:{
        type: Number,
        required: true,
    },
    guest_count:{
        type: Number,
        required: true,
    },
    table_number:{
        type: Number,
        required: true,
    },
    guest_mobile_num: String,
    contact_details: contactDetailsSchema,
    tags: [String],
    status: String,
    __v: { type: Number, select: false}
});

const reservationSchema = new Schema({
    type:{
        type: String,
        required: true
    },  
    attributes:{
        type: reservationAttributesSchema,
        required: true,
    },
    __v: { type: Number, select: false}
});

reservationSchema.plugin(AutoIncrement, {inc_field: 'reservation_id'});

module.exports.reservationSchema = reservationSchema;

const Reservation = mongoose.model('reservation', reservationSchema);
module.exports.Reservation = Reservation;


addReservation = function(reservation, cb){
    Reservation.create(reservation, cb);
}

module.exports.addReservation = addReservation;


updateReservation = function(id, reservation, cb){
    Reservation.update({reservation_id: id}, reservation, cb);
}

module.exports.updateReservation = updateReservation;


deleteReservation = function(id, cb){
    Reservation.findOneAndRemove({reservation_id: id}, cb);
}

module.exports.deleteReservation = deleteReservation;

getReservation = function(id, cb){
    Reservation.findOne({reservation_id: id}, cb);
}

module.exports.getReservation = getReservation;
