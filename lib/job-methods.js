import allJobs from '../data/allJobs.js';
import categories from '../data/categories.js';
import companyNames from '../data/companyNames.js';
import { randomIntBetween, randomItemInArray } from '../utils/utils.js';
import { MAX_NUM_JOBS_PER_CATEGORY } from './constants.js';



export function generateJobs(allJobsList) {
    const oneDay = 1000 * 60 * 60 * 24 * 7;
    return new Array(MAX_NUM_JOBS_PER_CATEGORY).fill().map(() => {
        const randomJob = randomItemInArray(allJobsList);
        return {
            title: randomJob.title,
            description: randomJob.description,
            salary: randomJob.salary,
            experience: randomJob.experience,
            companyName: randomItemInArray(companyNames),
            vacancies: randomIntBetween(1, 5),
            deadline: new Date(Date.now() + oneDay + randomIntBetween(1, 25))
        };
    });
}

export function getJobs({ category, amount, query = '' }) {
    let jobs = [];
    if (category !== 'random') {
        jobs = generateJobs(allJobs[category]);
    } else {
        const randomCategory = randomItemInArray(categories);
        return getJobs({
            category: randomCategory,
            amount,
            query
        });
    }

    const filteredJobs = query
        ? jobs.filter(job => job.title?.toLowerCase()?.includes(query.toLowerCase()))
        : jobs;
    return filteredJobs.splice(0, amount);
}
