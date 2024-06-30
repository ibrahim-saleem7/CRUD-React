
/**
 * 
 * @param {string} txt - The text to be sliced
 * @param {number} max - The max length of the text to be sliced
 * @returns The sliced text, with ellipsis (...) appended if truncated.
 */
export function textSlicer(txt: string, max: number = 50) {
        return txt.length > max ? txt.slice(0, max) + "..." : txt
}