const Service = require('../Models/Service');

// Add a new service
exports.addService = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    if (!name || !price) {
      return res.status(400).json({ message: 'Name and Price are required.' });
    }

    const newService = new Service({ name, description, price });
    const savedService = await newService.save();
    res.status(201).json(savedService);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all services
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a service
exports.updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;

    const updatedService = await Service.findByIdAndUpdate(
      id, { name, description, price }, { new: true, runValidators: true }
    );

    if (!updatedService) {
      return res.status(404).json({ message: 'Service not found.' });
    }

    res.status(200).json(updatedService);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a service
exports.deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedService = await Service.findByIdAndDelete(id);

    if (!deletedService) {
      return res.status(404).json({ message: 'Service not found.' });
    }

    res.status(200).json({ message: 'Service deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
