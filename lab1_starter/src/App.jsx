import { useState } from 'react';
import { courses as initialCourses } from './data/courses';

function CourseCard({ course }) {
  return (
    <article className='card'>
      <h2>{course.title}</h2>
      <p><strong>Student:</strong> {course.student}</p>
      <p><strong>Lecturer:</strong> {course.lecturer}</p>
      <p>Progress: {course.progress}%</p>
      <strong>{course.completed ? 'Completed' : 'In progress'}</strong>
    </article>
  );
}

export default function App() {
  const [courses] = useState(initialCourses);

  return (
    <main style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Student Course Dashboard</h1>
      
      {courses.length === 0 ? (
        <p>No courses available.</p>
      ) : (
        <section className='grid'>
          {courses.map(c => (
            <CourseCard key={c.id} course={c} />
          ))}
        </section>
      )}
    </main>
  );
}