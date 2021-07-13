// router/index.js
import Index from '../page/Index/Index'
import Student from '../page/Student/Student'

const routes = [
  {
    path: "/index",
    component: Index
  },
  {
    path: "/student",
    component: Student
  }
];

export default routes