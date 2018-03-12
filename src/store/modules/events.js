import axios from 'axios'
import eventData from '@/data/info3.json'

const state = {
  events: [],
  selectedEvent: null,
  dataReturned: false
}

const getters = {
  allEvents: state => state.events,
  selectedEvent: state => state.selectedEvent,
  dataReturned: state => state.dataReturned,
  firstTrack: state => state.selectedEvent.tracks[0]
}

const actions = {
  // TODO: add events store actions

  getAllEvents ({commit}) {
    if (process.env.NODE_ENV === 'development') {
      commit('setEvents', eventData)
    } else {
      axios.get('http://127.0.0.1:1323/api/v1/events').then(resp => {
        return resp.data
      }).then(data => {
        commit('setEvents', data)
      }).catch(error => {
        console.log('error getting data: ' + error)
      })
    }
  },
  setSelectedEvent ({commit}, payload) {
    const id = payload.target.value
    const event = state.events.filter(x => x.id.toString() === id.toString())[0]
    commit('setSelectedEvent', event)
  }
}

const mutations = {
  // TODO: add mutations events store
  setEvents (state, payload) {
    state.events = payload
    state.selectedEvent = payload[0]
    state.dataReturned = true
  },
  setSelectedEvent (state, payload) {
    state.selectedEvent = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
