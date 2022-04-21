const express = require("express");
const router = express.Router();
const Uri = require("../models/uri.model");
const validUrl = require("valid-url");

// const baseURI = https://url-shortner-custom.herokuapp.com

router.get("", async (req, res) => {
  try {
    const data = await Uri.find().lean().exec();
    return res.status(200).send(data);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.get("/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const result = await Uri.findOne({ uricode: name }).lean().exec();
    if (result) {
      return res.status(200).send(result);
    } else {
      return res.status(404).send({ message: "User Not Found" });
    }
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.post("/make-short", async (req, res) => {
  try {
    if (validUrl.isUri(req.body.longuri)) {
      const data = await Uri.find().lean().exec();
      const filterD = data.filter(
        (e) => e.uricode == req.body.uricode && e.longuri == req.body.longuri
      );
      if (filterD) {
        return res.status(404).send({ message: "URI Already in use" });
      }
      const generated = await Uri.create({
        uricode: req.body.uricode,
        longuri: req.body.longuri,
      });
      return res.status(201).send(generated);
    } else {
      return res.status(404).send({ message: "URI is not valid" });
    }
  } catch (err) {
    return res.status(500).send(err);
  }
});

// router.delete("/:id", async (req, res) => {
//   try {
//     const res = await Uri.findByIdAndDelete(req.params.id).lean().exec();
//     return res.send(res);
//   } catch (err) {
//     return res.status(500).send(err);
//   }
// });
module.exports = router;
