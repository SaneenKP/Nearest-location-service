const getNearestCoordinatesQuery = (longitude , latitude , max , min) => {

    return {
        location: {
            $near: {
                $geometry: {
                    type:"Point",
                    coordinates: [longitude , latitude]
                },
                $maxDistance: max,
                $minDistance: min,
            }
        }
    }
}

module.exports = getNearestCoordinatesQuery()