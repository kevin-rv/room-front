import axios from 'axios';
// import qs from "qs";

class Api
{

    constructor(rootPath) {
        this.axios = axios
        this.rootPath = rootPath
    }

    addApartment(data) {
        return this.axios
            .post(this.rootPath + '/addApartment', data, {headers: {Authorization: 'Bearer ',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }})
            .then(response => {
                // respose = response.data
                return   response.data
                // console.log(response)
            });
    }
    getAllApartments() {
        return this.axios
            .get(this.rootPath + '/apartments', {headers: {Authorization: 'Bearer ',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }})
            .then(response => {
                // respose = response.data
                return   response.data
                // console.log(response)
            });
    }

    updateApartment(apartment) {
        return this.axios
            .patch(this.rootPath + '/edit/' + apartment.id, apartment, {headers: {Authorization: 'Bearer ',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }})
            .then(response => {
                // respose = response.data
                return   response.data
                // console.log(response)
            });
    }

    deleteApartments(apartId) {
        return this.axios
            .delete(this.rootPath + '/delete/' + apartId.id , {headers: {Authorization: 'Bearer ',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }})
            .then(response => {
                // respose = response.data
                return   response.data
                // console.log(response)
            });
    }

    addRoom(apartmentId, data) {
        return this.axios
            .post(this.rootPath + '/apartment/' + apartmentId + '/addRoom', data, {headers: {Authorization: 'Bearer ',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }})
            .then(response => {
                // respose = response.data
                return   response.data
                // console.log(response)
            });
    }

    getAllRooms() {
        return this.axios
            .get(this.rootPath + '/rooms', {headers: {Authorization: 'Bearer ',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }})
            .then(response => {
               // respose = response.data
              return   response.data
                // console.log(response)
            });
    }

    getAllRoomInApartment(apartmentId) {
        return this.axios
            .get(this.rootPath + '/apartment/' + apartmentId + '/rooms', {headers: {Authorization: 'Bearer ',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }})
            .then(response => {
                // respose = response.data
                return   response.data
                // console.log(response)
            });
    }

    updateRoom(room) {
        return this.axios
            .patch(this.rootPath + '/editRoom/' + room.id, room, {headers: {Authorization: 'Bearer ',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }})
            .then(response => {
                // respose = response.data
                return   response.data
                // console.log(response)
            });
    }

    deleteRoom(roomId) {
        return this.axios
            .delete(this.rootPath + '/deleteRoom/' + roomId.id , {headers: {Authorization: 'Bearer ',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }})
            .then(response => {
                // respose = response.data
                return   response.data
                // console.log(response)
            });
    }
}

export default new Api(process.env.VUE_APP_ROOM_API_ROOT);