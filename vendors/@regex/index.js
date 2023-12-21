var group = []

function configure(preferences) {

    group = []

    const sentences = preferences.structure.matchAll(preferences.regex)

    for (const sentence of sentences) {

        group.push(`${sentence}`)

    }

    return ({
        group: group
    })
}

module.exports = { configure };