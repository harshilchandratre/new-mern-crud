const Name = require("../models/Name");

// POST
exports.createName = async (req, res) => {
  const { name } = req.body;
  try {
    const newName = new Name({ name });
    await newName.save();
    res.status(201).json(newName);
  } catch {
    res.status(500).json({ message: "Error creating name!" });
  }
};

// GET
exports.getName = async (req, res) => {
  try {
    const names = await Name.find();
    res.status(201).json(names);
  } catch {
    res.status(500).json({ message: "Error fetching names!" });
  }
};

// DELETE
exports.removeName = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedName = await Name.findByIdAndDelete(id);
    if (!deletedName) {
      res.status(404).json({ message: "Name not found!" });
    }
    res.status(200).json({ message: `${id} Name deleted successfully!` });
  } catch (err) {
    res.status(500).json({ message: `Error! ${err}` });
  }
};
