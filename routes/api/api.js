import express from 'express';
export const router = express.Router();

import { getJobs } from '../../lib/job-methods.js';
import { isValidCategory, isValidAmount } from '../../utils/utils.js';
import { DEFUALT_AMOUNT } from '../../lib/constants.js';



router.get('/jobs', handler);
router.get('/jobs/:category', handler);
router.get('/jobs/:category/:amount', handler);

function handler(req, res) {
    let { category, amount } = req.params;
    const { query = '' } = req.query;

    try {
        if (!category) {
            category = 'random'; // treat no category specified as random
        } else if (!isValidCategory(category) && category !== 'random') {
            return res.status(400).json({
                success: false,
                message: 'Invalid category'
            });
        }

        if (!amount) {
            amount = DEFUALT_AMOUNT; // default amount of jobs returned, if no amount specified
        } else if (!isValidAmount(amount)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid amount'
            });
        }
        amount = parseInt(amount);

        const jobs = getJobs({
            category,
            amount,
            query
        });

        return res.status(200).json({
            success: true,
            jobs
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: 'Encountered server error.'
        });
    }
}