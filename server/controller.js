function addListing(req, res) {
    console.log("body:", req.body)
    const { name, address, city, state, zip, img, mortgage, rent } = req.body
    // console.log(img)
    req.app.get('db').addListing([ name, address, city, state, zip, mortgage, rent, img ])
    .then((listing) => res.status(201).json(listing))
    .catch(err => res.status(500).json(err))
}

function getListings(req, res) {
    req.app.get('db').getListings()
    .then((listings => res.status(200).json(listings)))
    .catch(err => res.status(500).json(err))
}

function removeListing(req, res) {
    req.app.get('db').removeListing(req.params.id)
    .then((listings => res.status(200).json(listings)))
    .catch(err => res.status(500).json(err))
}

module.exports = {
    addListing,
    getListings,
    removeListing
}