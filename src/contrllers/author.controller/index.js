const authorModel = require("../../models/author.model");
const mongoose = require("mongoose");

const getAll = async (req, res) => {
  try {
    let data = await authorModel.find().populate({ path: "authorBooks" });
    res.send({ data: data });
  } catch (e) {
    res.send({ error: e, status: 404 });
  }
};

const addOne = async (req, res) => {
  try {
    let add = await authorModel(req.body).save();
    res.send({ data: add, status: 200 });
  } catch (e) {
    res.send({ error: e, status: 500 });
  }
};

const updateOne = async (req, res) => {
  try {
    let update = await authorModel.updateOne(
      { _id: mongoose.Types.ObjectId(req.params.id) },
      { $set: req.body },
    );
    res.send({ data: update, status: 200 });
  } catch (e) {
    res.send({ error: e, status: 500 });
  }
};

const deleteOne = async (req, res) => {
  try {
    let deleteOne = await authorModel.deleteOne({ _id: req.params.id });
    if (deleteOne) {
      res.send({ data: deleteOne, status: 200 });
    }
  } catch (e) {
    res.send({ error: e, status: 500 });
  }
};

const getOneById = async (req, res) => {
  try {
    let data = await authorModel
      .findOne({ _id: req.params.id })
      .populate({ path: "authorBooks" });
    res.send({ data: data, status: 200 });
  } catch (e) {
    res.send({ error: e, status: 500 });
  }
};

module.exports = { getAll, addOne, updateOne, deleteOne, getOneById };
