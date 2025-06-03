export type Experience = {
    title: string;
    company: string;
    date_start: string;
    date_end: string;
    description: string[];
};

export const experience: Experience[] = [
    {
        title: "Desarrollador de Escritorio",
        company: "Chaski Breñas",
        date_start:"Marzo 2025",
        date_end:"Mayo 2025",
        description: [
            "Diseño y desarrollo de una aplicación de escritorio utilizando WINFORM,",
            "Desarrollo de BD relacional utilizando SQL-Server",
        ],
    },
    {
        title: "Desarrollador de Escritorio",
        date_start:"Marzo 2024",
        date_end:"Julio 2024",
        company: "Club de gimnasia artistica \"Gymnastics\"",
        description: [
            "Diseño y desarrollo de una aplicación de escritorio utilizando WINFORM,",
            "Desarrollo de BD relacional utilizando MY-SQL",
        ],
    }

];