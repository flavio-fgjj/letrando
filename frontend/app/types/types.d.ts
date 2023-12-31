interface IWord {
  date: Date;
  word: string | undefined;
  grammatical_class: string | undefined;
  meaning: string | undefined;
  synonyms: [string] | undefined;
  antonyms: [string] | undefined;
  phrase: {
    author: string;
    phrase: string;
    font: string;
  } | undefined;
}