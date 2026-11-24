// All page content lives here. Layout lives in the components.
export type EventInfo = {
  key: 'ceremony' | 'reception'
  title: string
  /** Shown on the schedule timeline. */
  time: string
  timeNote: string
  venue: {
    name: string
    /** Two-line version used inside the card. */
    cardName: [string, string]
    mapsUrl: string
  }
  /** Lines under the venue name in the Location section. */
  summary: string
  /** Two lines shown inside the card. */
  cardLines: [string, string]
  calendar: { title: string; dates: string; details: string; location: string }
}

export const invite = {
  groom: { name: 'Theodore', fullName: 'Theodore James Ainsley' },
  bride: { name: 'Poppy', fullName: 'Poppy Rose Greaves' },

  eyebrow: 'Holy Matrimony',
  dateShort: '02.10.27',
  dateLong: 'Saturday, 2 October 2027',
  tagline: ['Two Hearts', 'One Promise', 'A Lifetime of Love & Faith'],
  greeting: 'Dear Friends and Family',
  message:
    'Join us for an evening of love, laughter, blessings, and unforgettable memories as we begin our forever.',

  // The celebration begins with the wedding ceremony (2:00 PM BST, 2 Oct 2027).
  countdownTarget: new Date('2027-10-02T14:00:00+01:00'),
  countdownTitle: 'The Celebration Begins In',
  countdownDone: 'See you there!',

  scheduleTitle: 'Schedule of Events',

  events: [
    {
      key: 'ceremony',
      title: 'Ceremony',
      time: '2:00 PM',
      timeNote: 'Holy Matrimony',
      venue: {
        name: "St Mary's Church",
        cardName: ["St Mary's", 'Church'],
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Henley-on-Thames%2C%20Oxfordshire',
      },
      summary: 'Saturday, 2 October 2027 at 2:00 PM\n(Holy Matrimony)',
      cardLines: ['Saturday, 2 October 2027', '2:00 PM (Holy Matrimony)'],
      // Floating local times; calendar.ts adds ctz=Europe/London.
      calendar: {
        title: 'Wedding of Theodore & Poppy',
        dates: '20271002T140000/20271002T160000',
        details: 'Holy Matrimony of Theodore James Ainsley and Poppy Rose Greaves at 2:00 PM.',
        location: "St Mary's Church, Hart Street, Henley-on-Thames, Oxfordshire",
      },
    },
    {
      key: 'reception',
      title: 'Reception',
      time: '6 PM',
      timeNote: 'Onwards',
      venue: {
        name: 'Silverwillow Barn',
        cardName: ['Silverwillow', 'Barn'],
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Henley-on-Thames%2C%20Oxfordshire',
      },
      summary:
        'Address: Silverwillow Barn, Remenham Lane, Henley-on-Thames, Oxfordshire',
      cardLines: ['Saturday, 2 October 2027', '6:00 PM Onwards'],
      calendar: {
        title: 'Wedding Reception of Theodore & Poppy',
        dates: '20271002T180000/20271002T230000',
        details: 'Reception for Theodore James Ainsley and Poppy Rose Greaves, 6 PM onwards.',
        location: 'Silverwillow Barn, Remenham Lane, Henley-on-Thames, Oxfordshire',
      },
    },
  ] satisfies EventInfo[],

  familiesTitle: 'Our Families',
  families: [
    {
      name: 'Theodore James Ainsley',
      relation: 'Son of',
      parents: ['Mr Richard Ainsley', '& Mrs Helen Ainsley'],
    },
    {
      name: 'Poppy Rose Greaves',
      relation: 'Daughter of',
      parents: ['Mr Andrew Greaves', '& Mrs Susan Greaves'],
    },
  ],
  closing: { title: 'With Love', text: 'We warmly request your presence and blessings.' },

  credit: { label: 'Crafted by', name: 'Talvoco', url: 'https://talvoco.com', music: '"Gymnopedie No. 2" by Kevin MacLeod (incompetech.com) - CC BY 4.0' },

  media: {
    introCover: '/media/seal.png',
    introVideo: '/media/intro.mp4',
    music: '/media/music.mp3',
    heroVideo: '/media/swans.mp4',
    venue: '/media/venue.png',
  },
}
