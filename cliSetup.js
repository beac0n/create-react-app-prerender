const program = require('commander')

program.version('3.0.0')

const options = [
    ['-h --html <htmlPath>', 'path to built html'],
    ['-a --app <appPath>', 'path to app source file'],
    ['-p --props <appProperties>', 'properties for the app'],
    ['-i --rootId <rootId>', 'div id where the app is rendered'],
    ['-b --babel [babelConfig]', 'a JSON string, providing your babel config', true],
    ['-d --dry', 'execute dry run, which does not save the prerendered html', true],
    // TODO: add silent mode
]

options.forEach((option) => program.option(option[0], option[1]))
program.parse(process.argv)

options.filter((option) => !option[2]).forEach((option) => {
    const key = option[0].split(' ')[1].replace(/-/g, '')

    if(!program[key]) {
        program.help()
    }
})

module.exports = program
