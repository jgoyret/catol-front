import React from "react";
import TwoColumnsFree from "../components/TwoColumnsFree";

const WritingDancingAround: React.FC = () => {
  interface ContentItem {
    columnLeft: string[];
    columnRight: string[];
  }

  const data: ContentItem = {
    columnLeft: [
      `dancing to
the not sent message, to what is not mine, to the violence of modernity, to the smiles of friends, to the hug of honest reconciliation, to morning sex, to the fear or hurting a beloved, to the shyness, to the healing, to the looking at that eyes, to the transmutations, to the night i didnt come, to try, to the fragility of being there, to the sand under my feet, to the smell of her sex, to the people i don’t remember, to the lost stories, to the fears, to the places i couldnt go, to the self im not, to the pillow i lost, to the things i abandoned, to the dreams i forgot, to the body i cant have, to the loud laughter, to the hug we gave, to the eyes of her, to the lips of them, to the smell of his, to the fear of death, to the joy of dying, to the failure, to the attempt, to the laughing crises, to the brokenness of insisting, to the dream of last night, to the dances
`,
      "https://qermkkrhilxobhfrefim.supabase.co/storage/v1/object/public/catolmedia/writings04.webp?t=2024-11-06T18%3A22%3A23.524Z",
      `pra seguir podendo rir de si;
prazer is such a pleasure
treasures: your joy smells like home

it’s neptune
the chart of secrets;
hugs touching my stomach after falling before falling and while falling feelings momentum dropping time in your ceu da boca
lips touching:    i have been dreaming a lot with rain and with your eyes go go go:    deviate your gaze
gargalhar das trapaças and we remain dancing	
`,
    ],
    columnRight: [
      `https://qermkkrhilxobhfrefim.supabase.co/storage/v1/object/public/catolmedia/writing02.webp?t=2024-11-06T18%3A23%3A26.605Z`,
      `the thing is: that plant in the small pot died and im gonna flow without pause as the cycle so absurdly exposes getting to an end the letters the debts the whole control fuck off but yes i hear the oraculo there is the love oh ual but so many ways and beds and a way of living and all many all mess up feelings I couldn’t say and stories i couldn’t tell 
the parties and the music and the dances to scream out what needs to be channeled 
to find the stone silence inside every cilia dancing into healing 
the alliances the trust the smiles oh how many eyes i see in my thoughts right now 
how many melting chests and pleasant feelings and so many turns how many turns and learning and aging and respect your tears your sweat the salt waters on those last months and i also realized my first wrinkles craving my face feels good on me the after 30 arriving my vertebras my flehs my face all changing while the mg of gel are part of my blood bleeding i was bleeding that night and i could lick you for hours high memories of touches and suddenly carnaval happened as in a dream sometimes all this that is happening right now feels like a dream because the spiral of time just drives me i surrender i surrender please take me i know you like it i can give it to you and and then the early morning jet leg things circulating in my blood circulation pleasure delightful in my back circulations to help me to cope with this whole situation please please please dont ask me what i need also dont ask me how is it going let me tell about the horoscopes and tell me your love life and your fears and pleasures how are you dancing with it right now you know that i know that you know that the dreams well whatever time passes the flow of words just get me as urgent as your scream as urgent as the end of this whole shit and all these that we remain escaping but then why why why there is no way to get it anyway and i get anxious with the days and i get pleasures out of actually needing to move with your smell in my fingers
`,
      `https://qermkkrhilxobhfrefim.supabase.co/storage/v1/object/public/catolmedia/writing03.webp?t=2024-11-06T18%3A24%3A03.203Z`,
    ],
  };

  return (
    <div className=" mx-auto">
      <h1 className="text-6xl lg:text-8xl 2xl:text-9xl font-bold mb-4 font-chuchi text-center">
        WRITING AND DANCING AROUND
      </h1>
      <TwoColumnsFree data={data} />
    </div>
  );
};

export default WritingDancingAround;
