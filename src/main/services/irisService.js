
class IrisService {
    async getIris(sepalLength, sepalWidth, petalLength, petalWidth) {
        return await new Promise(async (resolve, reject) => {
            const spawn = require('child_process').spawn
            const script = spawn('python', ['../scripts/getIris.py', sepalLength, sepalWidth, petalLength, petalWidth])
            script.stdout.on('data', data => {
                resolve(data)
            })

            script.stdout.on('error', error => {
                reject(error)
            })
        })
    }
}

module.exports =  new IrisService()
