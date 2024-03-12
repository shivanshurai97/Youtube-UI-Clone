export const commentsData = [
  {
    id: 1,
    name: "John Doe",
    text: "Wow, this is really interesting! I never thought about it that way.",
    replies: [
      {
        id: 11,
        name: "Jane Smith",
        text: "I agree, John! This topic has always fascinated me.",
        replies: [
          {
            id: 111,
            name: "Michael Johnson",
            text: "Absolutely! I've been researching this topic lately, and there's so much to learn.",
            replies: [],
          },
          {
            id: 112,
            name: "Emily Brown",
            text: "It's great to see such insightful discussions here.",
            replies: [],
          },
        ],
      },
      {
        id: 12,
        name: "Sam Wilson",
        text: "I have a different perspective on this. Let's discuss further.",
        replies: [],
      },
    ],
  },
  {
    id: 2,
    name: "Alice Johnson",
    text: "This is a really thought-provoking comment. Thanks for sharing!",
    replies: [
      {
        id: 21,
        name: "Chris Evans",
        text: "I couldn't agree more, Alice! Your insights are always valuable.",
        replies: [
          {
            id: 211,
            name: "David Brown",
            text: "I've been following your contributions to this topic, Alice, and I'm impressed.",
            replies: [],
          },
          {
            id: 212,
            name: "Sarah Parker",
            text: "Your points are well-reasoned, Alice. Let's keep the conversation going.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Robert Smith",
    text: "I appreciate the clarity in your comment. It really helped me understand better.",
    replies: [],
  },
  {
    id: 4,
    name: "Sophia Davis",
    text: "I had similar thoughts, Robert. Your explanation cleared up a lot of confusion for me.",
    replies: [
      {
        id: 41,
        name: "Ethan Wilson",
        text: "Thanks for sharing your thoughts, Sophia. I'm glad we're on the same page.",
        replies: [
          {
            id: 411,
            name: "Olivia Moore",
            text: "This conversation has been enlightening. I've learned a lot from everyone's perspectives.",
            replies: [
              {
                id: 4111,
                name: "Daniel Taylor",
                text: "I couldn't agree more, Olivia. It's inspiring to see such meaningful exchanges.",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        id: 42,
        name: "Ava Brown",
        text: "I have a different viewpoint on this, Sophia. Let's explore this further.",
        replies: [],
      },
    ],
  },
];
