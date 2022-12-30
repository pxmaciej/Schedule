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
                name: "Energetyka 3- studia niestacjonarne (n3E)",
                link: "checkSpecjalnoscStac.php?specjalnosc=n3E%ACO",
            },
            {
                name: "Energetyka 4- studia niestacjonarne (n4E)",
                link: "checkSpecjalnoscStac.php?specjalnosc=n4EMU",
            },
            {
                name: "Energetyka 1- studia stacjonarne (s1E)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s1E",
            },
            {
                name: "Energetyka 2- studia stacjonarne (s2E)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s2E",
            },
            {
                name: "Finanse, rachunkowość i podatki 3- studia niestacjonarne (n3FRP)",
                link: "checkSpecjalnoscStac.php?specjalnosc=n3RP",
            },
            {
                name: "Finanse, rachunkowość i podatki 1- studia stacjonarne (s1FRP)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s1FRP",
            },
            {
                name: "Finanse, rachunkowość i podatki 2- studia stacjonarne (s2FRP)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s2FRP",
            },
            {
                name: "Finanse, rachunkowość i podatki 3- studia stacjonarne (s3FRP)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s3RP",
            },
            {
                name: "Informatyka 1- studia stacjonarne (s1INF)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s1INF",
            },
            {
                name: "Informatyka 2- studia stacjonarne (s2INF)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s2INF",
            },
            {
                name: "Informatyka 3- studia stacjonarne (s3INF) - GK",
                link: "checkSpecjalnoscStac.php?specjalnosc=s3GK",
            },
            {
                name: "Informatyka 3- studia stacjonarne (s3INF) - PAM",
                link: "checkSpecjalnoscStac.php?specjalnosc=s3PAM",
            },
            {
                name: "Informatyka 4- studia stacjonarne (s4INF) - GK",
                link: "checkSpecjalnoscStac.php?specjalnosc=s4GK",
            },
            {
                name: "Informatyka 4- studia stacjonarne (s4INF) - PAM",
                link: "checkSpecjalnoscStac.php?specjalnosc=s4PAM",
            },
            {
                name: "Logistyka i transport 1- studia niestacjonarne (n1LIT)",
                link: "checkSpecjalnoscStac.php?specjalnosc=n1LIT",
            },
            {
                name: "Logistyka i transport 2- studia niestacjonarne (n2LIT)",
                link: "checkSpecjalnoscStac.php?specjalnosc=n2LIT",
            },
            {
                name: "Logistyka i transport 3- studia niestacjonarne (n3LIT)",
                link: "checkSpecjalnoscStac.php?specjalnosc=n3ZIS",
            },
            {
                name: "Logistyka i transport 4- studia niestacjonarne (n4LIT)",
                link: "checkSpecjalnoscStac.php?specjalnosc=n4ZIS",
            },
            {
                name: "Logistyka i transport 1- studia stacjonarne (s1LIT)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s1LIT",
            },
            {
                name: "Logistyka i transport 2- studia stacjonarne (s2LIT)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s2LIT",
            },
            {
                name: "Logistyka i transport 3- studia stacjonarne (s3LIT)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s3ZIS",
            },
            {
                name: "Logistyka i transport 4- studia stacjonarne (s4LIT)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s4ZIS",
            },
            {
                name: "Mgr Finanse i zarządzanie w przedsiębiorstwie 1- studia stacjonarne (s1MFZ)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s1MFZ",
            },
            {
                name: "Mgr Finanse i zarządzanie w przedsiębiorstwie 2- studia stacjonarne (s2MFZ) - FIIN",
                link: "checkSpecjalnoscStac.php?specjalnosc=s2FIIN",
            },
            {
                name: "Mgr Finanse i zarządzanie w przedsiębiorstwie 2- studia stacjonarne (s2MFZ) - ZPK",
                link: "checkSpecjalnoscStac.php?specjalnosc=s2ZPK",
            },
            {
                name: "Mgr Inżynieria produkcji i logistyki 1- studia stacjonarne (s1MIPL)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s1MIPL",
            },
            {
                name: "Mgr Inżynieria produkcji i logistyki 2- studia stacjonarne (s2MIPL)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s2PR",
            },
            {
                name: "Zarządzanie 2- studia niestacjonarne (n2Z)",
                link: "checkSpecjalnoscStac.php?specjalnosc=n2Z",
            },
            {
                name: "Zarządzanie 3- studia niestacjonarne (n3Z)",
                link: "checkSpecjalnoscStac.php?specjalnosc=n3ZZL",
            },
            {
                name: "Zarządzanie 1- studia stacjonarne (s1Z)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s1Z",
            },
            {
                name: "Zarządzanie 2- studia stacjonarne (s2Z)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s2Z",
            },
            {
                name: "Zarządzanie 3- studia stacjonarne (s3Z)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s3ZZL",
            },
            {
                name: "Zarządzanie i inżynieria produkcji 2- studia niestacjonarne (n2ZIP)",
                link: "checkSpecjalnoscStac.php?specjalnosc=n2ZIP",
            },
            {
                name: "Zarządzanie i inżynieria produkcji 3- studia niestacjonarne (n3ZIP)",
                link: "checkSpecjalnoscStac.php?specjalnosc=n3SIPP",
            },
            {
                name: "Zarządzanie i inżynieria produkcji 4- studia niestacjonarne (n4ZIP) - IMO",
                link: "checkSpecjalnoscStac.php?specjalnosc=n4IMO",
            },
            {
                name: "Zarządzanie i inżynieria produkcji 4- studia niestacjonarne (n4ZIP) - SIPP",
                link: "checkSpecjalnoscStac.php?specjalnosc=n4SIPP",
            },
            {
                name: "Zarządzanie i inżynieria produkcji 1- studia stacjonarne (s1ZIP)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s1ZIP",
            },
            {
                name: "Zarządzanie i inżynieria produkcji 2- studia stacjonarne (s2ZIP)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s2ZIP",
            },
            {
                name: "Zarządzanie i inżynieria produkcji 3- studia stacjonarne (s3ZIP) - IME",
                link: "checkSpecjalnoscStac.php?specjalnosc=s3IME",
            },
            {
                name: "Zarządzanie i inżynieria produkcji 3- studia stacjonarne (s3ZIP) - IMO",
                link: "checkSpecjalnoscStac.php?specjalnosc=s3IMO",
            },
            {
                name: "Zarządzanie i inżynieria produkcji 4- studia stacjonarne (s4ZIP)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s4IMO",
            },
        ],
    },
    {
        department: department[2],
        cours: [
            {
                name: "Administracja 2- studia niestacjonarne (n2A)",
                link: "checkSpecjalnoscStac.php?specjalnosc=n2A",
            },
            {
                name: "Administracja 3- studia niestacjonarne (n3A)",
                link: "checkSpecjalnoscStac.php?specjalnosc=n3MAP",
            },
            {
                name: "Administracja 1- studia stacjonarne (s1A)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s1A",
            },
            {
                name: "Administracja 3- studia stacjonarne (s3A)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s3MAP",
            },
            {
                name: "Bezpieczeństwo wewnętrzne 2- studia niestacjonarne (n2BW)",
                link: "checkSpecjalnoscStac.php?specjalnosc=n2BW",
            },
            {
                name: "Bezpieczeństwo wewnętrzne 3- studia niestacjonarne (n3BW)",
                link: "checkSpecjalnoscStac.php?specjalnosc=n3SM",
            },
            {
                name: "Bezpieczeństwo wewnętrzne 1- studia stacjonarne (s1BW)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s1BW",
            },
            {
                name: "Bezpieczeństwo wewnętrzne 2- studia stacjonarne (s2BW)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s2BW",
            },
            {
                name: "Bezpieczeństwo wewnętrzne 3- studia stacjonarne (s3BW)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s3SM",
            },
            {
                name: "Filologia 2- studia stacjonarne (s2FIL)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s2FA",
            },
            {
                name: "Filologia 3- studia stacjonarne (s3FIL) - AWB",
                link: "checkSpecjalnoscStac.php?specjalnosc=s3AWB",
            },
            {
                name: "Filologia 3- studia stacjonarne (s3FIL) - AZN",
                link: "checkSpecjalnoscStac.php?specjalnosc=s3AZN",
            },
            {
                name: "Jednolite Mgr Prawo 1- studia stacjonarne (s1JMP)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s1JMP",
            },
            {
                name: "Jednolite Mgr Prawo 2- studia stacjonarne (s2JMP)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s2JMP",
            },
            {
                name: "Jednolite Mgr Prawo 3- studia stacjonarne (s3JMP)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s3JMP",
            },
            {
                name: "Jednolite Mgr Prawo 4- studia stacjonarne (s4JMP)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s4JMP",
            },
            {
                name: "Jednolite Mgr Prawo 5- studia stacjonarne (s5JMP)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s5JMP",
            },
            {
                name: "Mgr Bezpieczeństwo wewnętrzne 1- studia stacjonarne (s1MBW)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s1MBW",
            },
            {
                name: "Mgr Bezpieczeństwo wewnętrzne 2- studia stacjonarne (s2MBW)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s2ZK",
            },
            {
                name: "Mgr Menedżer administracji publicznej 1- studia stacjonarne (s1MMAP)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s1MMAP",
            },
            {
                name: "Mgr Menedżer administracji publicznej 2- studia stacjonarne (s2MMAP)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s2MMAP",
            },
            {
                name: "Pedagogika przedszkolna i wczesnoszkolna 2- studia stacjonarne (s2JMPED)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s2JMPED",
            },
            {
                name: "Pedagogika przedszkolna i wczesnoszkolna 3- studia stacjonarne (s3JMPED)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s3JMPED",
            },
            {
                name: "Pedagogika przedszkolna i wczesnoszkolna 4- studia stacjonarne (s4JMPED)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s4JMPED",
            },
        ],
    },
    {
        department: department[3],
        cours: [
            {
                name: "Wychowanie fizyczne 1- studia stacjonarne (s1WF)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s1WF",
            },
        ],
    },
    {
        department: department[4],
        cours: [
            {
                name: "INT 1- studia stacjonarne (s1INT)",
                link: "checkSpecjalnoscStac.php?specjalnosc=s1INT",
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
