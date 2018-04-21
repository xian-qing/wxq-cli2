import page1Service from './page1Service.js'

function createPrivateInstanceWrap(privateClass) {
    let instanceCache = null
    return function createPrivateInstance(single = true) {
        if(single && instanceCache) {
            return instanceCache
        }

        return (instanceCache = new privateClass())
    }
}

export const pageService =  createPrivateInstanceWrap(page1Service)