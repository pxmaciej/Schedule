const src = "http://www.plan.pwsz.legnica.edu.pl/";
const department = [
    "Wydział Nauk o Zdrowiu i Kulturze Fizycznej",
    "Wydział Nauk Technicznych i Ekonomicznych",
    "Wydział Nauk Społecznych i Humanistycznych",
    "Wychowanie fizyczne",
    "Erasmus",
];
const courses = [
    {
        department: department[0],
        cours: [
            {
                name: "Dietetyka 1- studia stacjonarne (s1D)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s1D",
            },
            {
                name: "Dietetyka 2- studia stacjonarne (s2D)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s2D",
            },
            {
                name: "Dietetyka 3- studia stacjonarne (s3D)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s3DK",
            },
            {
                name: "Jednolite Mgr Fizjoterapia 1- studia stacjonarne (s1JMF)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s1JMF",
            },
            {
                name: "Jednolite Mgr Fizjoterapia 2- studia stacjonarne (s2JMF)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s2JMF",
            },
            {
                name: "Jednolite Mgr Fizjoterapia 3- studia stacjonarne (s3JMF)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s3JMF",
            },
            {
                name: "Jednolite Mgr Fizjoterapia 4- studia stacjonarne (s4JMF)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s4JMF",
            },
            {
                name: "Jednolite Mgr Fizjoterapia 5- studia stacjonarne (s5JMF)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s5JMF",
            },
            {
                name: "Mgr Pielęgniarstwo 1- studia stacjonarne (s1MP)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s1MP",
            },
            {
                name: "Mgr Pielęgniarstwo 2- studia stacjonarne (s2MP)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s2MP",
            },
            {
                name: "Mgr Zdrowie publiczne 1- studia stacjonarne (s1MZP)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s1MZP",
            },
            {
                name: "Pielęgniarstwo 1- studia stacjonarne (s1P)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s1P",
            },
            {
                name: "Pielęgniarstwo 2- studia stacjonarne (s2P)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s2P",
            },
            {
                name: "Pielęgniarstwo 3- studia stacjonarne (s3P)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s3P",
            },
            {
                name: "Położnictwo 1- studia stacjonarne (s1POŁ)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s1PO%A3",
            },
            {
                name: "Ratownictwo medyczne 1- studia stacjonarne (s1RM)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s1RM",
            },
            {
                name: "Ratownictwo medyczne 2- studia stacjonarne (s2RM)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s2RM",
            },
            {
                name: "Ratownictwo medyczne 3- studia stacjonarne (s3RM)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s3RM",
            },
        ],
    },
    {
        department: department[1],
        cours: [
            {
                name: "",
                link: "",
            },
        ],
    },
];
export const items = function addSourceToLinks() {
    for (let i = 0, l = courses.length; i < l; i++) {
        for (let y = 0, c = courses[i].cours.length; y < c; y++) {
            courses[i].cours[y].link = src + courses[i].cours[y].link;
        }
    }
    return courses;
};
