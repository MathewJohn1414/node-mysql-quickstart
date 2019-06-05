const express = require('express');
const router = express.Router();

// Require controller modules.
const sample_controller = require('../controllers/sampleController');

router.get('/',(req, res)=> {
    res.send('api root has no operation');
});

///------------------------------ SAMPLE CONTROLLER ROUTES -------------------------------------///

/* GET request to test get request */
router.get('/testGet',sample_controller.sample_testGet_get);

/* POST request to test post request */
router.post('/testPost',sample_controller.sample_testPost_post);

/* GET request to test get request having parameters */
router.get('/testGetParameters',sample_controller.sample_testGetParameters_get);

/* POST request to test post request having parameters */
router.post('/testPostParameters',sample_controller.sample_testPostParameters_post);

/* GET request to fetch data from a table*/
router.get('/selectData',sample_controller.sample_selectData_get);

/* POST request to insert data to a table*/
router.post('/insertData',sample_controller.sample_insertData_post);

/* POST request to delete data from a table*/
router.post('/deleteData',sample_controller.sample_deleteData_post);

module.exports=router;