const { default: axios } = require("axios");

async function getCulture(prompt) {
    try {
        const image = await axios.get(`https://api.waifu.pics/nsfw/${prompt}`)
        console.log(image.data)
        return image.data
    } catch (error) {
        console.error(error)
        return error
    }
}

module.exports = getCulture