const affirmations = [
  {
    text: "I am successful.",
  },
  {
    text: "I am confident.",
  },
  {
    text: "I am powerful.",
  },
  {
    text: "I am strong.",
  },
  {
    text: "I am getting better and better every day.",
  },
  {
    text: "All I need is within me right now.",
  },
  {
    text: "I wake up motivated.",
  },
  {
    text: "I am an unstoppable force of nature.",
  },
  {
    text: "I am a living, breathing example of motivation.",
  },
  {
    text: "I am living with abundance.",
  },
  {
    text: "I am having a positive and inspiring impact on the people I come into contact with.",
  },
  {
    text: "I am inspiring people through my work.",
  },
  {
    text: "I’m rising above the thoughts that are trying to make me angry or afraid.",
  },
  {
    text: "Today is a phenomenal day.",
  },
  {
    text: "I am turning DOWN the volume of negativity in my life.",
  },
  {
    text: "I am filled with focus.",
  },
  {
    text: "I am not pushed by my problems; I am led by my dreams.",
  },
  {
    text: "I am grateful for everything I have in my life.",
  },
  {
    text: "I am independent and self-sufficient.",
  },
  {
    text: "I can be whatever I want to be.",
  },
  {
    text: "I am not defined my by past; I am driven by my future.",
  },
  {
    text: "I use obstacles to motivate me to learn and grow.",
  },
  {
    text: "Today will be a productive day.",
  },
  {
    text: "I am intelligent and focused.",
  },
  {
    text: "I feel more grateful each day.",
  },
  {
    text: "I am getting healthier every day.",
  },
  {
    text: "Each and every day, I am getting closer to achieving my goals.",
  },
  {
    text: "I am constantly growing and evolving into a better person.",
  },
  {
    text: "I’m freeing myself from all destructive doubt and fear.",
  },
  {
    text: "I accept myself for who I am and create peace, power and confidence of mind and of heart.",
  },
  {
    text: "I am going to forgive myself and free myself. I deserve to forgive and be forgiven.",
  },
  {
    text: "I am healing and strengthening every day.",
  },
  {
    text: "I must remember the incredible power I possess within me to achieve anything I desire.",
  },
  {
    text: "I belong in this world; there are people that care about me and my worth.",
  },
  {
    text: "My past might be ugly, but I am still beautiful.",
  },
  {
    text: "I have made mistakes, but I will not let them define me.",
  },
  {
    text: "My soul radiates from the inside and warms the souls of others.",
  },
  {
    text: "Note to self: I am going to make you so proud.",
  },
  {
    text: "I finish what matters and let go of what does not.",
  },
  {
    text: "I feed my spirit. I train my body. I focus my mind. This is my time.",
  },
  {
    text: "My life has meaning. What I do has meaning.",
  },
  {
    text: "What I have done today was the best I was able to do today.",
  },
  {
    text: "Happiness is a choice, and today I choose to be happy.",
  },
  {
    text: "I create a safe and secure space for myself wherever I am.",
  },
  {
    text: "I give myself permission to do what is right for me.",
  },
  {
    text: "I give myself space to grow and learn.",
  },
  {
    text: "I allow myself to be who I am without judgment.",
  },
  {
    text: "I listen to my intuition and trust my inner guide.",
  },
  {
    text: "I accept my emotions and let them serve their purpose.",
  },
  {
    text: "I give myself the care and attention that I deserve.",
  },
  {
    text: "My drive and ambition allow me to achieve my goals.",
  },
  {
    text: "I am always headed in the right direction.",
  },
  {
    text: "I trust that I am on the right path.",
  },
  {
    text: "I am creatively inspired by the world around me.",
  },
  {
    text: "My mind is full of brilliant ideas.",
  },
  {
    text: "I put my energy into things that matter to me.",
  },
  {
    text: "I trust myself to make the right decision.",
  },
  {
    text: "I am becoming closer to my true self every day.",
  },
  {
    text: "I am learning valuable lessons from myself every day.",
  },
  {
    text: "I am at peace with who I am as a person.",
  },
  {
    text: "I make a difference in the world by simply existing in it.",
  },
];

const randomNum = Math.floor(Math.random() * affirmations.length);

document.getElementById("affirmation-text").innerText =
  affirmations[randomNum].text;
