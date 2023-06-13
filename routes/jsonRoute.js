const express = require('express');
const router = express.Router()
const fs = require('fs/promises')


router.get('/first', async (req, res) => {
    console.log('query', req.query)
    const obj = {key: 'value'}
    res.json(obj)
})


router.post('/:id', (req, res) => {
    console.log('body--->', req.params)
    res.end()
})

module.exports = router