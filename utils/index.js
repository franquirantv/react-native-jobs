export const checkImageURL = (url) => {
  if (!url || url === null) return false
  else {
    const pattern = /^https?:\/\/.+.(png|jpg|jpeg|bmp|gif|webp)$/i
    return pattern.test(url)
  }
}
