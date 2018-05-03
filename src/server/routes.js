const express = require('express');
const router = express.Router();

const wakeupModes = [
    {"id": 1, "wakeup_mode": "Meowing loudly for food"},
    {"id": 2, "wakeup_mode": "Chasing a rattling toy across the floor"},
    {"id": 3, "wakeup_mode": "Repeatedly jumping on your bedroom doorknob"},
    {"id": 4, "wakeup_mode": "Vomiting on the carpet"}
 ];

router.get('/wakeupMode/:id', (req, res) => {
    const ourId = req.params["id"];
    var elem = wakeupModes.find( x => x.id == ourId);
    res.send(200, elem);
   });

router.get('/wakeupModes', (req, res) => {
    res.send(200, wakeupModes);
   });


module.exports=router;
