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
      actions: [
        {
          text: '指示に従って。',
          effects: [
            {
              id: "go_to",
              step: 6,
            }
          ]
        }
      ],
    },
    {
      title: '指示',
      texts: [
        "彼は村に行く方法を教えてくれる。"
      ],
      actions: [
        {
          text: '指示に従って。',
          effects: [
            {
              id: "go_to",
              step: 6
            }
          ]
        }
      ],
    },
    {
      title: "ちんもく",
      texts: [
        "あなたは村に到着。しかし、何かが間違っています。", // Arrived, something is wrong.
        "音はありません。誰もいない。村は空です。", // no sound, no one, empty.
        "/sounds/06-1.mp3",
        "嵐が来ている。" // A storm is coming.
      ],
      actions: [
        {
          text: 'ともだち が でんわ お します。', // call friend
          effects: [
            {
              id: 'go_to',
              step: 7, // no answer
            }
          ]
        },
        {
          text: '家を探してみて', // search for the house
          effects: [
            {
              id: 'go_to',
              step: 8,
            }
          ]
        },
        {
          text: '村の中心に行く', //Go to center of village
          effects: [
            {
              id: 'go_to',
              step: 9,
            }
          ]
        }
      ]
    },
    {
      title: '電話が鳴っています...', // Call a friend no one answers
      texts: [
        'だれ も でんわ に こたえません'
      ],
      actions: [
        {
          text: '家を探してみて', // search for the house
          effects: [
            {
              id: 'go_to',
              step: 8,
            }
          ]
        },
        {
          text: '村の中心に行く', //Go to center of village
          effects: [
            {
              id: 'go_to',
              step: 9,
            }
          ]
        }
      ]
    },
    {
      title: '家を探してみて', // Search the house
      texts: [
        "彼は農場と森の近くに住んでいます。",
        "近くに湖があります。",
        "家は2本の木の間にある。",
        "/imgs/08-1.png",
      ],
      actions: [
        {
          text: '村の中心に行く', //Go to center of village
          effects: [
            {
              id: 'go_to',
              step: 9,
            }
          ]
        },
        {
          text: 'ともだち が でんわ お します。', // call friend
          effects: [
            {
              id: 'go_to',
              step: 7, // no answer
            }
          ]
        },
        {
          text: '1に行く', //Go to House 1
          effects: [
            {
              id: 'go_to',
              step: 10,
            }
          ]
        },
        {
          text: '2に行く', //Go to House 2
          effects: [
            {
              id: 'go_to',
              step: 11,
            }
          ]
        },
        {
          text: '3に行く', //Go to House 3
          effects: [
            {
              id: 'go_to',
              step: 12,
            }
          ]
        },
        {
          text: '4に行く', //Go to House 4
          effects: [
            {
              id: 'go_to',
              step: 13,
            }
          ]
        },
        {
          text: '5に行く', //Go to House 5
          effects: [
            {
              id: 'go_to',
              step: 14,
            }
          ]
        }
      ],
    },
    { title: '村の中心', // Center of village
      texts: [
        "老人だけがいる。かれ わ あなた お みます。",
      ],
      actions: [
        {
          text: '彼を無視します。', // ignore old man
          effects: [
            {
              id: 'go_to',
              step: 15,
            }
          ]
        },
      ],
    },
    { title: '家1', // House 1, abandonned
      texts: [
        "古い放棄された家です。",
        "誰もここに住んでいない。",
      ],
      actions: [
        {
          text: '地図に戻る。', // Return to map
          effects: [
            {
              id: 'go_to',
              step: 8,
            }
          ]
        },
      ],
    },
    { title: '家2', // House 2, witch trap.
      texts: [
        "家は古いです。でも光があります。",
        "庭にはたくさんの花があります。",
      ],
      actions: [
        {
          text: '地図に戻る。', // Return to map
          effects: [
            {
              id: 'go_to',
              step: 8,
            }
          ]
        },
        {
          text: 'ドアに行きます。', // Knock.
          effects: [
            {
              id: 'go_to',
              step: 16,
            }
          ]
        },
      ],
    },
    { title: '家3', // House 3, strange neighboor
      texts: [
        "新しい伝統的な家です。あなたは内部の光を見る。",
        "庭には木のログと斧があります。木こりです。"
      ],
      actions: [
        {
          text: '地図に戻る。', // Return to map
          effects: [
            {
              id: 'go_to',
              step: 8,
            }
          ]
        },
        {
          text: 'ドアに行きます。', // Knock.
          effects: [
            {
              id: 'go_to',
              step: 18,
            }
          ]
        },
      ],
    },
    { title: '家4', // House 4, good one !
      texts: [
        "家4"
      ],
      actions: [
        {
          text: '地図に戻る。', // Return to map
          effects: [
            {
              id: 'go_to',
              step: 8,
            }
          ]
        },
      ],
    },
    { title: '家5', // House 5, abandonned house.
      texts: [
        "古い放棄された家です。",
        "誰もここに住んでいない。",
      ],
      actions: [
        {
          text: '地図に戻る。', // Return to map
          effects: [
            {
              id: 'go_to',
              step: 8,
            }
          ]
        },
      ],
    },
    { title: '.', // 15, Old man ignored.
      texts: [
        "."
      ],
      actions: [],
    },
    { title: '神秘的な女性', // 16, The Witch opens the door.
      texts: [
        "女がドアを開けます。",
        "はｄじめまして。どうぞ よろしく おねがいします。",
        "あなたは丁寧に答えます。",
        "彼女は「ここで何が起こっているのか説明できる」と言う。「お茶を飲みに来てください」。",
      ],
      actions: [
        {
          text: '拒否するそして去る。', // Return to map
          effects: [
            {
              id: 'go_to',
              step: 8,
            }
          ]
        },
        {
          text: '同意します。', // Trapped!
          effects: [
            {
              id: 'go_to',
              step: 17,
            }
          ]
        },
      ],
    },
    { title: '神秘的な女性', // 17, The Witch's poison, THE END...
      texts: [
        "あなたはお茶を飲んで議論する。彼女はあなたに奇妙なことをたくさん説明します。",
        "でも,お茶は毒です。あなたは盆栽に変身しています。",
        "そして、庭にさらされています。",
        "あなたの冒険の終わり。"
      ],
      actions: [
      ],
    },
    { title: '神秘的な女性', // 18, The neightbour opens the door.
      texts: [
        "強い男がドアを開けます。",
        "「今日は!」と言う。「どういうご用件ですか？」",
        "友人を探しているしています...",
        "「私はあなたの友人を知って。彼はしばしば森にとどまります。その道に従ってください。」",
      ],
      actions: [
      ],
    }
  ],
};
