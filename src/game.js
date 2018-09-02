export default {
  steps: [
    {
      title: 'Prologue',
      texts: [
        "Welcome to this Adventure!",
        "This is going to be fun!",
      ],
      actions: [
        {
          text: 'Begin your story.',
          conditions: [
            {
              id: "has_item",
              item: 'Chocolate Bar',
            }
          ],
          effects: [
            {
              id: 'use_item',
              item: 'Chocolate Bar',
            },
            {
              id: 'go_to',
              step: 1,
            }
          ]
        }
      ]
    },
    {
      title: 'The Arrival',
      texts: [
        "You have arrived in Japan!",
      ],
      actions: [
        {
          text: 'Thanks the stewart.',
          conditions: [
            {
              id: "has_item",
              item: 'Chocolate Bar',
            }
          ],
          effects: [
            {
              id: 'use_item',
              item: 'Chocolate Bar',
            },
            {
              id: 'go_to',
              step: 2,
            }
          ]
        }
      ]
    }
  ],
}