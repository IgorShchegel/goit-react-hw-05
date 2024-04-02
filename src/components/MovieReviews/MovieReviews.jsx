

const MovieReviews = ({ reviews }) => {
  return (
    <div>
    { reviews.length>0 ? reviews.map((review) => (
      <div key={review.id}>
        <h4>{review.author}</h4>
        <p>{review.content}</p>
      </div>
    )) : <p> We dont have any reviews for this movie </p>}
  </div>
  )
}

export default MovieReviews