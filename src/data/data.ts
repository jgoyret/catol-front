import {
  ContactoGif,
  DelfinGif,
  EspadaGif,
  EspiralGif,
  EstrellitaGif,
  MariposaGif,
  BioGif,
  UnicornioGif,
  YinyangGif,
} from "../components/Gifs";

export interface ProjectStructure {
  title: string;
  credits: string;
  description: string;
  poems:
    | string
    | {
        head: string;
        end: string;
      };
  inspirations:
    | string
    | {
        title: string;
        content: string[];
        urls: string[];
      };
  media: {
    head: string;
    single: string;
    dual: string[];
  };
  usePoemImageLayout?: boolean;
}

export type ProjectType = ProjectStructure;

export const projects: Record<string, ProjectType> = {
  "clashes-licking": {
    title: "CLASHES LICKING",
    credits: `
      Choreography, Performance, Concept - <enhanced style="blackbold">Catol Teixeira</enhanced>
Sound Creation - <enhanced style="blackbold">Sandar Tun Tun</enhanced>
Costume Creation - <enhanced style="blackbold">Auguste de Boursetty</enhanced>
Lights Creation - <enhanced style="blackbold">Alessandra Domnigues</enhanced>
External Eye - <enhanced style="blackbold">Dominique Gilliot</enhanced>
Conceptual Provocation - <enhanced style="blackbold">Fabian Barba</enhanced>
Administration - <enhanced style="blackbold">Michael Scheuplein</enhanced>
Production&Administration - <enhanced style="blackbold">Rabea Grand</enhanced>
Distribution - <enhanced style="blackbold">Jerome Pique</enhanced>
thanks to <enhanced style="blackbold">Mayara Yamada, Yhuri Cruz, Ghalas Charara</enhanced>
Production - <enhanced style="blackbold">Cie UÁ</enhanced>
Coproduction: <enhanced style="blackbold">Theatre de l’Usine & Emergentia</enhanced> - temps fort pour la création chorégraphique émergente réalisé par L’Abri, le TU et l’ADC Genève
<enhanced style="blackbold">Realized with the support of Ville de Genève and Loterie Romande</enhanced>
`,
    description: `
<enhanced style="cutie">Clashes Licking</enhanced> draws inspiration from a pivotal figure in Western dance history: the Faun, famously represented by Nijinsky. However, rather than reviewing or commenting on this legacy, this piece offers a somewhat personal relation to this Faune, shaped by Catol's dance training. The core focus lies on  how learned techniques shape and form the body—how cultural and political influences define one's corporeity
The movement language flirts with the form and techniques of ballet, circus and cabratory  experiences. In a creation of a self-fiction, Catol evoke memories of their trajectory, where dancing was always being a simultaneous channel of social and personal understanding.
A dance language arose in conversation with Catol’s memory of a specific Nijinskys’ portrait hanging on a wall of their ballet school at Lapa, Rio de Janeiro in 2009. In this picture, The Faune represented by Nijinsky in the 20’s century dances with suspicious eyes, looking out of the framed image towards the open space of a large corridor. Nijinsky appears as a queer ghost from Western dance history. 
Catol decide to revisits this memory of seeing the image, intertwined with the simultaneous discovery of their first queer love and the traumatic experience of sexual abuse. This duality of tenderness and violence deeply marks their reflection on the body and its expression in Clashes Licking.
The relation with that specific context of Rio de Janeiro and these pictures haunt Catol’s imagination in a search of a memory, of a movement dislocation in relation with the western classical dance form. As the work evokes these memories, it focuses on transmutation—not on repeating any image or affection, but on creating friction with it, allowing the memories to reshape and evolve through the body.
Dancing to cultivate a possible dream: of queer affection, of a blended border of languages. To challenge the frontiers of gender and cis-hetero normativity, the dance that is presented is oriented towards fragments that constitute queer living and trans bodies. 
Dancing here is gravitating towards embodiments that are manifested sometimes as clashes, as broken stories, its contradictions and pleasures. The poetry that rises when a queer life comes and dance among us. Clashes Licking is a whisper, perhaps a secret to whom can listen to it. 
`,
    poems: {
      head: `
To where does this dance belongs to?
What am I haunting while dancing?
What is haunting me?
What are the ghosts of western dances?
Which ghosts do I dance with? Which ones I scape from?
How is queer imagination blended with the dances forms?
How to contaminate forms?
How to dance with ghosts? How memories are registered in the flesh of one’s body?
Is dance a celebration of living or a ceremony of dying?`,

      end: `
<enhanced style="cutie">To where does this dance belongs to?
What am I haunting while dancing?
What is haunting me?
What are the ghosts of western dances?
Which ghosts do I dance with? Which ones I scape from?
How is queer imagination blended with the dances forms?
How to contaminate forms?
How to dance with ghosts? How memories are registered in the flesh of one’s body?
Is dance a celebration of living or a ceremony of dying?


I hear you calling, 
 as in a tale of a dream, 
 and I touch you from far while floating. 
 
 a smell of wet stone, that blended smell 
 of wetness

A far away noise
 A dog barks, someone screams, a ventilator, a piano
 And in my thoughts all that desire clashing 
 A memory left in the middle of the crossing
 deep currents, water carrying 
 
 that dance of when flesh can melt , do you remember? 
 
 - maliciously, they were looking at me knowing something I couldn’t yet know myself 
 
 surrendering while
 whispering whispering 

on the corner of your ears 
 
 while in a perpetual fall in the break of languages 
 of changes of dreaming of screaming of wiling of leaving 

(…)
to secretly do the decomposition

to know how to infiltrate

there will be a demolition

a premeditated demolition of the future promised by the past that must die
 a demolition

but it's o morro that collapses

it's from this future where o morro collapses

that I want to escape

how do we change the place of the collapse?

which future do we escape?

sometimes I feel inside a noisy silence
(…)

</enhanced>
`,
    },
    inspirations: "",
    media: {
      head: "https://player.vimeo.com/video/811341435",
      single: `${
        import.meta.env.VITE_SUPABASE_STORAGE_URL
      }/ClashesLicking01.jpg`,
      dual: ["", ""],
    },
    usePoemImageLayout: false,
  },
  "zona-de-derrama-1": {
    title: "ZONA DE DERRAMA - first chapter",
    credits: `
    Coproduction Pavillon ADC - Genève, VIDY - Lausanne, EFFEA -Santarcangelo Festival, Points Communs - Nouvelle Scène Nationale - Cergy- Pontoise , far°festival + SudPol (Extra Time Plus)
RESO - Swiss Coproduction Founding
Support: Festival Actoral Marseille FR & Bale National de Marseille FR
Performed and co-created with <enhanced style="blackbold">Auguste de Boursetty, Laura Raio, Luisa Lemgruber</enhanced>
`,
    description: `
    <enhanced style="cutie">Zona de Derrama - first chapter</enhanced> is a dance composition for three dancers, specifically for outdoor spaces. The performance takes place during twilight, a time when daylight fade and our eyes adjust to the approaching night. This initial chapter, serves as ode for liminal spaces of transitions and transmutations.

Dancing and celebrating for and at the moment of when a frontier, a border, a limitation can overflow and to trans.pass itself. The performance aims to evoke certain “zones”, expressing both sorrow and joy. Searching for a dance at the exact moment when change happens.

<enhanced style="readme">MOVEMENT, TRANSITIONS AND FRAGMENTS OF A CHOREOGRAPHIC COMPOSITION:</enhanced>
We dance into “zones” of tenderness, risk, danger, love, disagreements, resonance, celebration, safety, memory-remembering. These zones are activated throughout a score that is set in a specific consequential order. All zones are composed with precise movement material, but each dancer can
visit it within own relation to it, with its own emotions and embodied experiences.
Dealing with an idea of composing with fragments, “zona de derrama” is a wonder into movement language that englobes such fragments to form a
dance. The work is made through the collaborations, each artist offers and create the journey that we are constructing together to built this piece and its dance and aesthetic language. Dancing is for me a radical stubbornness to remember a dream.
`,
    poems: {
      head: `
ZONES ZONING
AN INVITATION TO AN EVENT WHERE WE EVOKE LIMINAL SPACES: OR TRANSITIONS, OF INTIMACY AND PROTECTION, ZONES TO ES- CAPE OR TO STAY, DEALING WITH AN IDEA OR COMPOSING WITH FRAGMENTS, “ZONA DE DERRAMA” IS A WONDER INTO A MOVEMENT LANGUAGE THAT ENGLOBES SUCH FRAGMENTS TO FORM A DANCE, THE WORK IS MADE THROUGH THE COLLABORATIONS, EACH ARTIST OFFERS AND CREATES THE JOURNEY THAT WE ARE CONSTRUCTING TOGETHER TO BUILD THIS PIECE AND ITS DANCE AND AESTHETIC LANGUAGE.

<enhanced style="readme"> CAN YOU REMEBER YOUR DREAMS? </enhanced>
RESOURCES
DANCE FIELD
EXAUSTHION
TERRITORY
+
an overflow, infiltrating in between spaces devastation
the destruction of modernity
the poetics of transmutation transmitting - transitioning,
watery emotions
formless forms
escaping captures bodies-cosmologies
relational matter & relational body entanglement
cerimonies for (...)
(I stage my body transitions)
Dancing as gesture of belonging.
(I wish to rest, to drop my very heavy bones. I wish to listen to the
echoes with you)
`,
      end: ``,
    },
    inspirations: "",
    media: {
      head: `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/Derrama02.jpg`,
      single: `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/Derrama01.jpg`,
      dual: ["", ""],
    },
    usePoemImageLayout: true,
  },
  "zona-de-derrama-2": {
    title: "ARREBENTAÇÃO - last chapter",
    credits: `
    Coproduction: <enhanced style="blackbold">Pavillon ADC</enhanced> - Geneva, <enhanced style="blackbold">Théâtre Vidy</enhanced> - Lausanne, <enhanced style="blackbold">EFFEA</enhanced> - Santarcangelo Festival, <enhanced style="blackbold">Points Communs</enhanced> - Nouvelle Scène Nationale - Cergy-Pontoise

Choreography, concept and performance: <enhanced style="blackbold">Catol Teixeira</enhanced>
Choreography and performance: <enhanced style="blackbold">Acauā Shereya, Auguste De Boursetty, Collin Cabanis, Luara Raio</enhanced>
Sound creation: <enhanced style="blackbold">Chaos Clay</enhanced>
Lighting design: <enhanced style="blackbold">Lui L’Abbate</enhanced>
Outside view and dramaturgy: <enhanced style="blackbold">Jonas Van, Lea Genoud</enhanced>
Rigging: <enhanced style="blackbold">Rive Vayrou</enhanced>
Costume: <enhanced style="blackbold">Yumi Ikeda Ferretti</enhanced>
Style: <enhanced style="blackbold">Yann slattery</enhanced>
Body extensions: <enhanced style="blackbold">Naggi Giani</enhanced>
Administration and production: <enhanced style="blackbold">Rabea Grand</enhanced>
Production assistant: <enhanced style="blackbold">Dylan Huido</enhanced>
Distribution: <enhanced style="blackbold">Jerome Pique</enhanced>
Tour management: <enhanced style="blackbold">Jerome Pique</enhanced>

With the support of: <enhanced style="blackbold">Actoral</enhanced> - Marseille, <enhanced style="blackbold">BNM</enhanced> - Marseille
This project is part of <enhanced style="blackbold">RESO Coproduction Found</enhanced>

`,
    description: `
    <enhanced style="cutie">Arrebentação - zona de derrama last chapter </enhanced> is built on a multiplicity of overlapping images on stage, on encounters that sometimes contradict each other, and on the vibration and harmony they create. In its collective dimension and at the heart of its message, this choreographic composition explores notions of harmony, agreement and disagreement, and transformation. The zone is noisy and hybrid; it is where the multitude meets and forms a common ground that resonates.
Movement, transitions, and fragments of a choreographic composition: we dance in “zones” of tenderness, risk, danger, love, disagreement, resonance, celebration, security and memory. In Arrebentação - zona de derrama last chapter, these zones are activated in a score that follows a precise chronological order. Each zone is made up of speciﬁc movement material, but each dancer inscribes a dialogue between the score and their own relationship to the choreography, to the zone. The dialogue takes place in the emotions and experiences that make up the dancers’ bodies. The piece is thus written in a dramaturgy of fragments, each fragment the individual actualisation of a shared memory. The creative process is nourished by encounters and collaborations. Each artist proposes and creates the journey we build together, and the piece creates its own language over time. For me, dancing is a gesture of belonging.

`,
    poems: "",
    inspirations: "",
    media: {
      head: `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/arrebatacao_head.jpg`,
      single: "",
      dual: [
        `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/arrebatacao_1.jpg`,
        `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/arrebatacao_2.jpg`,
      ],
    },
    usePoemImageLayout: false,
  },
  "la-peaux-entre-les-doigts": {
    title: "LA PEAUX ENTRE LES DOIGTS",
    credits: `
    2021- Conclusion Work/Bachelor Contemporary Dance a La Manufacture
2022 - Extended Version
Concept, Choreography, Performance: <enhanced style"blackbold">Catol Teixeira</enhanced>
Lights: <enhanced style="blackbold">Justine Bouillet</enhanced>
Music tracks: Tunga - <enhanced style="blackbold">DEDO</enhanced> , Revelation - <enhanced style="blackbold">Necxya , Chaos Clay - FuckCopace’ic </enhanced>(extracts) Sound edition: <enhanced style="blackbold">Nico Wasmmer</enhanced>
`,
    description: `Before it starts, after it is finished:

<enhanced style"cutie">la peau entre les doigts / the skin between the fingers</enhanced> - is a choreographic dispositive that experiment and proposes to instigate questions of positionality, the perceptions of the other, to challenge social identity marks. “La Peau Entre Les Doigts” plays while deviating, while escaping.

<enhanced style="readme">LETTER FROM DOING:</enhanced>
La Peau Entre Les Doigts is therefore a created context where I keep space to un-learn body inscriptions when I perform it. It is intimately related with presences - which for me speaks of absences - that can potentially take part on it.
I question how social implications are informing-forming my own body in relation to the context that I am insert in, crossing it.
To remain traversing time and to celebrate a perpetual transition.
I search to move into the crossroads, in what should remain in secret.
- I approach the body as a terrain of relationships. A landscape of memories and emotions. With La Peau Entre Les Doigts I tried to create a choreographic device that could manifest this.
The beginning of the piece works as an invitation to look at the bodies that are present, and I offer physical positions in relation with the public in order to guide this moment: I let the eyes to see me, with the nuances that are awaken with all the different presences in the room.
I am completely passionate about the dancing... it seems to me that there is always something that escapes, something that flees, and that fascinates me.
The relation of the body and movement with celebration, death, the spiritual.

The performance is built on the oscillation between presence and absence, on offering and denying one’s own body, and on the looks and movements of
the audience. <enhancedm style="cutie">la peau entre les doigts</enhanced> is a dance about intimacy, distance and separation. A dance dedicated to what is left behind, abandoned. The work wishes to evoke the collective archive that one’s body carry - and move with, from, against, through it.
La Peau Entre Les Doigts does not seek clarity or purity, it goes hand in hand with uncertainty, with the unknown, observing opposition and the surrender of the body to gravity. Catol dances, moving where there is a crack to be crossed, surrendering and resisting, in perpetual transition, without a destination.
`,
    poems: "",
    inspirations: {
      title: "++ Inspirations ++",
      content: [
        "orientations toward a queer phenomenology",
        "encantamento",
        "não vão nos matar agora",
      ],
      urls: [
        "https://static1.squarespace.com/static/58ad660603596eec00ce71a3/t/58bec800b8a79b7c599de24a/1488898050432/Orientations+Toward+a+Queer+Phenomenology.pdf",
        "https://morula.com.br/wp-content/uploads/2020/05/Encantamento.pdf",
        "https://www.cobogo.com.br/produto/nao-vao-nos-matar-agora-they-won-t-kill-us-now-665",
      ],
    },
    media: {
      head: "https://player.vimeo.com/video/844613915",
      single: "",
      dual: [
        `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/laPeau01.jpg`,
        `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/laPeau02.jpg`,
      ],
    },
    usePoemImageLayout: false,
  },
};

export const biotext = `
<enhanced style="cutie">Catol Teixeira performs and creates dances</enhanced>. Born in Porto Alegre (1993) Brazil, with a diverse journey across various cities, including Rio de Janeiro, Belo Horizonte, Salzburg, Berlin, and currently Geneva, Switzerland, living experiences that have
shaped their artistic practice and way of living. They obtained a Bachelor’s degree in Contemporary Dance from La Manufacture in Lausanne in 2021. Prior to formal dance education, Catol worked as an interpreter for dance companies in Brazil such as “Cia Palacio das Artes” and “Cia Mário Nascimento” in Belo Horizonte, Brazil, during 2013 and 2014. They also worked as artistic collaborator and acrobat to the contemporary circus group “Intrepida Trupe” from to 2010 to 2012 as in 2016. They were resident artist at Ponderosa Tanzland, a place they visited and studied several times.

<enhanced style="readme">CATOL DANCES WHILE TRANSITIONING AND CRAFT PERFORMANCES AS INVOCATIONS</enhanced>. They are curious to deal with physical endurance, somatic practices and drawing influence from sources as diverse as circus aerial dances, classical ballet, partying and celebrations.

Their first choreographic work “La Peau Entre Les Doigts” deals with questions of orientation and gaze. 
It was shown at Grütli (CH), Belluard Bollwerk (CH), Sevelin36 (CH), La Friche Belle de Mai (FR), Santarcangelo Festival (IT), Gessneralle (CH), Les Subs (FR), TQW Studios/Rakete Festival (AU), Thèatre Vidy (CH) and keeps touring nowadays. Catol latest work “Clashes Licking”, was premiered in November 2022 at Theatre de l’Usine as part of “Emergentia - ADC, l’Abri, TU”. It was shown at SCH - Festival de Avignon (FR), Santarcangelo Festival (IT), Bienal de dança de Maputo (MZ), Infecting the City- ICA Cape Town (SA), Festival Actoral Marseille (FR), among others. Their next work will premiere in November 2024.
CATOL’S CHOREOGRAPHIC EXPERIMENTATION WITH DANCE SERVES AS A CONDUIT FOR UNCOVERING NUANCES AND TACTICS OF TOGETHERNESS. THEIR INTEREST IS ORIENTED TO COLLABORATIVE PROCESSES, AMIDST
PERSONAL CONCERNS, ARTISTIC PRACTICES AND ARTISTS, ESTABLISHING WITH DANCING AND COMPOSITIONAL WORK AN INTIMATE DIALOGUE WITH KUIR (QUEER) (DIS)ORIENTATIONS TO REMEMBER A DREAM, A STUBBORN ACT TO ESCAPE THE PLOT, TO UNLEARN, TO CRY AND TO CELEBRATE.
`;

export const menuItems = [
  {
    id: "clashes-licking",
    name: "CLASHES LICKING",
    path: "/project/clashes-licking",
    Icon: EstrellitaGif,
  },
  {
    id: "zona-de-derrama",
    name: "ZONA DE DERRAMA",
    path: "/project/zona-de-derrama",
    Icon: UnicornioGif,
  },
  {
    id: "la-peaux-entre-les-doigts",
    name: "LA PEAUX ENTRE LES DOIGTS",
    path: "/project/la-peaux-entre-les-doigts",
    Icon: MariposaGif,
  },
  {
    name: "WRITING DANCING AROUND",
    path: "/writing-dancing-around",
    Icon: EspadaGif,
  },
  { name: "PERFORMANCE", path: "/performance", Icon: YinyangGif },
  { name: "BIO", path: "/bio", Icon: BioGif },
  {
    name: "INTERVIEWS AND PRESS",
    path: "/interviews-and-press",
    Icon: EspiralGif,
  },
  { name: "CONTACT", path: "/contact", Icon: ContactoGif },
  { name: "CV", path: "/cv", Icon: DelfinGif },
];
