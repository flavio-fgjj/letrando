export class Words {
  id: number | undefined;
  word: string | undefined;
}

export class Word {
  word: string | undefined;
  status: string | undefined;
  tries: [[]] | undefined;
  answers: number | undefined;
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
