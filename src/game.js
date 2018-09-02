export default {
  steps: [
    {
      title: 'じょしょ',
      texts: [
        "日本の冒険へようこそ！",
        "/imgs/00-1.png",
        "ともだちがあなたをしょうたいする。かれは大きなもりのちかくにすんでいる。",
        "あなたはきゅうか中です。それがあなたがいくりゆうです。",
        "あなたのものをえらんでください。",
        "ゲームをほぞんすることをわすれないでください！"
      ],
      actions: [
        {
          text: 'かまら　と　GPS　と　スマートフォン。',
          effects: [
            {
              id: 'take_item',
              item: 'かまら',
            },
            {
              id: 'take_item',
              item: 'GPS',
            },
            {
              id: 'take_item',
              item: 'スマートフォン',
            },
            {
              id: 'go_to',
              step: 1,
            }
          ]
        },
        {
          text: 'かみ　と　日本地図　と　電話',
          effects: [
            {
              id: 'take_item',
              item: 'かみ',
            },
            {
              id: 'take_item',
              item: '日本地図',
            },
            {
              id: 'take_item',
              item: '電話',
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
      title: 'とうちゃく',
      texts: [
        "あなたは　日本　に到着しました！　東京に飛行機を出る。",
        "/sounds/01-1.mp3",
        "むらにいくひつよおうがあります。 しかし、名前を知っているだけです。",
      ],
      actions: [
        {
          text: 'GPS を使用する',
          conditions: [
            {
              id: "has_item",
              item: 'GPS',
            }
          ],
          effects: [
            {
              id: 'go_to',
              step: 4,
            }
          ]
        },
        {
          text: '地図 を使用する',
          conditions: [
            {
              id: "has_item",
              item: '日本地図',
            }
          ],
          effects: [
            {
              id: 'go_to',
              step: 2,
            }
          ]
        },
        {
          text: 'だれかにたのむ。',
          effects: [
            {
              id: 'go_to',
              step: 3,
            }
          ]
        }
      ]
    },
    {
      title: '???',
      texts: [
        "地図は難しい。 しかし、あなたはそれに村を見つけた。"
      ],
      actions: [
        {
          text: "だれかにたのむ。",
          effects: [
            {
              id: "go_to",
              step: 3,
            }
          ]
        }
      ],
    },
    {
      title: '誰か',
      texts: [
        "あなたは地元のガイドを見つけました。"
      ],
      actions: [
        {
          text: '地図 を表示する',
          conditions: [
            {
              id: "has_item",
              item: '日本地図',
            }
          ],
          effects: [
            {
              id: 'go_to',
              step: 5,
            }
          ]
        },
        {
          text: '私は村に行きたい',
          effects: [
            {
              id: 'go_to',
              step: 5,
            }
          ],
        },
      ],
    },
    {
      title: '簡単！',
      texts: [
        "あなたはGPSを使用。あなたはいくつかのバスと電車を利用。",
        "最後に、あなたは村に到着。",
      ],
      actions: [],
    },
    {
      title: 'Ready to go',
      texts: [
        "The local guide tells you how to reach the village."
      ],
      actions: [],
    }
  ],
};
