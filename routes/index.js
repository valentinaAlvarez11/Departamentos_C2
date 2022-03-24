const express = require('express')
const departamentsRouter = require ('./departaments.router')

function routerApi(my_app){
  const router = express.Router();
  /*Endopint estatico http://localhost:4000/api/v1 */
  my_app.use('/api/v1', router);
  /*Endopint estatico http://localhost:4000/api/v1/departaments */
  router.use('/departaments', departamentsRouter);
}

module.exports = routerApi