export interface TimelineEvent {
  date: string;
  description: string;
}

export interface YearData {
  year: string;
  events: TimelineEvent[];
}

export const timelineData: YearData[] = [
  {
    year: "2025",
    events: [
      {
        date: "22. & 23. January 2025",
        description: "Clashes Licking @ Lieu Unique Nantes, France",
      },
      {
        date: "4. - 16. February 2025",
        description: "Residency @ Espaço do Tempo, Portugal",
      },
      {
        date: "21. & 22. March 2025",
        description: "Clashes Licking @ Points communs Cergy, France",
      },
      {
        date: "25. & 26. March 2025",
        description: "Arrebentação @ Points communs Cergy, France",
      },
      {
        date: "15./16./17./22./23. & 24. May 2025",
        description: "Before it starts and after it's finished @ Théâtre Vidy",
      },
    ],
  },
  {
    year: "2024",
    events: [
      {
        date: "October 2024",
        description: "New Work Premiere @ Theatre de l'Usine",
      },
      {
        date: "March 2024",
        description: "Residency @ Tanzhaus Zürich",
      },
    ],
  },
  {
    year: "2023",
    events: [
      {
        date: "November 2023",
        description: "Clashes Licking @ Festival Actoral Marseille",
      },
      {
        date: "September 2023",
        description: "Performance @ Bienal de dança de Maputo",
      },
      {
        date: "July 2023",
        description: "Showcase @ Festival d'Avignon",
      },
    ],
  },
];
