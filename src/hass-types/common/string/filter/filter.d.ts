export interface Match {
    start: number;
    end: number;
}
export declare function isPatternInWord(patternLow: string, patternPos: number, patternLen: number, wordLow: string, wordPos: number, wordLen: number, fillMinWordPosArr?: boolean): boolean;
/**
 * An array representing a fuzzy match.
 *
 * 0. the score
 * 1. the offset at which matching started
 * 2. `<match_pos_N>`
 * 3. `<match_pos_1>`
 * 4. `<match_pos_0>` etc
 */
export type FuzzyScore = number[];
export declare function fuzzyScore(pattern: string, patternLow: string, patternStart: number, word: string, wordLow: string, wordStart: number, firstMatchCanBeWeak: boolean): FuzzyScore | undefined;
export type FuzzyScorer = (pattern: string, lowPattern: string, patternPos: number, word: string, lowWord: string, wordPos: number, firstMatchCanBeWeak: boolean) => FuzzyScore | undefined;
export declare function createMatches(score: undefined | FuzzyScore): Match[];
/**
 * A fast function (therefore imprecise) to check if code points are emojis.
 * Generated using https://github.com/alexdima/unicode-utils/blob/master/generate-emoji-test.js
 */
export declare function isEmojiImprecise(x: number): boolean;
