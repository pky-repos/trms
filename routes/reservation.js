const express = require('express');
const router = express.Router();
const Reservation = require('../models/reservation');


router.post('/add_reservation', (req, res) => {
    let reservation = req.body;
    Reservation.addReservation(reservation, function(err, reservation){
        if(err){
            res.json({success:false, message: `Failed to add the reservation. Error: ${err}`});
        }
        res.json({success:true, message: "added successfully"});
    });
});

router.put('/edit_reservation/:id', (req, res) => {
    let id = req.params.id;
    let reservation = req.body;
    Reservation.editReservation(id, reservation, function(err, reservation){
        if(err){
            res.json({success:false, message: `Failed to update the reservation. Error: ${err}`});
        }
        res.json({success:true, message: "updated successfully"});
    });
});

router.delete('/delete_reservation/:id', (req, res) => {
    Reservation.deleteReservation(req.params.id, (err, reservation) => {
        if(err){
            res.json({success:false, message: `Failed to delete the reservation. Error: ${err}`});
        }
        res.json({success:true, message: "Deleted successfully"});
    });
});

module.exports = router;