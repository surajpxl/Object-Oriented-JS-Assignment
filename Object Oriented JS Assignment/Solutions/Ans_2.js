// The Student class will manage individual student details and their enrolled courses.
class Student {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.courses = []; // A list of courses the student is enrolled in
  }

  // Method to enroll the student in a course
  enroll(course) {
    if (!this.courses.includes(course)) {
      this.courses.push(course);
      console.log(`${this.name} has successfully enrolled in ${course}.`);
    } else {
      console.log(`${this.name} is already enrolled in ${course}.`);
    }
  }

  // Method to display the student's enrolled courses
  displayCourses() {
    if (this.courses.length === 0) {
      console.log(`${this.name} is not enrolled in any courses.`);
    } else {
      console.log(`${this.name} is enrolled in the following courses:`);
      this.courses.forEach(course => {
        console.log(`- ${course}`);
      });
    }
  }
}

// The Admission class will manage the system's students and courses.
class Admission {
  constructor() {
    this.students = []; // List of enrolled students
    this.courses = [];  // List of available courses
  }

  // Method to add a student to the enrollment system
  addStudent(student) {
    if (!this.students.some(s => s.id === student.id)) {
      this.students.push(student);
      console.log(`Student ${student.name} (ID: ${student.id}) has been added to the system.`);
    } else {
      console.log(`Student with ID ${student.id} already exists.`);
    }
  }

  // Method to add a course to the system
  admitCourse(course) {
    if (!this.courses.includes(course)) {
      this.courses.push(course);
      console.log(`Course "${course}" has been added to the system.`);
    } else {
      console.log(`Course "${course}" is already available in the system.`);
    }
  }

  // Method to display all students and their enrolled courses
  displayEnrolledStudents() {
    if (this.students.length === 0) {
      console.log("No students enrolled in the system.");
    } else {
      console.log("List of enrolled students and their courses:");
      this.students.forEach(student => {
        console.log(`${student.name} (ID: ${student.id}) is enrolled in:`);
        student.displayCourses();
      });
    }
  }
}

// Example..

// Create an Admission system instance
const admissionSystem = new Admission();

// Create students
const student1 = new Student("Alice", 1);
const student2 = new Student("Bob", 2);
const student3 = new Student("Charlie", 3);

// Add students to the admission system
admissionSystem.addStudent(student1);
admissionSystem.addStudent(student2);
admissionSystem.addStudent(student3);

// Add courses to the admission system
admissionSystem.admitCourse("Math 101");
admissionSystem.admitCourse("Physics 101");
admissionSystem.admitCourse("History 201");

// Students enroll in courses
student1.enroll("Math 101");
student1.enroll("Physics 101");
student2.enroll("History 201");
student3.enroll("Math 101");
student3.enroll("History 201");

// Display enrolled students and their courses
admissionSystem.displayEnrolledStudents();

// Display individual student's courses
student1.displayCourses();
student2.displayCourses();
student3.displayCourses();
