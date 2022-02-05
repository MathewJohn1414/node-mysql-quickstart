const mysql_pool = require('../resources/dbConnection').mysql_pool;

// Create get testGet
exports.sample_testGet_get = (req, res, next) => {
    res.json({ "status": "success", "message": "message from sample_testGet_get" });
};

// Create post testPost
exports.sample_testPost_post = (req, res, next) => {
    res.json({ "status": "success", "message": "message from sample_testPost_post" });
};

// Create get testGetParameters
exports.sample_testGetParameters_get = (req, res, next) => {
    let myParam1;
    let myParam2;
    if (req.query.myParam1) myParam1 = req.query.myParam1;
    if (req.query.myParam2) myParam2 = req.query.myParam2;
    if (myParam1 && myParam2) {
        res.json({ "status": "success", "message": "parameters received. myParam1:" + myParam1 + ", myParam2: " + myParam2 });
    } else {
        res.json({ "status": "error", "message": "missing parameter" });
    }
};

// Create get testPostParameters
exports.sample_testPostParameters_post = (req, res, next) => {
    let myParam1;
    let myParam2;
    if (req.body.myParam1) myParam1 = req.body.myParam1;
    if (req.body.myParam2) myParam2 = req.body.myParam2;
    if (myParam1 && myParam2) {
        res.json({ "status": "success", "message": "parameters received. myParam1:" + myParam1 + ", myParam2: " + myParam2 });
    } else {
        res.json({ "status": "error", "message": "missing parameter" });
    }
};


// Create get selectData
exports.sample_selectData_get = (req, res, next) => {
    mysql_pool.getConnection((err, db_connection) => {
        if (err) {
            res.json(err);
        } else {
            db_connection.query('select * from test_data;', (err, results, fields) => {
                db_connection.release();
                if (err)
                    res.json(err);
                else
                    if(results.length){
                        res.json(results);
                    } else {
                        res.json({ "status": "error", "message": "No data found in database. Please insert data first." });
                    }
            })
        }
    });
};

// Create post insertData
exports.sample_insertData_post = (req, res, next) => {
    let name;
    let age;
    let gender;
    if (req.body.name) name = req.body.name;
    if (req.body.age) age = req.body.age;
    if (req.body.gender) gender = req.body.gender;
    if (name && age && gender) {
        mysql_pool.getConnection((err, db_connection) => {
            if (err) {
                res.json(err);
            } else {
                db_connection.query("insert into test_data(name,age,gender) values('" + name + "','" + age + "','" + gender + "')", function (err, results, fields) {
                    db_connection.release();
                    if (err)
                        res.json(err);
                    else {
                        res.json({ "status": "success", "message": "data inserted" });
                    }
                })
            }
        });
    } else {
        res.json({ "status": "error", "message": "missing parameter" });
    }
};

// Create post deleteData
exports.sample_deleteData_post = (req, res, next) => {
    let id;
    if (req.body.id) id = req.body.id;
    if (id) {
        mysql_pool.getConnection((err, db_connection) => {
            if (err) {
                res.json(err);
            } else {
                db_connection.query("delete from test_data where id=" + id + " limit 1", (err, results, fields) => {
                    db_connection.release();
                    if (err)
                        res.json(err);
                    else {
                        switch (results.affectedRows) {
                            case 0:
                                res.json({ "status": "error", "message": "no data deleted. id provided is invalid." });
                                break;
                            case 1:
                                res.json({ "status": "success", "message": "data deleted" });
                                break;
                            default:
                                res.json({ "error": "success", "message": "unexpected error occured." });
                        }
                    }
                })
            }
        });
    } else {
        res.json({ "status": "error", "message": "missing parameter" });
    }
};