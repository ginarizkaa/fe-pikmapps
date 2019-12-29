<template>
    <daykeep-calendar
    :event-array="eventArray"
    />
</template>
<script>
import { DaykeepCalendar } from '@daykeep/calendar-quasar'
export default {
    components : {
        DaykeepCalendar
    },
    data () {
      return {
        eventArray: [
            {
                id: 1,
                summary: 'Launching',
                description: 'Jangan Lupa Hadir',
                location: 'JL. Letjend. H.Ibrahim Adjie, No. 137, Tasikmalaya, 46151, Indihiang, Kec. Indihiang, Tasikmalaya, Jawa Barat 46151',
                start: {
                dateTime: '2019-12-16T14:00:00',
                timeZone: 'Asia/Jakarta'
                },
                end: {
                dateTime: '2019-12-17T16:30:00',
                timeZone: 'Asia/Jakarta'
                },
                color: 'info',
                attendees: [
                    {
                        id: 5,
                        email: 'somebody@somewhere.com',
                        displayName: 'Muhamad Rizky',
                        organizer: false,
                        self: false,
                        resource: false
                    },
                    {
                        id: 6,
                        email: 'somebody@somewhere.com',
                        displayName: 'Dindin Mahpudim',
                        organizer: false,
                        self: false,
                        resource: false
                    },
                    {
                        id: 7,
                        email: 'somebody@somewhere.com',
                        displayName: 'Gina Rizka Alsyah',
                        organizer: false,
                        self: false,
                        resource: false
                    },
                    {
                        id: 31,
                        email: '',
                        displayName: 'LBB Pikma Tasikmalaya',
                        organizer: false,
                        self: false,
                        resource: true
                    },
                    
                ]
            },
            {
                id: 2,
                summary: 'Launching',
                description: 'Jangan Lupa Hadir',
                location: 'JL. Letjend. H.Ibrahim Adjie, No. 137, Tasikmalaya, 46151, Indihiang, Kec. Indihiang, Tasikmalaya, Jawa Barat 46151',
                start: {
                dateTime: '2019-12-30T00:00:00',
                timeZone: 'Asia/Jakarta'
                },
                end: {
                dateTime: '2019-12-31T10:30:00',
                timeZone: 'Asia/Jakarta'
                },
                color: 'warning',
                attendees: [
                    {
                        id: 5,
                        email: 'somebody@somewhere.com',
                        displayName: 'Muhamad Rizky',
                        organizer: false,
                        self: false,
                        resource: false
                    },
                    {
                        id: 6,
                        email: 'somebody@somewhere.com',
                        displayName: 'Dindin Mahpudim',
                        organizer: false,
                        self: false,
                        resource: false
                    },
                    {
                        id: 7,
                        email: 'somebody@somewhere.com',
                        displayName: 'Gina Rizka Alsyah',
                        organizer: false,
                        self: false,
                        resource: false
                    },
                    {
                        id: 31,
                        email: '',
                        displayName: 'LBB Pikma Tasikmalaya',
                        organizer: false,
                        self: false,
                        resource: true
                    },
                    
                ]
            },
        ]
      }
    },
    
}
</script>