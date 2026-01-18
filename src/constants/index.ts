export const DEPARTMENTS = [
    'CS',
    "Math",
    "ENG"
];

export const DEPARTMENTS_OPTIONS = DEPARTMENTS.map((dept) => ({
    value: dept,
    label: dept,
}));

export const MOCK_SUBJECTS = [
    {
        id: 1,
        code: "CS-101",
        name: "Introduction to Computer Science",
        department: "CS",
        description: "Fundamental concepts of computer science including algorithms, data structures, and programming paradigms."
    },
    {
        id: 2,
        code: "MATH-201",
        name: "Linear Algebra",
        department: "Math",
        description: "Study of vector spaces, linear transformations, matrices, and their applications in engineering and science."
    },
    {
        id: 3,
        code: "ENG-150",
        name: "Academic Writing and Composition",
        department: "ENG",
        description: "Development of critical writing skills, including research, argumentation, and academic discourse."
    }
];