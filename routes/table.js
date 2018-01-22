const express = require('express');
const router = express.Router();
const Table = require('../models/table');


router.post('/add_table', (req, res) => {
    let table = req.body;
    Table.addTable(table, function(err, table){
        if(err){
            res.json({success:false, message: `Failed to add table. Error: ${err}`});
        } else{
            res.json({success:true, message: "added successfully"});
        }
    });
});

router.put('/update_table/:id', (req, res) => {
    let id = req.params.id;
    let table = req.body;
    Table.editTable(id, table, function(err, table){
        if(err){
            res.json({success:false, message: `Failed to update table. Error: ${err}`});
        } else {
            res.json({success:true, message: "updated successfully"});
        }
    });
});

router.delete('/delete_table/:id', (req, res) => {
    Table.deleteTable(req.params.id, (err, table) => {
        if(err){
            res.json({success:false, message: `Failed to delete table. Error: ${err}`});
        } else {
            res.json({success:true, message: "Deleted successfully"});
        }
    });
});

router.get('/get_tables', (req, res) => {
    Table.getTables((err, tables) => {
        if(err){
            res.json({success:false, message: `Failed to get tables. Error: ${err}`});
        } else {
            res.json({success:true, message: "Fetched successfully", tables: tables});
        }
    });
});

router.get('/get_table_reservations/:id/:date', (req, res) => {
    Table.getTableReservations(req.params.id, req.params.date, (err, reservations) => {
        if(err){
            res.json({success:false, message: `Failed to get table Reservations. Error: ${err}`});
        }
        else {
            res.json({success:true, message: "Fetched successfully", reservations: reservations});
        }
    });
});

module.exports = router;