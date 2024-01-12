
import React from 'react';
import styles from './CourseCard.module.css';
import Head from 'next/head';  


const CourseCard = ({ course, handleViewDetails }) => {
  const handleDetailsClick = () => {
    handleViewDetails(course.title);
  };

  return (
    <div>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>
    <div className={styles.courseCard} onClick={handleDetailsClick}>
      <img src={course.image} alt={course.title} />
      <div className={styles.cardOverlay}>
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <p>{course.advantages}</p>
        <button className={styles.viewDetailsButton} onClick={handleDetailsClick}>
          View Details
        </button>
        </div>
      </div>
    </div>

  );
};

export default CourseCard;
