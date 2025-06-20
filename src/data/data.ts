import {
  ContactoGif,
  WritingsGif,
  InterviewGif,
  ClashesGif,
  LaPeauGif,
  BioGif,
  DerramaGif,
  PerfoGif,
  CalendarGif,
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
  media: {
    head: string;
    single: string;
    dual: string[];
  };
  usePoemImageLayout?: boolean;
  navigationBanner?:
    | {
        state?: boolean;
        prev?: string;
        next?: string;
        namePrev?: string;
        nameNext?: string;
      }
    | false;
}

export interface Performance {
  title: string;
  text: string;
  image: string;
  credits:
    | string
    | {
        activity: string;
        names: string;
      };
}
export interface MenuItem {
  id?: string;
  name: string;
  path?: string;
  icon: React.ElementType;
}

export interface PressLink {
  title: string;
  url: string;
}

export interface PressSection {
  title: string;
  subsections: {
    title: string;
    links: PressLink[];
  }[];
}

export type ProjectType = ProjectStructure;

export const projects: Record<string, ProjectType> = {
  "clashes-licking": {
    title: "CLASHES LICKING",
    credits: `
    ♥ Footnotes ♥
*1 → The Challenge of Corporeity: Fictionalising the Emotional Body by <enhanced style=”blackbold”>Ioana Balgreadan</enhanced>
♥‿♥


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
Photo credits - <enhanced style="blackbold">Mariano Silva</enhanced>
`,
    description: `
<enhanced style="cutietitle">Clashes Licking</enhanced> draws inspiration from a pivotal figure in Western dance history: the Faun, famously represented by Nijinsky. However, rather than reviewing or commenting on this legacy, this piece offers a somewhat personal relation to this Faune, shaped by Catol's dance training. The core focus lies on  how learned techniques shape and form the body—how cultural and political influences define one's corporeity*1.

The movement language flirts with the form and techniques of ballet, circus and celebratory experiences. In a creation of a self-fiction, Catol evoke memories of their trajectory, where dancing was always being a simultaneous channel of social and personal understanding.
A dance language arose in conversation with Catol’s memory of a specific Nijinskys’ portrait hanging on a wall of their ballet school at Lapa, Rio de Janeiro in 2009. In this picture, The Faune represented by Nijinsky in the 20’s century dances with suspicious eyes, looking out of the framed image towards the open space of a large corridor. Nijinsky appears as a queer ghost from Western dance history. 
Catol decide to revisits this memory of seeing the image, intertwined with the simultaneous discovery of their first queer love and the traumatic experience of sexual abuse. This duality of tenderness and violence deeply marks their reflection on the body and its expression in Clashes Licking.
The relation with that specific context of Rio de Janeiro and these pictures haunt Catol’s imagination in a search of a memory, of a movement dislocation in relation with the western classical dance form. As the work evokes these memories, it focuses on transmutation—not on repeating any image or affection, but on creating friction with it, allowing the memories to reshape and evolve through the body.

Dancing to cultivate a possible dream: of queer affection, of a blended border of languages. To challenge the frontiers of gender and cis-hetero normativity, the dance that is presented is oriented towards fragments that constitute queer living and trans bodies. 
Dancing here is gravitating towards embodiments that are manifested sometimes as clashes, as broken stories, its contradictions and pleasures. The poetry that rises when a queer life comes and dance among us. Clashes Licking is a whisper, perhaps a secret to whom can listen to it. 

`,
    poems: {
      head: "",

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
</enhanced>



<enhanced style="readme">Text present in the performance: </enhanced>
<enhanced style="cutielink" link="https://clasheslicking.hotglue.me/">
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
    media: {
      head: "https://player.vimeo.com/video/811341435",
      single: `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/Clashes01.webp`,
      dual: [
        `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/clashes02.webp`,
        `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/clashes03.webp`,
      ],
    },
    usePoemImageLayout: false,
    navigationBanner: false,
  },
  "zona-de-derrama-1": {
    title: "ZONA DE DERRAMA - first chapter",
    credits: `
 Concept, Choreography and Performance: <enhanced style="blackbold"> Catol Teixeira </enhanced>
Performed by and co-creation: <enhanced style="blackbold">Auguste de Boursetty, Laura Raio </enhanced>
Sound Creation:<enhanced style="blackbold"> Luisa Lemgruber </enhanced>
Production and Administration: <enhanced style="blackbold">Rabea Grand </enhanced>
Tour management: <enhanced style="blackbold">Jerome Pique </enhanced>
Photo Credits: <enhanced style="blackbold">Pietro Bertora, Binta Kopp</enhanced>
`,
    description: `
<enhanced style="cutietitle">Zona de Derrama – First Chapter</enhanced> unfolds as an evolving choreography, a work "in process." This piece marks the beginning of a research journey initiated by Catol in the direction of “zones” that become dances, where harmony and dissonance might shape a shared space of movement language. This opening chapter is composed for three dancers and designed for outdoor and daylight situations, while in twilight—those moments when light fades, and our eyes begin to adjust to the night approaching. 
Here, the performance serves as an ode to liminal spaces, embracing the thresholds of transition and transformation.
Zona de Derrama first chapter reach out for a dancing and celebration for the precise moment when the next movement is not yet known but  felt. When a frontier overflows and transforms itself into passage. 
This outdoor dance performance seeks to inhabit and evoke zones of transition, where some forms dissolve, and the pulse of change becomes palpable. Here, dance emerges as both a gesture of resistance and release, sorrow and joy intertwined, embodying delicacy and tensions that arise at the threshold.

During “zona de derrama” we evoke this notion of “overflowings” (derrama in brazilian portuguese). We comprehend this zone as a place where these overflows are announced, about to happen. In this way, we deal with watery qualities, and evoking its complex so called “contemporary” interactions: the overflow as a poetic pleasure, but simultaneously dangerous floods: a destruction by the modern/colonial societal failure. 
 

`,
    poems: {
      head: `
<enhanced style="readme">the storm was washing the sky outside 
and we were moving into zones of liminal spaces. where we transition, touch, cry and laugh. </enhanced>
where we dance into territories of encountering; finding the synchronizations on curves, falling falling falling into - carrying and failing, learning and looking. 
turn turn turn. again. fall. 

no, its not always easy to keep dancing. but we need it. to sweat, to listen, to say. to remain. 
we remain. 
we have always been here, and we gonna keep loving. 
making love. kissing. 
to wet the floor and traverse
we recognize each other 
and get lost, 
then we dance again 
to find and loose it
we are here and here we will be. 
thank you for so much that vibrates and teach me. beside you. 
those dances are always a scape and a arrival. 
and its always a love letter

`,
      end: `
     <enhanced style="cutie">ZONES ZONING
AN INVITATION TO AN EVENT WHERE WE EVOKE LIMINAL SPACES:
OF TRANSITIONS, OF INTIMACY AND PROTECTION, ZONES TO ESCAPE OR TO STAY,
 DEALING WITH AN IDEA OR COMPOSING FRAGMENTS
ZONA DE DERRAMA  IS A WONDER INTO TRANSPASSING
 AND CHANGES OF MATERIAL CONDITION
IT QUESTIONS WHERE IT WOULD GO AFTER A FLOOD, AFTER A CEASE, DURING A CALL FOR CHANGE 

WE WONDER IF CAN YOU REMEMBER YOUR DREAMS?
WHAT RESOURCES CAN YOU GRASP?
HOW WE DANCE IN THE DANCE FIELD?
WHERE IT GOES ALL THE EXHAUSTION? 

THE LAND EXHAUSTION - SCARCITY - 

WE TRACE TERRITORIES TO ARRIVE. 
+
ITS an overflow, infiltrating in between spaces 
devastation
the destruction of modernity.
we seat to 
sense tender eyes and the call to go - 
tracing the poetics of transmutation transmitting - transitioning,
watery emotions
formless forms
escaping captures with out bodies-cosmologies
relational matter & relational body entanglement
WE BUILD 
ceremonies for (...)

(I stage my body transitions)
Dancing as gesture of belonging.
(I wish to rest, to drop my very heavy bones. I wish to listen to the
echoes with you)
_</enhanced>
`,
    },
    media: {
      head: `https://player.vimeo.com/video/1023513197`,
      single: "",
      dual: [
        `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/Derrama01.webp`,
        `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/Derrama03.jpg`,
      ],
    },
    usePoemImageLayout: true,
    navigationBanner: {
      state: true,
      prev: "",
      next: "zona-de-derrama-2",
      namePrev: "",
      nameNext: "ARREBENTAÇÃO",
    },
  },
  "zona-de-derrama-2": {
    title: "ARREBENTAÇÃO",
    credits: `
  ♥ Footnotes ♥
*1 → Formless Formation by <enhanced style="blackbold">Hypatia Vourloumis</enhanced> and <enhanced style="blackbold">Sandra Ruiz</enhanced>
*2 → Conspiracy Without a Plot by <enhanced style="blackbold">Valentina Desideri</enhanced> and <enhanced style="blackbold">Stefano Harney</enhanced>
♥‿♥


Concept, Choreography & Performance: <enhanced style="blackbold"> Catol Teixeira</enhanced>
Created with & performed by: <enhanced style="blackbold">Auguste de Boursetty, Collin Cabanis, Acauā Shereya, Laura Raio </enhanced>
Sound creation: <enhanced style="blackbold">Chaos Clay </enhanced>
Light creation: <enhanced style="blackbold">Lui L’Abbate </enhanced>
Rigging: <enhanced style="blackbold">Rive Vayrou </enhanced>
Scenography by: <enhanced style="blackbold">Catol Teixeira, Rive Vayrou, Lui L’abbate</enhanced>
Costume: <enhanced style="blackbold">Yumi Ikeda Ferretti</enhanced>
Styling: <enhanced style="blackbold">Yann Slattery</enhanced> 
External eye: <enhanced style="blackbold">Jonas Van</enhanced>
Production assistant: <enhanced style="blackbold">Dylan Huido</enhanced>
Administration & Production: <enhanced style="blackbold">Rabea Grand</enhanced>
Tour management: <enhanced style="blackbold">Jerome Pique</enhanced> 
 
Co-Production : Création dans le cadre du programme <enhanced style="blackbold">(AC)COMPAGNONS du Pavillon ADC</enhanced>, soutenu par la <enhanced style="blackbold">Fondation Leenaards, Théâtre Vidy-Lausanne, EFFEA</enhanced> -Santarcangelo Festival, <enhanced style="blackbold">Points Communs</enhanced> - Nouvelle Scène Nationale - Cergy-Pontoise. This project is part of <enhanced style="blackbold">RESO </enhanced>– Dance Network Switzerland Coproduction Found.
Residency support: <enhanced style="blackbold">Point Éphémère</enhanced> (DRAC France), <enhanced style="blackbold">Festival actoral, CCN Ballet national de Marseille.</enhanced>
With support from : <enhanced style="blackbold">Pro Helvetia, Loterie Romande, Fondation Hans Wilsdorf, Ernst Göhner Stiftung</enhanced>
Thanks to: <enhanced style="blackbold">Maria Cristina Teixeira, Lea Genoud, Madeleine Amsler, Barbara Giongo, Chloe Demetriades, Simone Frey, Marcela Santander, Alessandra Domingues</enhanced>
Photo Credits: <enhanced style="blackbold">Gregory Bataradon, Mirian theus</enhanced>
`,
    description: `
  tumultuous touches polyphonic feelings /
arrebentação is arriving with extravagant tears , furious laughs and genuine failures .

<enhanced style="cutietitle">Arrebentação - Zona de Derrama.</enhanced>The term "Arrebentação" refers to the area of the sea where waves crash. It is a space where one can observe the wind interacting with the water's surface, negotiating the forces at play just before the moment of descent and break. Arrebentação is the zone where one either waits in anticipation or learns how to pierce it.
There is a distinct sound associated with this experience; the crashing waves against the rocks resonate as you feel the power of the water reaching the shore.
It is magnetic. It is constant. It embodies the trembling condition of the earth.

In this space, they connect and embrace the dynamics of falling. They find harmony and discord in their interactions. Though they lack a shared language, they intuitively understand the presence of something greater. They meet at the intersection of their voices, listening intently, trusting in the magic between them. They express themselves through screams and tears, or perhaps through exuberant laughter.
They strive to forge a conspiracy without a predetermined narrative, inspired by the ideas of Valentina Desideri and Stefano Harney*1.

(It carries its secrets, as it should.
It is laid bare, as it should.
It is vulnerable but not fragile.)

"Arrebentação" may evoke the potential for what is destined to shift and fall. It serves as a vignette for the end of this world*2.
In « arrebentação » 5 dancers create a choreography that is rooted in kuir disorientations and trembling imaginaries.


`,
    poems: ``,
    media: {
      head: `https://player.vimeo.com/video/1040017932`,
      single: `${
        import.meta.env.VITE_SUPABASE_STORAGE_URL
      }/arrebatacao_head.jpg`,
      dual: [
        `${
          import.meta.env.VITE_SUPABASE_STORAGE_URL
        }/arrebatacao_horizontal_1.webp`,
        ``,
      ],
    },
    usePoemImageLayout: false,
    navigationBanner: {
      state: true,
      prev: "zona-de-derrama-1",
      next: "",
      namePrev: "ZONA DE DERRAMA - first chapter",
      nameNext: "",
    },
  },
  "zona-de-derrama-3": {
    title: "ODE",
    credits: `Concept, choreography, dance: <enhanced style="blackbold">Catol Teixeira</enhanced>
Poetic conversation: <enhanced style="blackbold">Gabriela Perigo</enhanced>
Sound creation: <enhanced style="blackbold">Mbé, Luisa Lemgruber</enhanced>
Textile piece: <enhanced style="blackbold">Barbara Tavares, Catol Teixeira</enhanced>
Lights: <enhanced style="blackbold">Catol Teixeira, Gautier Teuscher</enhanced>
Administration production: <enhanced style="blackbold">Rabea Grand</enhanced>
Residency support at <enhanced style="blackbold">Espaço do tempo (POR)</enhanced>
With the support of <enhanced style="blackbold">SIS - Fondation suisse des artistes interprètes</enhanced>
Coproduction : <enhanced style="blackbold">Théâtre de Vidy-Lausanne (CH)</enhanced>
Thanks to: <enhanced style="blackbold">Cristina Teixeira, Maikon k, Juan Ferrari, Luana Bezerra, Fabian Barba, Ayla  Gabriela, Pierre-Nicolas Moulin</enhanced>
Photo credits: <enhanced style="blackbold"> Binta Kopp</enhanced>
`,
    description: `
<enhanced style="cutie">Synonymous with homage, an ode is a poem traditionally accompanied by music, dedicated to a person or event. Here, ODE unfolds as a dance dedicated to gaps, to ruptures and to transformations. Catol Teixeira’s choreographic research takes the form of a homage to that which does not occur, to that which never really settles in. ODE thus becomes a practice session devoted to the unaccomplished. In the rehearsal room at the Vidy Theatre, Catol Teixeira offers the audience a dance solo, an ode to the fleeting, to what might have been.</enhanced>
    `,
    poems: {
      head: `It carries the ache of departures, the friction of what resists, the pulse of something unknown. The body, caught between what was and what will be, absorbs the after-effect—a tremor in the hands, a tightness in the chest, a hesitation in the step. Some traces linger like stains, stubborn and unrelenting, carried even when they are not seen. Others, with time, reveal themselves as grace—subtle, fleeting, a lightness that comes only in the wake of surrender.
There is sorrow here, yes. The body knows its weight, holds it in the spine, in the way a shoulder folds inward, the way the momentum turns over and over again, in the way a hand retracts before reaching. And yet, in movement, something shifts. A hesitation softens into fluidity. A burden transforms into momentum. There is also joy—the quiet kind, the one that emerges not in spite of - but because of it. A reminder that even what stains can shimmer, that dense and heavy steps also leave a rhythm behind, too fleeting to hold.
	A shift in a path is never clean. It carries the friction of what was left behind, the tension of what is yet to come. In this performance, Catol embody this in-between state—the body as a map of previous movements, an archive of steps taken, hesitated, or resisted, a surfacing event.
`,
      end: `This solo proposes a return to choreographic materials left behind—traces of past works, procedures, and experimentations that remained on the way. Parallel to their on going group compositional works, initiated in 2023, Catol remain curious to dig artistically in between collaborations and dancing formats that can vary its forms.
The dance unfolds as an act of transition: what was once a moment of uncertainty, a break in rhythm, now manifests as movement. A stumble becomes a turn. A contraction unfurls into fluidity. The body carries the past forward, but not passively—it reshapes it, negotiates with it, turns weight into momentum.

	"ODE" searches to inhabit the raw space where traces linger, where steps are haunted by what came before, and yet, still pushes toward the unknown. The residue of a movement, the echo of a choice, the afterimage of impact. In the tension between stain and grace, the dance unfolds—not to answer, but to move in relation to.
`,
    },
    media: {
      head: `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/ODE3.webp`,
      single: "",
      dual: [
        `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/ODE1.webp`,
        `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/ODE2.webp`,
      ],
    },
    usePoemImageLayout: false,
    navigationBanner: {
      state: true,
      prev: "zona-de-derrama-2",
      next: "zona-de-derrama-1",
      namePrev: "ARREBENTAÇÃO",
      nameNext: "ZONA DE DERRAMA - first chapter",
    },
  },
  "la-peau-entre-les-doigts": {
    title: "LA PEAU ENTRE LES DOIGTS",
    credits: `
    2021- Conclusion Work/Bachelor Contemporary Dance a La Manufacture
2022 - Extended Version

Concept, Choreography, Performance: <enhanced style="blackbold">Catol Teixeira</enhanced>
Lights: <enhanced style="blackbold">Justine Bouillet</enhanced>
Music tracks: <enhanced style="blackbold">Tunga</enhanced> - DEDO ,  <enhanced style="blackbold">Revelation</enhanced> - Necxya ,  <enhanced style="blackbold">Chaos Clay</enhanced> - FuckCopace’ic (extracts)
Sound edition: <enhanced style="blackbold">Nico Wasmmer</enhanced>

`,
    description: `<enhanced style="cutietitle">La Peau entre Les Doigts / The Skin Between The Fingers</enhanced> is a choreographic dispositive that experiments and proposes to instigate questions of positionality, the perceptions of the other, to challenge social identity marks. “La Peau Entre Les Doigts” plays while deviating, while escaping.

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
the audience. La Peau entre Les Doigts is a dance about intimacy, distance and separation. A dance dedicated to what is left behind, abandoned. The work wishes to evoke the collective archive that one’s body carry - and move with, from, against, through it.
La Peau Entre Les Doigts does not seek clarity or purity, it goes hand in hand with uncertainty, with the unknown, observing opposition and the surrender of the body to gravity. Catol dances, moving where there is a crack to be crossed, surrendering and resisting, in perpetual transition, without a destination.



<enhanced style="cutie">♥ Inspirations ♥</enhanced>

<enhanced style="cutielink" link="https://static1.squarespace.com/static/58ad660603596eec00ce71a3/t/58bec800b8a79b7c599de24a/1488898050432/Orientations+Toward+a+Queer+Phenomenology.pdf">Orientations Toward a Queer Phenomenology</enhanced> 
<enhanced style="cutielink" link="https://morula.com.br/wp-content/uploads/2020/05/Encantamento.pdf">Encantamento</enhanced>
<enhanced style="cutielink" link="https://www.cobogo.com.br/produto/nao-vao-nos-matar-agora-they-won-t-kill-us-now-665">Não Vão Nos Matar Agora </enhanced> 
`,
    poems: "",
    media: {
      head: "https://player.vimeo.com/video/1023516278",
      single: "",
      dual: [
        `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/laPeau01.jpg`,
        `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/laPeau02.jpg`,
      ],
    },
    usePoemImageLayout: false,
    navigationBanner: false,
  },
};

export const biotext = `
<enhanced style="cutietitle">Catol Teixeira performs and creates dances</enhanced>. Born in Porto Alegre and living in Rio de Janeiro since adolescence, Catol has received technical training in ballet, circus, and some contemporary dance approaches. They develop a compositional practice as a means of translation.
<enhanced style="readme"> CATOL DANCES WHILE TRANSITIONING AND CRAFT PERFORMANCES AS INVOCATIONS </enhanced>

Catol worked with companies in Belo Horizonte (BR) from 2013 to 2015 (Palácio das Artes, SESC MG, Mário Nascimento), as well as with the group Intrépida Trupe in Rio de Janeiro
between 2010 and 2016. In 2016, they began theirjourney of studies and work outside Brazil—initially in Salzburg, Austria (SEAD-Bodhi Project), and later in Berlin, Germany

(ROAR). In 2021, they earned a bachelor's degree in Contemporary Dance from La Manufacture Haute École des Arts de la Scène in Lausanne, Switzerland and studied at the “work.master” in the Geneva School of Arts (HEAD).

Since then, they have been developing choreographic and performance practices that shape the body of their dance works. Their choreographies have been presented at Pavillon ADC in Geneva, Théâtre Vidy in Lausanne, La Ménagerie de Verre in Paris, Points Communs in Cergy, Festival Rakete/Tanzquartier in Vienna, Festival Actoral in Marseille, Festival Santarcangelo, Sélection Suisse at the Avignon Festival, Gessnerallee in Zurich, Institutto Svizzero in Rome, among others.

Catol’s choreographic experimentation with dance serves as a channel for revealing nuances and tactics of coexistence and relationship. Their interest is centered on collaborative processes between artistic practices and personal-collective inquiries, establishing an intimate dialogue in their composition work with kuir (“queer”) and trans-(dis)orientations —to recall a dream and enact an obstinate act of escape from the given-created plot of modernity-coloniality. Their last group choreographic work “arrebentação”, was premiered at Pavillon ADC - Geneva in November 2024. And their last solo work “ODE” was premiered in Mai 2025, at VIDY - Lausanne. 
`;

export const performances: Performance[] = [
  {
    title: `Eu vou aparecer bem no meio do seu sonho`,
    text: `<enhanced style="cutietitle">Eu vou aparecer bem no meio do seu sonho  </enhanced> August 2024 - at Halle Berghain, Berlin (GE) - in collaboration with Luara Raio  - During the exhibition of Danielle Brathwait-Shirley, “SOUL STATION” - curated by Mawena Yehouessi. The performance emerged from an ongoing artistic dialogue between Catol Teixeira and Luara Raio. Together, they searched for spells to cast in performative spaces, devising tactics to escape the binaries imposed by Western colonial-modern society. Their dance moved fluidly, always in curves and transitions. This performance was shaped as an improvised score, unfolding in silence yet in tune with the echoes and reverberations of the charged atmosphere of the vast Halle of Berghain. It was performed within the context of the SOUL STATION exhibition, where the space itself became an active participant in their movement and dance. `,
    image: `${
      import.meta.env.VITE_SUPABASE_STORAGE_URL
    }/eu-vou-aparecer-bem-no-meio-do-seu-sonho.jpg`,
    credits: { activity: "Photo Credit", names: "Milena Wegner" },
  },
  {
    title: `Rivers`,
    text: `<enhanced style="cutietitle">Rivers </enhanced> in collaboration with Gorge Bataille and Eden Levi Am, during the portraits exhibition “RIVERS” by Eden Levi Am at the Halle Norde Galerie Geneve / Performance part of the Fessestival, Geneva 2023 

“We are not mere witnesses of what is happening. We are the bodies through which mutation arrives and settles. The question is not who we are, but what we want to become. "1 (Preciado Paul B., Hypothèse révolution, Dysphoria mundi, Grasset, 2022, page 65).
It is said of the Naiads that they could live for thousands of years, while always remaining young and beautiful. That they had healing talents. That the sick came to drink the water from their spring. It is also said that the mere sight of a Naiad was risky because it could lead to temporary madness. eden levi am invokes the Naiads, and proposes a new mythology. Of the one who gives in to intimacy, lets it commune with the surrounding nature - of clay and water. 
(text by Gorge) `,
    image: `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/rivers.jpg`,
    credits: { activity: "Photo Credit", names: "Zohra Sans" },
  },
  {
    title: `zona1`,
    text: `<enhanced style="cutietitle">zona1 </enhanced> at one gee in fog, while their second episode of “collective imaginary studies”  
Geneva CH (in collaboration with Luara Raio) 
Luara and Catol propose to exercise and perform 3 different dislocations on the galerie space: 
“ a ronda”  , “the pattern of the soil calling the head”, “ the washing over”. During these 3 different moments, the performance is built as a constant negotiation between the two performers. 
They use repetitive and persistence as a way to evoke rituals for change: to change the violent state of things -  that are inscribed into capitalist-modern-colonial society. 
They wash over their body and let the drops fall.  `,
    image: `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/zona1_perfo.webp`,
    credits: { activity: "Photo Credit", names: "Errel Le Pape" },
  },
  {
    title: "notes on licking",
    text: `<enhanced style="cutietitle"> Notes on licking </enhanced> was initially developed during a research residency at the Halle Norde Gallerie in Geneva. Over the course of a week, Catol immersed themselves in the gallery space, focusing on material related to the creation of Clashes Licking. The residency allowed for an exploration of movement, objects, and themes central to their choreographic practice.
One key element that emerged was the use of a wig, which became both a prop and a “situation” within the performance. The wig took on various roles, evolving with each context and invitation where the performance was presented. It served as a tactile, transformative object that informed the dance’s fluidity, offering both restraint and freedom in movement.
In this work, both the wig and the improvised dance score engaged with themes of eroticism, as well as the shifting dynamics of distance and proximity between bodies. These themes were explored through subtle and charged gestures, creating a layered dialogue between intimacy, object, and space, while constantly adapting to different performative environments.

`,
    image: `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/notesOnLicking.webp`,
    credits: "",
  },
  {
    title: "de la pra ca daqui pra la",
    text: `<enhanced style="cutietitle"> de la pra ca daqui pra la </enhanced> site specific performance created for the exhibition “Between the Lines” curated by Danniel Tostes
Antoine Simeão Schalk

This performance was proposed as a gesture of “carrying and “draging” one material across the exhibition space. Catol proposed to the space of the gallery a dislocation of materials: a shell, sand and a heavy stone. All these materials were shaping the physicality and possible dislocations of their body, till the opposite location of the galerie. Things remained on the way, other ones arrived on the other side. The final gesture of this performative gesture were to leave the materials (“things”) exposed on the floor, as a metaphysic manner to tell the story of its “dislocation” 
`,
    image: `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/deAcaPraLa_perfo.webp`,
    credits: "",
  },
  {
    title: "antes de voltar (h)ouve uma onda",
    text: `<enhanced style="cutietitle"> antes de voltar (h)ouve uma onda  </enhanced> Contextual performance in Rio de Janeiro (2019)
an improvisation in between Luisa Lemgruber and Catol Teixeira at Espaço Montagem, RJ
A performance imagined as a moment of farewell. It happened simultaneous as other artistic performances, shows and party activities - a self managed independent scene in the city Rio de Janeiro, 2018 
(no register) `,
    image: `${
      import.meta.env.VITE_SUPABASE_STORAGE_URL
    }/antesDeVoltar_perfo.webp`,
    credits: "",
  },
];

export const menuItems: MenuItem[] = [
  {
    id: "zona-de-derrama",
    name: "ZONA DE DERRAMA",
    icon: DerramaGif,
  },
  {
    id: "clashes-licking",
    name: "CLASHES LICKING",
    icon: ClashesGif,
  },
  {
    id: "la-peau-entre-les-doigts",
    name: "LA PEAU ENTRE LES DOIGTS",
    icon: LaPeauGif,
  },
  {
    name: "WRITINGS DANCING AROUND",
    path: "/writing-dancing-around",
    icon: WritingsGif,
  },
  {
    name: "PERFORMANCE",
    path: "/performance",
    icon: PerfoGif,
  },
  {
    name: "BIO",
    path: "/bio",
    icon: BioGif,
  },
  {
    name: "INTERVIEWS AND PRESS",
    path: "/interviews-and-press",
    icon: InterviewGif,
  },
  {
    name: "CONTACT",
    path: "mailto:catol.teixeira@protonmail.com?subject=(your%20subject%20here)&body=(your%20question%20here)",
    icon: ContactoGif,
  },
  {
    name: "CALENDAR",
    path: "/calendar",
    icon: CalendarGif,
  },
];

export const pressContent: PressSection[] = [
  {
    title: " ",
    subsections: [
      {
        title: "",
        links: [
          {
            title: "PW-Magazine by Lewon Heublein",
            url: "https://pw-magazine.com/2024/craze-15-catol-teixeira",
          },
          {
            title: "Sceneweb.fr by Belinda Mathieu",
            url: "https://sceneweb.fr/catol-teixeira-danse-en-mutation/",
          },
          {
            title: "Gagarin Magazine by Michele Pascarella",
            url: "https://www.gagarin-magazine.it/2024/08/incontro-ravvicinato/its-not-fixed-its-a-journey-a-conversation-with-catol-teixeira-at-santarcangelo-festival/",
          },
        ],
      },
    ],
  },
  {
    title: "Interviews and articles - Zona de Derrama Project",
    subsections: [
      {
        title: "",
        links: [
          {
            title: "Centre National de la Danse",
            url: "https://www.cnd.fr/en/page/4355-catol-teixeira",
          },
          {
            title: "Mouvement Magazine",
            url: "https://www.mouvement.net/catol-teixeira-le-changement-c-est-maintenant",
          },
          {
            title: "Le Beau Bizarre",
            url: "https://audiosauti.com/@Le_Beau_Bizarre/episodes/le-beau-bizarre-51-avec-catol-teixeira",
          },
          {
            title: "Maculture.fr",
            url: "https://www.maculture.fr/catol-teixeira-zona-de-derrama",
          },
          {
            title: "Radio Télévision Suisse",
            url: "https://www.rts.ch/audio-podcast/2023/audio/catol-teixeira-et-sa-zona-de-derrama-au-festival-far-de-nyon-26161430.html",
          },
          {
            title: "PaneAcquaCulture",
            url: "https://www.paneacquaculture.net/2024/07/11/santarcangelo-2024-lapertura-del-festival-spiega-lapertura-del-festival/",
          },
          {
            title: "Campadidanza Dance Magazine",
            url: "https://www.campadidanza.it/catol-teixeira-inaugura-santarcangelo-festival-2024/",
          },
        ],
      },
    ],
  },
  {
    title: "Articles Clashes Licking",
    subsections: [
      {
        title: "",
        links: [
          {
            title: "ArtThrob",
            url: "https://artthrob.co.za/2023/12/07/the-walking-cure-infecting-the-city-2023/",
          },
          {
            title: "24 heures by Lea Gloor",
            url: "https://www.24heures.ch/theatre-de-vidy-un-spectacle-de-danse-queer-472539871389",
          },
          {
            title: "L'oeil d'Olivier",
            url: "https://www.loeildolivier.fr/2023/07/clashes-licking-de-catol-teixeira-ninventer-que-sa-danse/",
          },
          {
            title: "Les Inrocks",
            url: "https://www.lesinrocks.com/arts-et-scenes/avignon-2023-aux-hivernales-catol-teixeira-brise-les-codes-de-la-danse-et-du-genre-582170-17-07-2023/",
          },
          {
            title: "Altre Velocità",
            url: "https://www.altrevelocita.it/santarcangelo-festival-2-lartista-in-scena-come-proiezione-di-se-stesso/",
          },
          {
            title: "San Marino Fixing",
            url: "https://sanmarinofixing.com/2023/07/07/teixeira-torna-a-santarcangelo-con-la-prima-assoluta-di-clashes-licking/",
          },
          {
            title: "Sceneweb.fr",
            url: "https://sceneweb.fr/clashes-licking-genre-en-suspens/",
          },
          {
            title: "Magazine 360°",
            url: "https://360.ch/agenda/clashes-licking-2/",
          },
          {
            title: "Caos Cultura",
            url: "https://caos-cultura.ch/index.php/danza/224-una-danza-che-e-un-inno-all-erotismo-e-alla-forza-bellezza-del-corpo",
          },
        ],
      },
    ],
  },
  {
    title: "La Peau Entre Les Doigts",
    subsections: [
      {
        title: "",
        links: [
          {
            title: "Interview Collective Radiovostok",
            url: "https://radiovostok.ch/festival-go-go-go-2022-interview-de-catol-teixeira/",
          },
          {
            title: "Interview L'œil d'Olivier",
            url: "https://www.youtube.com/watch?v=tP0NBpNOol4",
          },
        ],
      },
      {
        title: "",
        links: [
          {
            title: "Article Mouvement Magazine by Zineb Soulaimani",
            url: "https://www.mouvement.net/scenes/catol-teixeira-se-liberer-par-les-interstices",
          },
          {
            title: "Article Sceneweb.fr by Belinda Mathieu",
            url: "https://sceneweb.fr/la-peau-entre-les-doigts-danse-humide/",
          },
          {
            title: "Article Cult.news by Amélie Blaustein-Niddam",
            url: "https://cult.news/scenes/performance/les-etats-de-corps-inaccoutumes-de-la-menagerie-de-verre/",
          },
        ],
      },
    ],
  },
];
