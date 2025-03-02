function getPicturesWithSyllables(speechSound, syllables) {
  return `Select * 
            FROM images
              WHERE speech_sound = "${speechSound}"
                AND syllables = ${syllables};
               `;
}

function getPictures(speechSound) {
  return `Select * 
            FROM images
              WHERE speech_sound = "${speechSound}"
                ;
               `;
}

module.exports = {
  getPicturesWithSyllables,
  getPictures,
};
