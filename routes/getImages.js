const express = require("express");
const router = express.Router();
const { asyncMySQL } = require("../mysql/driver");
const { getPicturesWithSyllables, getPictures } = require("../mysql/queries");

router.get("/", async (req, res) => {
  const { speech_sound, syllables } = req.query;

  try {
    if (syllables) {
      const results = await asyncMySQL(
        getPicturesWithSyllables(speech_sound, syllables)
      );
      return res.status(200).send(results);
    }

    const results = await asyncMySQL(getPictures(speech_sound));
    return res.status(200).send(results);
  } catch (e) {
    console.error("Error obtaining images", e);
    res.status(400).send("Error retrieving photos");
  }
});

module.exports = router;
