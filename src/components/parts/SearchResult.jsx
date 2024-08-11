import { motion } from 'framer-motion';
import { Card } from '../parts/Card'
import DativeAkkusatif from './DativeAkkusatif';
import PlaySugg from './PlaySugg';

const SearchResult = ({word,type,article,input}) => {


  const typeMessages = {
    noun: 'This word is a noun. In German, nouns are always capitalized and typically accompanied by an article ("der", "die", or "das"). Ensure you identify the noun\'s gender to use the correct article in sentences. Example: "der Hund" (the dog), "die Katze" (the cat), "das Haus" (the house).',
    verb: 'This word is a verb. In German, verbs are conjugated based on the subject and tense. It\'s important to learn the various conjugation forms. Example: "Ich gehe" (I go), "du gehst" (you go), "er/sie/es geht" (he/she/it goes).',
    adjective: 'This word is an adjective. Adjectives in German describe nouns and must agree in gender, number, and case with the noun they modify. Example: "ein schönes Haus" (a beautiful house), "eine große Katze" (a big cat).',
    adverb: 'This word is an adverb. Adverbs in German typically modify verbs, adjectives, or other adverbs, indicating how, when, where, or to what extent something occurs. Example: "schnell" (quickly), "oft" (often), "hier" (here).',
    pronoun: 'This word is a pronoun. Pronouns replace nouns and must align in gender, number, and case with the noun they substitute. Example: "er" (he), "sie" (she), "es" (it).',
    preposition: 'This word is a preposition. In German, prepositions often determine the case of the nouns or pronouns that follow them. Example: "mit dem Auto" (with the car), "auf dem Tisch" (on the table).',
    conjunction: 'This word is a conjunction. Conjunctions link words, phrases, or clauses, playing a crucial role in forming complex sentences. Example: "und" (and), "aber" (but), "oder" (or).',
    interjection: 'This word is an interjection. Interjections express strong emotions or reactions. Example: "Oh!" (Oh!), "Wow!" (Wow!).',
    particle: 'This word is a particle. In German, particles modify sentences or add emphasis and typically do not change form. Example: "doch" (but, however), "ja" (yes, indeed).',
    article: 'This word is an article. Articles specify a noun as definite or indefinite and must match the noun in gender, number, and case. Example: "der" (the, masculine), "die" (the, feminine), "das" (the, neuter).',
    numeral: 'This word is a numeral. Numerals express numbers or sequence positions and can be cardinal (eins, zwei) or ordinal (erste, zweite). Example: "eins" (one), "zwei" (two), "dritte" (third).',
    abbreviation: 'This word is an abbreviation. Abbreviations in German are shortened forms of words or phrases, frequently used in writing. Example: "z.B." (zum Beispiel, meaning "for example"), "Dr." (Doktor).'
  };


  return (
    <div>
    <motion.div 
      className="flex md:flex-row flex-col"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex md:flex-row flex-col">
      {/* Artikel */}
      {type==='noun' && 
   <>
   <PlaySugg/>
   <Card color={'red'} title='Artikle' content= {article}/>
   <Card color={'yellow'} title='🔤' content= {
    <DativeAkkusatif article={article} word={input}/> 
  }/>
   </>
   }
   <Card color={'green'} title={word} content= {typeMessages[type]}/>
    </div></motion.div> 
    </div>
  )
}

export default SearchResult