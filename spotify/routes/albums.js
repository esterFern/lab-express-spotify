const express = require('express');
const router = express.Router();

router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  res.render('albums');
  // try {
  //   const beer = await punkAPI.getBeer(id);
  //   if (beer.statusCode >= 400 && beer.statusCode < 500) {
  //     next();
  //     return;
  //   }
  //   res.render('beer-detail', { beer: beer[0] });
  // } catch (error) {
  //   next(error);
  // }
});

module.exports = router;
