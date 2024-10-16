const express = require('express');
const router = express.Router();
const {
  addService,
  getAllServices,
  updateService,
  deleteService
} = require('../serviceControllers/serviceController');

// Add a new service
router.post('/', addService);

// Get all services
router.get('/', getAllServices);

// Update a service
router.put('/:id', updateService);

// Delete a service
router.delete('/:id', deleteService);

module.exports = router;
