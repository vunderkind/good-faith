const express = require('express');

const Beneficiaries = require('./beneficiary-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Beneficiaries.find()
  .then(Beneficiaries => {
    res.json(Beneficiaries);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get Beneficiaries' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Beneficiaries.findById(id)
  .then(info => {
    if (info) {
      res.json(info);
    } else {
      res.status(404).json({ message: 'Could not find beneficiary info for this particular person.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get Beneficiary :(' });
  });
});


router.post('/', (req, res) => {
  const infoData = req.body;

  Beneficiaries.add(infoData)
  .then(info => {
    res.status(201).json({Success: "New info updated!"});
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new info' });
  });
});



router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Beneficiaries.findById(id)
  .then(info => {
    if (info) {
      Beneficiaries.update(changes, id)
      .then(updatedinfo => {
        res.json(updatedinfo);
      });
    } else {
      res.status(404).json({ message: 'Could not find info with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update info' });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Beneficiaries.remove(id)
  .then(deleted => {
    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find info with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete info' });
  });
});

module.exports = router;