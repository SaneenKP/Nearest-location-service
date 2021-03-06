var coordinates = (data) => {

    const {latitude , longitude} = data;

    if(latitude < -90 || latitude > 90){
        throw new Error('Invalid latitude value !')
    }
    if(longitude < -180 || longitude > 180){
        throw new Error('Invalid longitude value !')
    }

    return {
        latitude: latitude,
        longitude: longitude
    }

}

module.exports = coordinates