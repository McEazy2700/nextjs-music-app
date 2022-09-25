/**
 * Return the slugified result of the url plus the expra.
 * @param {string} url - this can refere to the title of the song or album.
 * @param {string} extra - this can refere to the ID of the target album.
 */
export const slugify = (url: string, extra?: string) => {
  const lowerCased = url.toLowerCase()
  const words = lowerCased.split(' ')
  words.push(extra)
  const slugigied = words.join('-')
  return slugigied
}

/**
 * Deslugifies a slug and returns the last value at the end of the slug, this should be the id.
 * @param {string} slug - the slug to be processed
 */
export const deslugify = (slug: string | string[]) => {
  if (typeof slug === "string") {
    const pieces = slug.split('-')
    const chosenOne = pieces[pieces.length - 1]
    return chosenOne
  }
}
