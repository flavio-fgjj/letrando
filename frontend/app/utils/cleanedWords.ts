export class CleanWordUtil {
  public static clean(word: string) {
    return word
      .toLowerCase()
      .trim()
      .replace(/ç/g, 'c')
      .replace(/á/g, 'a')
      .replace(/é/g, 'e')
      .replace(/í/g, 'i')
      .replace(/ó/g, 'o')
      .replace(/ú/g, 'u')
      .replace(/ã/g, 'a')
      .replace(/õ/g, 'o')
      .replace(/â/g, 'a')
      .replace(/ê/g, 'e')
      .replace(/ô/g, 'o')
      .replace(/ü/g, 'u')
      .replace(/à/g, 'a')
      .replace(/[^\w\s-]/gi, '');
  }
}
