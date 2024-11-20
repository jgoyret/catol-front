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
        date: "22. & 23. January",
        description: ` Clashes Licking @ Lieu Unique Nantes, France`,
      },
      {
        date: "4. - 16. February",
        description: "Residency @ Espaço do Tempo, Portugal",
      },
      {
        date: "21. & 22. March",
        description: "Clashes Licking @ Points communs Cergy, France",
      },
      {
        date: "25. & 26. March",
        description: "Arrebentação @ Points communs Cergy, France",
      },
      {
        date: "15. - 24. May",
        description: "Before it starts and after it's finished @ Théâtre Vidy",
      },
    ],
  },
  {
    year: "2024",
    events: [
      {
        date: "27. February - 1. March",
        description: "Clashes Licking @ Theatre Vidy, Lausanne CH ",
      },
      {
        date: "5. & 6. April ",
        description:
          "La Peau Entre Les Doigts @ La Menagerie de Verre, Paris FR",
      },
      {
        date: "12. May",
        description:
          "La Peau Entre Les Doigts @ Festival Passages+ CCS - Pompidou Metz, FR",
      },
      {
        date: "20. & 21. June",
        description:
          "Zona de Derrama - First Chapter @ Gessnerallee, Zurich CH",
      },
      {
        date: "28. June",
        description:
          "Before it Starts After its Finished - in collaboration with Sandar Tun Tun @ Grutli Maison de Diffusion et Art, Geneva CH ",
      },
      {
        date: "5. - 7. July",
        description:
          "Zona de Derrama - First Chapter @ Santarcangelo Festival, Santarcangelo IT ",
      },
      {
        date: "22. August",
        description:
          "Eu vou aparecer bem no meio do seu sonho - in collaboration with Luara Raio @ Halle Berghain I The Soul Station Exhibition by Danielle Brathwaite-Shirley - Curated by Mawena Yehouessi",
      },
      {
        date: "20. & 21. September",
        description:
          "La Peau Entre Les Doigts @ Lafayette Anticipations I Festival L’Echelle Humaine, Paris, FR",
      },
      {
        date: "3. & 4. October",
        description: "Zona de Derrama - First Chapter @ SUBS, Lyon FR",
      },
      {
        date: "26. November - 1. December",
        description: "Arrebentação @ Pavilion ADC, Geneve CH",
      },
      {
        date: "11. - 15. December",
        description: "Arrebentação @ Theatre VIDY, Lausanne CH",
      },
    ],
  },
  {
    year: "2023",
    events: [
      {
        date: "19. - 21. January",
        description: "La Peau Entre Les Doigts @ SUBS, Lyon FR ",
      },
      {
        date: "2. - 30. April",
        description: "La Peau Entre Les Doigts @ Theatre Vidy, Lausanne CH",
      },
      {
        date: "12. & 13. May",
        description: "La Peau Entre Les Doigts @ Rakete Festival TQW, Wien AU",
      },
      {
        date: "17. May",
        description:
          "La Peau Entre Les Doigts @ auawirleben Theaterfestival, Bern CH",
      },
      {
        date: "11. - 21.  July",
        description: "Clashes Licking @ SCH - Festival Avignon, Avignon FR",
      },
      {
        date: "07. - 09. July",
        description:
          "Clashes Licking @ Festival Santarcangelo, Santarcangelo IT",
      },
      {
        date: "15. & 16. August",
        description: "Zona de Derrama - First Chapter @ far°, Nyon CH",
      },
      {
        date: "23. - 26. August",
        description: "Clashes Licking @ Zurcher Theater Spektakel, Zurich CH",
      },
      {
        date: "22. & 24. September",
        description: "Zona de Derrama - First Chapter @ SudPol / Luzern CH",
      },
      {
        date: "3. & 4. October",
        description: "Clashes Licking @ Actoral Festival, Marseille FR",
      },
      {
        date: "19. October",
        description:
          "ROS3S tor S3X by fantastic4 in collaboration with Helena Kabwe, lhilda Bourqui. yann slattery @ Perrrformat, Zurich CH ",
      },
      {
        date: "15. November",
        description: "Clashes Licking @ KINAN! Festival, Maputo MZ",
      },
      {
        date: "23. - 24. November",
        description: "Clashes Licking @ ICA, Cape Town SA",
      },
      {
        date: "6. December",
        description:
          "zona1 - in collaboration with Luara Raio @ onegee in fog, Geneve CH",
      },
      {
        date: "16. December",
        description: "Bodily Situations @ Krone Cournonne, Bienne CH",
      },
    ],
  },
  {
    year: "2022",
    events: [
      {
        date: "1. September",
        description:
          "Notes on Licking @ Pasquart - Un.Certain Ground Exhibition, Bienne CH",
      },
      {
        date: "23. September",
        description: "Notes on Licking @ Fessestival, Geneve CH",
      },
      {
        date: "3. - 6. November",
        description:
          "Clashes Licking @ 'Emergentia l'Abri, TU, AOC' Theatre de l'Usine, Geneva CH",
      },
      {
        date: "16. December",
        description:
          "Notes on Licking - in collaboration with Sandar Tun Tun @ lnstituto Svizzero + MACRO Museum, Rome IT",
      },
    ],
  },
  {
    year: "2021",
    events: [
      {
        date: "22. - 24. February",
        description:
          "La Peau Entre Les Doigts @ Bachelor Presentation at La Manufacture Haute Ecole des Arts de La Scene, Lausanne CH",
      },
    ],
  },
];
