import express from 'express';
import MovieController from './movies.controller.js';
import ReviewsController from './reviews.controller.js';

const router = express.Router() //get access to express router

// single get req
router.route('/').get(MovieController.apiGetMovies); //each time there is a request for URL '/', we call MovieController
router.route("/id/:id").get(MovieController.apiGetMovieById);
router.route("/ratings").get(MovieController.apiGetRatings);

router
    .route("/review")
    .post(ReviewsController.apiPostReview)
    .put(ReviewsController.apiUpdateReview)
    .delete(ReviewsController.apiDeleteReview);

export default router; 

