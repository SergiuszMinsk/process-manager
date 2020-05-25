import { CONSTANTS } from '../constants'

const STATUS_ITEMS = [CONSTANTS.RUNNING, CONSTANTS.SUCCESSED, CONSTANTS.FAILING]

export const generateRandomNumber = (min = 1,max = 10 ) =>
    Math.floor(Math.random() * (max - min + 1)) + min

export const generateUniqueString = () => String(Math.random().toString(36).substr(2, 9))

export const generateJobsByJobsCount = ({ jobsCount, id }) => {
    let results = []

    for (let i = 0; i < jobsCount; i++) {
        let job = {}
        job.name = generateUniqueString()
        job.id = generateUniqueString()
        job.status = STATUS_ITEMS[Math.floor(Math.random() * STATUS_ITEMS.length)]
        job.processId = id
        results.push(job)
    }

    return results
}

export const getProcessJobsStatus = jobs => {
    if (jobs.every(item => item.status === CONSTANTS.SUCCESSED)) {
        return CONSTANTS.SUCCESSED
    }

    if (jobs.every(item => item.status === CONSTANTS.FAILING)) {
        return CONSTANTS.FAILING
    }

    return CONSTANTS.RUNNING
}

export const removeProcessFromLocalStorage = processId => {
    Object.keys(localStorage).forEach(key => {
        let item = localStorage.getItem(key)
        if (JSON.parse(item).id === processId) {
            localStorage.removeItem(key)
        }
    })
}

export const retrieveItemsFromLocalStorage = () => {
    return Object.keys(localStorage).reduce((accumulator, current) => {
        let item = localStorage.getItem(current)
        return [...accumulator, JSON.parse(item)]
    }, [])
}

export const sortProcesses = (array, string) => {
    const compare = (a, b) => {
        const first = a[string]
        const second = b[string]

        let comparison = 0
        if (first > second) {
            comparison = 1
        } else if (first < second) {
            comparison = -1
        }
        return comparison
    }

    return [...array].sort(compare)
}

export const searchProcess = (array, string) => {
    let filtered = array.filter(item => item.name.includes(string))
    if (filtered.length) {
        return filtered
    } else {
        return array
    }
}