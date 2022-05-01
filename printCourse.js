/**
 * @fileoverview Imprime en consola los cursos y sus estudiante, y los cursos de cada estudiante.
 * @author Andres Zúñiga <andres.zuniga.063@gmail.com>
 * @version 1.0.0
 */

const courses = [
  { _id: 1, title: "JavaScript I" },
  { _id: 2, title: "HTML y CSS I" },
];

const students = [
  { _id: 1, name: "Pedro Perez" },
  { _id: 2, name: "Maria Gomez" },
];

const enrollments = [
  { course_id: 1, student_id: 1 },
  { course_id: 2, student_id: 1 },
  { course_id: 2, student_id: 2 },
];

/**
 * Imprime en consola los cursos y los estudiantes
 * que están inscritos.
 */
const printCourses = () => {
  let text = "";
  courses.forEach((course) => {
    //Se agrega el nombre del curso
    text += `- ${course.title}\n`;
    //Se agregan los estudiantes a la texta.
    const students = getStudents(course);
    students.forEach((student) => {
      text += `  * ${student.name}\n`;
    });
  });

  console.log(text);
};

/**
 * Imprime en consola los estudiantes y los cursos a los
 * que estos pertenecen.
 */
const printStudents = () => {
  let text = "";
  students.forEach((student) => {
    //Se agrega del estudiante
    text += `- ${student.name}\n`;
    //Se agregan los cursos a los que se inscribio.
    const courses = getCourses(student);
    courses.forEach((course) => {
      text += `  * ${course.title}\n`;
    });
  });

  console.log(text);
};

/**
 * Recupera los estudiantes que petenecen al curso
 * @param {Object} course
 * @return {Array}
 */
const getStudents = (course) => {
  const list = [];

  enrollments.forEach((enrollment) => {
    const { course_id, student_id } = enrollment;
    if (course_id === course._id) {

      const student = students.find((student) => student._id === student_id);
      if (student) list.push(student);
    }
  });

  return list;
};

/**
 * Recupera los cursos en los que está inscrito el estudiante.
 * @param {Object} student
 * @return {Array}
 */
const getCourses = (student) => {
  const list = [];
  enrollments.forEach((enrollment) => {
    const { course_id, student_id } = enrollment;

    if (student_id === student._id) {
      const course = courses.find((course) => course._id === course_id);
      if (course) list.push(course);
    }
  });

  return list;
};

printCourses();
printStudents();
