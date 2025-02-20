import AcademicDepartment from "../pages/admin/academicManagement/AcademicDepartment";
import AcademicFaculty from "../pages/admin/academicManagement/AcademicFaculty";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import CreateAcademicDepartment from "../pages/admin/academicManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/academicManagement/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/admin/academicManagement/CreateAcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import { CreateAdmin } from "../pages/admin/userManagement/CreateAdmin";
import CreateFaculty from "../pages/admin/userManagement/CreateFaculty";
import CreateStudent from "../pages/admin/userManagement/CreateStudent";
import StudentData from "../pages/admin/userManagement/StudentData";
import StudentDetails from "../pages/admin/userManagement/StudentDetails";




export const adminPaths = [
    {
        name:"Dashboard",
        path:"dashboard",
        element:<AdminDashboard/>
    },
    {
        name:"Academic Management",
        children:[
            {
                name:"Academic Semester",
                path:"academic-semester",
                element:<AcademicSemester/>
            },
            {
                name:"Create A. Semester",
                path:"create-academic-semester",
                element:<CreateAcademicSemester/>
            },
            {
                name:"Academic Faculty",
                path:"academic-faculty",
                element:<AcademicFaculty/>
            },
            {
                name:"Create A. Faculty",
                path:"create-academic-faculty",
                element:<CreateAcademicFaculty/>
            },
            {
                name:"Academic Department",
                path:"academic-department",
                element:<AcademicDepartment/>
            },
            {
                name:"Create A. Department",
                path:"create-academic-department",
                element:<CreateAcademicDepartment/>
            },
        ]
    },
    {
        name:"User Management",
        children:[
            {
                name:"Create Student",
                path:"create-student",
                element:<CreateStudent/>
            },
            {
                name:"Student Data",
                path:"student",
                element:<StudentData/>
            },
            {
                name:"Student Details",
                path:"student/:studentId",
                element:<StudentDetails/>
            },
            {
                name:"Create Faculty",
                path:"create-faculty",
                element:<CreateFaculty/>
            },
            {
                name:"Create Admin",
                path:"create-admin",
                element:<CreateAdmin/>
            },
        ]
    },
]

