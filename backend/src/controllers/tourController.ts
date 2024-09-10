import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';
import Tour from '../model/tourModel';

export const checkBody = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing name or price',
    });
  }
  next();
};

export const getAllTours = async (req: Request, res: Response) => {
  try {
    const tours = await Tour.find();

    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (error) {}
};

export const getTour = async (req: Request, res: Response) => {
  const tour = await Tour.findById(req.params.id);

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};

export const createTour = async (req: Request, res: Response) => {
  fs.writeFile(
    path.join(__dirname, '../dev-data/tours-simple.json'),
    JSON.stringify(tours),
    (err) => {
      if (err) {
        return res.status(500).json({
          status: 'fail',
          message: 'Error writing file',
        });
      }
    }
  );
};

export const updateTour = async (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>',
    },
  });
};

export const deleteTour = async (req: Request, res: Response) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
