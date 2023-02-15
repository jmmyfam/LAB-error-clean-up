import studentsOnDom from '../public/students';
import { houses, students } from './sample_data/arrays';

const sortStudent = (e) => {
  e.preventDefault();
  const sortingHat = houses[Math.floor(Math.random() * houses.length)];

  if (e.target.id === 'sorting') {
    const student = document.querySelector('#student-name');
    // Create a new ID for the students
    const createId = (array) => {
      if (array.length) {
        const idArray = array.map((el) => el.id);
        return Math.max(...idArray) + 1;
      }
      return 0;
    };

    // create the new student object
    students.push({
      id: createId(students),
      name: student.value,
      house: sortingHat.house,
      crest: sortingHat.crest
    });

    student.value = ''; // reset value of input
    studentsOnDom('#students', students);
  }
};

document.querySelector('#sorting').addEventListener('submit', sortStudent);

export default sortStudent;
