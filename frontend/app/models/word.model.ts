export class Words {
  id: number | undefined;
  word: string | undefined;
}

export class Word {
  word: string | undefined;
  status: string | undefined;
  tries: any[] | undefined;
  answers: number | undefined;
  grammatical_class: string | undefined;
  meaning: string | undefined;
  synonyms: [string] | undefined;
  antonyms: [string] | undefined;
  phrase:
    | {
        author: string;
        phrase: string;
        font: string;
      }
    | undefined;
}

export class WordsStorage {
  date: string | undefined;
  words: string[] | undefined;
  status: string | undefined;
  word_0: Word | undefined;
  word_1: Word | undefined;
  word_2: Word | undefined;
  word_3: Word | undefined;
  word_4: Word | undefined;
}
