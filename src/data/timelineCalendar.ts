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
    year: "2026",
    events: [
      {
        date: "19. Jun",
        description:
          "Avant-Premiere: The Tongue (Working Tittle) @ Comédie de Genève (CH)",
      },
    ],
  },
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
        date: "9. & 10. May",
        description: "La peau entre les doigts @ BIT Teatergarasjen, Norway",
      },
      {
        date: "15. - 24. May",
        description: "Before it starts and after it's finished @ Théâtre Vidy",
      },
      {
        date: "1. & 3. August",
        description:
          "Arrebentaçao - zona de derrama last chapter @ 8:tension series Impulstanz Festival, Vienna",
      },
      {
        date: "30. Aug",
        description:
          "an ODE performance version for the @ Schinkel Pavillon, Berlin DE",
      },
      {
        date: "19. & 20. Sep",
        description: "ODE @ Rio de Janeiro BR",
      },
      {
        date: "26. & 27. Sep",
        description:
          "Zona de Derrama - First Chapter @ SESC Bienal de Dança, Campinas BR",
      },
      {
        date: "4. Oct",
        description: "Clashes Licking @ L’Echangeur CDCN, Château-Thierry FR",
      },
      {
        date: "25. Oct",
        description:
          "Eu vou aparecer bem no meio do seu sonho @ Art Émergence, Paris FR",
      },
      {
        date: "27. - 29. Nov",
        description: "ODE @ Espace Pasolini, Valenciennes FR",
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
        date: "23. September",
        description:
          "RIVERS @ Halle Norde Galerie - Festival Fessestival, Geneva CH (2023) ",
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
        date: "14,15, January ",
        description:
          "La Peau Entre Les Doigts @ Festival GoGoGo at Grutli Maison des Arts, Geneva, CH",
      },
      {
        date: "19. March",
        description: "De La Pra Ca @ La Rada, Locarno CH",
      },
      {
        date: "9 June",
        description:
          "La Peau Entre Les Doigts @ Festival Reencontre d’Echelle - La Friche Belle de Mai/ Marseille, FR",
      },
      {
        date: "06. - 08. July",
        description:
          "La Peau Entre Les Doigts @Santarcangelo Festival, Santarcangelo, IT",
      },
      {
        date: "15. August",
        description: "Notes on Licking @ Halle Norde Galerie, Geneva, CH",
      },
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
        date: "15 November",
        description:
          "La Peau Entre Les Doigts @ Backslash Festival, Gessnerallee, Zurich CH ",
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
      {
        date: "15. July",
        description:
          " La Peau Entre Les Doigts- Festival Belluard Bollwerk , Fribourg, CH ",
      },
      {
        date: "21. -23. November",
        description:
          "La Peau Entre Les Doigts @Les Quart d'Heure • Theatre Sevelin36 , Lausanne, CH ",
      },
    ],
  },
];
