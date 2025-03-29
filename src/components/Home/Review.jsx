import React from 'react';
import { FaStar } from 'react-icons/fa';
import './Review.css';

const reviewsData = [
  {
    id: 1,
    name: 'The Modern Devi . . .',
    avatar: 'https://via.placeholder.com/50',
    stars: 5,
    date: '3 years ago',
    comment:
      'I have been ordering my favorite Ayurvedic and Indian skincare. Read more',
  },
  {
    id: 2,
    name: 'an Australia',
    avatar: 'https://via.placeholder.com/50',
    stars: 4,
    date: '2 years ago',
    comment:
      'I was looking for an Australian supplier of organic Ayurveda. Read more',
  },
  {
    id: 3,
    name: 'Mohsin',
    avatar: 'https://via.placeholder.com/50',
    stars: 5,
    date: '5 months ago',
    comment:
      "I've been using organic products and I'm so pleased. Read more",
  },
  {
    id: 4,
    name: 'John Mustary',
    avatar: 'https://via.placeholder.com/50',
    stars: 4,
    date: '1 month ago',
    comment:
      'Great shop... Great products... at a great price. Thank you. Read more',
  },
  {
    id: 5,
    name: 'Lisa Li',
    avatar: 'https://via.placeholder.com/50',
    stars: 5,
    date: '2 weeks ago',
    comment:
      'Great customer service and I received my item in the post very fast. Read more',
  },
];

const ReviewSection = () => {
  return (
    <div className="review-section">
      <h2 className="review-heading">Testimonials</h2>
      <div className="review-cards-container">
        {reviewsData.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-top">
              <img
                src={review.avatar}
                alt={review.name}
                className="review-avatar"
              />
              <div className="review-info">
                <h4 className="review-name">{review.name}</h4>
                <div className="review-stars">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>
                <span className="review-date">{review.date}</span>
              </div>
            </div>
            <p className="review-text">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
