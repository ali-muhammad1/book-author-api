const mongoose = require("mongoose");
const bookModel = require("../../models/books.model");

const getAll = async (req, res) => {
  try {
    let data = await bookModel.find().populate("author").exec();
    res.send({ data: data });
  } catch (e) {
    res.send({ error: e, status: 404 });
  }
};

const addOne = async (req, res) => {
  try {
    let add = await bookModel(req.body).save();
    res.send({ data: add, status: 200 });
  } catch (e) {
    res.send({ error: e, status: 500 });
  }
};

const updateOne = async (req, res) => {
  try {
    let update = await bookModel.updateOne(
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
    let deleteOne = await bookModel.deleteOne({ _id: req.params.id });
    if (deleteOne) {
      res.send({ data: deleteOne, status: 200 });
    }
  } catch (e) {
    res.send({ error: e, status: 500 });
  }
};

const getOneById = async (req, res) => {
  try {
    let data = await bookModel
      .findOne({ _id: req.params.id })
      .populate("author")
      .exec();
    res.send({ data: data, status: 200 });
  } catch (e) {
    res.send({ error: e, status: 500 });
  }
};

module.exports = { getAll, addOne, updateOne, deleteOne, getOneById };
