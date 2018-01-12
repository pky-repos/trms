const express = require('express');
const router = express.Router();
const Table = require('../models/table');


router.post('/add_table', (req, res) => {
    let table = req.body;
    Table.addTable(table, function(err, table){
        if(err){
            res.json({success:false, message: `Failed to add the table. Error: ${err}`});
        } else{
            res.json({success:true, message: "added successfully"});
        }
    });
});

router.put('/edit_table/:id', (req, res) => {
    let id = req.params.id;
    let table = req.body;
    Table.editTable(id, table, function(err, table){
        if(err){
            res.json({success:false, message: `Failed to update the table. Error: ${err}`});
        } else {
            res.json({success:true, message: "updated successfully"});
        }
    });
});

router.delete('/delete_table/:id', (req, res) => {
    Table.deleteTable(req.params.id, (err, table) => {
        if(err){
            res.json({success:false, message: `Failed to delete the table. Error: ${err}`});
        } else {
            res.json({success:true, message: "Deleted successfully"});
        }
    });
});

router.get('/get_tables', (req, res) => {
    Table.getTables((err, tables) => {
        if(err){
            res.json({success:false, message: `Failed to get the tables. Error: ${err}`});
        } else {
            res.json({success:true, message: "Fetched successfully", tables: tables});
        }
    });
});

router.get('/get_table_reservations/:id', (req, res) => {
    Table.getTableReservations(req.params.id, (err, reservations) => {
        if(err){
            res.json({success:false, message: `Failed to get the table Reservations. Error: ${err}`});
        }
        else {
            res.json({success:true, message: "Fetched successfully", reservations: reservations});
        }
    });
});

module.exports = router;