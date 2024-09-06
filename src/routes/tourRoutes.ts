import { Router } from 'express';
import * as routerControllers from './../controllers/tourController';

const router = Router();

router.route('/')
    .get(routerControllers.getAllTours)
    .post(routerControllers.checkBody, routerControllers.createTour);

router.route('/:id')
    .get(routerControllers.getTour)
    .patch(routerControllers.updateTour)
    .delete(routerControllers.deleteTour);


export default router;