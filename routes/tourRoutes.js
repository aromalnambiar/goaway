const express = require('express');
const routerControllers = require('./../controllers/tourController');

const router = express.Router();

router.param('id', routerControllers.checkID)

router.route('/')
    .get(routerControllers.getAllTours)
    .post(routerControllers.checkBody, routerControllers.createTour);

router.route('/:id')
    .get(routerControllers.getTour)
    .patch(routerControllers.updateTour)
    .delete(routerControllers.deleteTour);


module.exports = router;