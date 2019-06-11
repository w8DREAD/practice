var arr = [1, 2];

function pick(arg) {
    return arg[Math.round(Math.random()*(arg.length - 1))]
}
module.exports = pick;