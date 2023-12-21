var _classified = []

function configure(preferences) {

    _classified = []

    _classified.push(":where(:not(html,iframe,canvas,img,svg,video,audio):not(svg *,symbol *)){all:unset;display:revert}*,::after,::before{box-sizing:border-box}html{font-family:'_65aa21be9d76d7fa16100'}a,button{cursor:pointer}menu,ol,summary,ul{list-style:none}a,img{display:block}img{max-inline-size:100%;max-block-size:100%}table{border-collapse:collapse}input,select,textarea{min-width:100%;max-width:100%}")

    for (const group of preferences.group) {

        const unclassified = group.replaceAll('class="', '').replaceAll(/]">.*/g, ']')

        const regrouped = unclassified.split(' ')

        for (const regroup of regrouped) {
    
            const classified = regroup.split('-[')

            const virtues = classified[1].split(':')

            const _class = regroup.replaceAll('-', '-\\').replaceAll(']', '\\]').replaceAll('/', '\\\/\\').replaceAll(':', '\\\:\\').replaceAll('.', '\\.')
            
            if (classified[0] == 'areas') {

                const display = virtues[0].replaceAll('[', '').replaceAll(']', '').replaceAll('/', ' ')
                const columns = virtues[1].replaceAll('[', "'").replaceAll(']/', "' '").replaceAll("''", "'").replaceAll("]", "'")
                const gap = virtues[2].replaceAll('[', '').replaceAll(']', '').replaceAll('/', ' ')

                var __classified = _classified.toString()
                var throwned = __classified.includes(_class)

                if (!throwned) {

                    _classified.push('.' + _class + '{display:' + display + ';grid-template-areas:' + columns + ';grid-gap:' + gap +';}').toString()

                } else {

                    // console.log('Już istnieje')

                }
            }

            if (classified[0] == 'columns') {

                const display = virtues[0].replaceAll('[', '').replaceAll(']', '').replaceAll('/', ' ')
                const columns = virtues[1].replaceAll('[', "").replaceAll(']/', " ").replaceAll("''", "'").replaceAll("]", "")
                const gap = virtues[2].replaceAll('[', '').replaceAll(']', '').replaceAll('/', ' ')
                var align = virtues[3].replaceAll('[', '').replaceAll(']', '').replaceAll('/', ' ')
                var justify = virtues[4].replaceAll('[', '').replaceAll(']', '').replaceAll('/', ' ')

                if (align == 'middle') {
                    align = 'center'
                }

                if (justify == 'middle') {
                    justify = 'center'
                }

                if (justify == 'between') {
                    justify = 'space-between'
                }

                var __classified = _classified.toString()

                var throwned = __classified.includes(_class)

                if (!throwned) {

                    _classified.push('.' + _class + '{display:' + display + ';grid-template-columns:' + columns + ';grid-gap:' + gap +';align-items:' + align + ';justify-content:' + justify + ';}').toString()

                } else {

                    // console.log('Już istnieje')

                }
            }

            if (classified[0] == 'padding') {

                const size = virtues[0].replaceAll('[', '').replaceAll(']', '').replaceAll('/', ' ')

                var __classified = _classified.toString()
                var throwned = __classified.includes(_class)

                if (!throwned) {

                    _classified.push('.' + _class + '{padding:' + size + ';}').toString()

                } else {

                    // console.log('Już istnieje')

                }
            }

            if (classified[0] == 'margin') {

                const size = virtues[0].replaceAll('[', '').replaceAll(']', '').replaceAll('/', ' ')

                var __classified = _classified.toString()
                var throwned = __classified.includes(_class)

                if (!throwned) {

                    _classified.push('.' + _class + '{margin:' + size + ';}').toString()

                } else {

                    // console.log('Już istnieje')

                }
            }

            if (classified[0] == 'type') {

                const color = virtues[0].replaceAll('[', '').replaceAll(']', '').replaceAll('/', ' ')
                const size = virtues[1].replaceAll('[', "").replaceAll(']/', "' '").replaceAll("''", "'").replaceAll("]", "")
                const weight = virtues[2].replaceAll('[', '').replaceAll(']', '').replaceAll('/', ' ')
                const line_height = virtues[3].replaceAll('[', '').replaceAll(']', '').replaceAll('/', ' ')
                var align = virtues[4].replaceAll('[', '').replaceAll(']', '').replaceAll('/', ' ')

                if (align == 'middle') {
                    align = 'center'
                }

                var __classified = _classified.toString()
                var throwned = __classified.includes(_class)

                if (!throwned) {

                    _classified.push('.' + _class + '{color:#' + color + ';font-size:' + size + ';font-weight:' + weight +';line-height:' + line_height +';text-align:' + align + ';}').toString()

                } else {

                    // console.log('Już istnieje')

                }
            }

            if (classified[0] == 'contour') {

                const color_1 = virtues[0].replaceAll('[', '').replaceAll(']', '').replaceAll('/', ' ')
                const color_2 = virtues[1].replaceAll('[', "").replaceAll(']/', "' '").replaceAll("''", "'").replaceAll("]", "")
                const size_1 = virtues[2].replaceAll('[', '').replaceAll(']', '').replaceAll('/', ' ')
                const size_2 = virtues[3].replaceAll('[', "").replaceAll(']/', "' '").replaceAll("''", "'").replaceAll("]", "")

                var __classified = _classified.toString()
                var throwned = __classified.includes(_class)

                if (!throwned) {

                    _classified.push('.' + _class + '{background:#' + color_1 + ';border-color:#' + color_2 + ';border-width:' + size_1 +';border-radius:' + size_2 +';border-style:solid;}').toString()

                } else {

                    // console.log('Już istnieje')

                }
            }

            if (classified[0] == 'measure') {

                const size_1 = virtues[0].replaceAll('[', '').replaceAll(']', '').replaceAll('/', ' ')
                const size_2 = virtues[1].replaceAll('[', "").replaceAll(']/', "' '").replaceAll("''", "'").replaceAll("]", "")

                var __classified = _classified.toString()

                var throwned = __classified.includes(_class)

                if (!throwned) {

                    _classified.push('.' + _class + '{width:' + size_1 +';height:' + size_2 +';}').toString()

                } else {

                    // console.log('Już istnieje')

                }
            }
        }
    }
    
    const __ = _classified.toString().replaceAll('},', '}')

    return (__)

}

module.exports = { configure };