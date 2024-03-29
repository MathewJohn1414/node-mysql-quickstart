# node-mysql-quickstart
This is a sample NodeJs-MySQL API Project using Express. 

### Prerequisite
-- [Postman](https://www.getpostman.com/ "Postman") or any other REST client to test the APIs.<br/>
-- MySQL Server should be installed and configured.<br/>
-- A test database and table in MySql as mentioned below:
&nbsp;&nbsp;&nbsp;&nbsp;Database Name: my_test_db<br/>
&nbsp;&nbsp;&nbsp;&nbsp;Table Name: test_data<br/>
&nbsp;&nbsp;&nbsp;&nbsp;Table fields: id, name, age, gender

You can use the below MySql script to create the required test database and table:

```sql	
CREATE DATABASE  IF NOT EXISTS `my_test_db`;
USE `my_test_db`;
CREATE TABLE `test_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
);
```

### About the Project Configuration
This project uses a single `.env` file which contains all the configurations required to run this node application. So, its **mandatory** to update the `.env` file before running this application.
Note: You don't need to commit `.env` file to git.

### Getting Started

Just clone the repo and run :

```bash
cd node-mysql-quickstart                  # Change current directory to the newly cloned directory.
npm install --also-dev                      # install all the node dependencies
```

To start server:

```bash
npm start
```

You can also start server using [nodemon](https://www.npmjs.com/package/nodemon "nodemon"):

```bash
npm run devstart
```

The details about the running API server become available at the console.

### Test APIs
| Method  | Route  | Input Parameter Keys  | Sample Output  |
| ------------ | ------------ | ------------ | ------------ |
| Get  | /  |   | Its working!  |
| Get  | /api  |   | api root has no operation  |
| Get  | /api/testGet  |   | { "status": "success", "message": "message from sample_testGet_get"}  |
| Post  | /api/testPost  |   | {"status": "success","message": "message from sample_testPost_post"}  |
| Get  | /api/testGetParameters  | myParam1, myParam2  | {"status":"success","message":"parameters received. myParam1:Test Value1, myParam2: Test Value2"}  |
| Post  | /api/testPostParameters  | myParam1, myParam2  | {"status":"success","message":"parameters received. myParam1:Test Value1, myParam2: Test Value2"}  |
| Post  | /api/insertData  | name,age,gender  | {"status":"success","message":"data inserted"}  |
| Get  | /api/selectData  |   | [{"id":6,"name":"Mathew","age":25,"gender":"Male"}]  |
| Post  | /api/deleteData  | id  | {"status":"success","message":"data deleted"}  |

You can find the Postman collection for testing this APIs from the `Postman_collection` folder. You can safely remove this folder from project after importing it to the Postman.

### End
